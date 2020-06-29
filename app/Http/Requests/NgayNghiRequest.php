<?php

namespace App\Http\Requests;

use App\Rules\MaGiaoVienRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use RegexRule;
use ResponseMau;

class NgayNghiRequest extends FormRequest {
    use Traits\ListError;
    public function rules() {
        return [
            'ma_giao_vien'    => new MaGiaoVienRule(),
            'ngay'            => RegexRule::REGEX_NGAY,
            'ma_ca'           => RegexRule::REGEX_MA_CA,
            'ghi_chu'         => RegexRule::REGEX_GHI_CHU,
            'ma_giao_vien_cu' => new MaGiaoVienRule(),
            'ngay_cu'         => RegexRule::REGEX_NGAY,
            'ma_ca_cu'        => RegexRule::REGEX_MA_CA,
        ];
    }
    public function attributes() {
        return [
            'ma_giao_vien'    => 'Giáo viên',
            'ngay'            => 'Ngày',
            'ma_ca'           => 'Ca',
            'ghi_chu'         => 'Ghi chú',
            'ma_giao_vien_cu' => 'Giáo viên cũ',
            'ngay_cu'         => 'Ngày cũ',
            'ma_ca_cu'        => 'Ca cũ',
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
