<?php

namespace App\Http\Requests;

use App\Rules\MaCauHinhWithMaLoai;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use RegexRule;
use ResponseMau;

class CauHinhMonRequest extends FormRequest {
    use Traits\ListError;
    public function rules() {
        return [
            'ma_mon_hoc'  => RegexRule::REGEX_CAU_HINH_MON_MA_MON_HOC,
            'ma_cau_hinh' => new MaCauHinhWithMaLoai(),
        ];
    }
    public function attributes() {
        return [
            'ma_mon_hoc'  => 'Môn học',
            'ma_cau_hinh' => 'Cấu hình',
        ];
    }
    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(
            ResponseMau::Store([
                'bool'   => false,
                'string' => $this->resultError($validator->messages()->toArray()),
            ])
        );
    }
}
