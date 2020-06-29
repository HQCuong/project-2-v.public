<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use RegexRule;
use ResponseMau;

class ToaRequest extends FormRequest {
    use Traits\ListError;
    public function rules() {
        return [
            'ten_toa'       => RegexRule::REGEX_TOA_NAME,
            'dia_chi'       => RegexRule::REGEX_TOA_DIA_CHI,
            'ma_tinh_trang' => RegexRule::REGEX_TOA_TINH_TRANG,
        ];
    }
    public function attributes() {
        return [
            'ten_toa'    => 'Tên tòa',
            'dia_chi'    => 'Địa chỉ',
            'tinh_trang' => 'Tình trạng',
        ];
    }
    public function messages() {
        return array_merge($this->defaultMessages(), [
            'ten_toa.regex' => ResponseMau::ERROR_TOA_TEN_TOA,
            'dia_chi.regex' => ResponseMau::ERROR_TOA_DIA_CHI,
        ]);
    }
}
