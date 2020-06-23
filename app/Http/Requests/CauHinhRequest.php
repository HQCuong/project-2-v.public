<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use RegexRule;
use ResponseMau;

class CauHinhRequest extends FormRequest {
    use Traits\ListError;
    public function rules() {
        return [
            'cpu'         => RegexRule::REGEX_CAU_HINH_CPU,
            'ram'         => RegexRule::REGEX_CAU_HINH_RAM,
            'main'        => RegexRule::REGEX_CAU_HINH_MAIN,
            'o_cung'      => RegexRule::REGEX_CAU_HINH_O_CUNG,
            'ma_cau_hinh' => RegexRule::REGEX_CAU_HINH_MA_CAU_HINH,
            'mo_ta'       => RegexRule::REGEX_CAU_HINH_MO_TA,
            'ma_loai'     => RegexRule::REGEX_CAU_HINH_MA_LOAI,
        ];
    }
    public function attributes() {
        return [
            'cpu'         => 'CPU',
            'ram'         => 'RAM',
            'main'        => 'Main',
            'o_cung'      => 'Ổ Cứng',
            'ma_cau_hinh' => 'Cấu hình',
            'mo_ta'       => 'Mô tả',
            'ma_loai'     => 'Loại',
        ];
    }
    protected function failedValidation(Validator $validator) {
        $error           = $validator->messages();
        $messages_return = ResponseMau::ERROR_NOT_DETERMINED;
        if ($error->has('cpu')) {
            $messages_return = ResponseMau::ERROR_CAU_HINH_CPU;
        }
        if ($error->has('ram')) {
            $messages_return = ResponseMau::ERROR_CAU_HINH_RAM;
        }
        if ($error->has('main')) {
            $messages_return = ResponseMau::ERROR_CAU_HINH_MAIN;
        }
        if ($error->has('o_cung')) {
            $messages_return = ResponseMau::ERROR_CAU_HINH_O_CUNG;
        }
        if ($error->has('ma_cau_hinh')) {
            $messages_return = ResponseMau::ERROR_CAU_HINH_MA_CAU_HINH;
        }
        if ($error->has('mo_ta')) {
            $messages_return = ResponseMau::ERROR_CAU_HINH_MO_TA;
        }
        if ($error->has('ma_loai')) {
            $messages_return = ResponseMau::ERROR_CAU_HINH_MA_LOAI;
        }
        throw new HttpResponseException(
            ResponseMau::Store(['bool' => false, 'string' => $messages_return])
        );
    }
}
