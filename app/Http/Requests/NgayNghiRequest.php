<?php

namespace App\Http\Requests;

use App\Rules\MaGiaoVienRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Validator;
use RegexRule;

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
            'tinh_trang'      => RegexRule::REGEX_NGAY_NGHI_TINH_TRANG,
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
            'tinh_trang'      => 'Tình trạng',
        ];
    }
    public function withValidator(Validator $validator) {
        $error = $validator->messages();
        if ($this->request->has('ngay') && !$error->has('ngay')) {
            $this->request->add([
                'ngay' => $this->stringToDate($this->request->get('ngay')),
            ]);
        }
        if ($this->request->has('ngay_cu') && !$error->has('ngay_cu')) {
            $this->request->add([
                'ngay_cu' => $this->stringToDate($this->request->get('ngay_cu')),
            ]);
        }
    }
    public function stringToDate($string) {
        $string = str_replace('/', '-', $string);
        $create = date_create($string);
        $format = date_format($create, "Y-m-d");
        return $format;
    }
}
