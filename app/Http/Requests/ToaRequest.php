<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use RegexRule;
use ResponseMau;

class ToaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ten_toa' => RegexRule::regex_toa_name,
            'dia_chi' => RegexRule::regex_toa_dia_chi,
            'tinh_trang' => RegexRule::regex_toa_tinh_trang,
        ];
    }
    public function messages() {
        return [
            // 'required' => ':attributes trùng hoặc chưa điền',
        ];
    }
    public function attributes() {
        return [
            // 'email' => 'Email',
            // 'sdt' => 'Sđt',
        ];
    }
    protected function failedValidation(Validator $validator) {
        $error = $validator->messages();
        $messages_return = ResponseMau::ERROR_NOT_DETERMINED;
        if ($error->has('ten_toa')) {
            $messages_return = ResponseMau::ERROR_TOA_TEN_TOA;
        }
        if ($error->has('dia_chi')) {
            $messages_return = ResponseMau::ERROR_TOA_DIA_CHI;
        }
        if ($error->has('tinh_trang')) {
            $messages_return = ResponseMau::ERROR_TOA_TRANG_THAI;
        }
        throw new HttpResponseException(
            ResponseMau::Store(['bool' => false, 'string' => $messages_return])
        );
    }
}
