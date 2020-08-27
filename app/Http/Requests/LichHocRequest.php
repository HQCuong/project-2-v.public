<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use RegexRule;

class LichHocRequest extends FormRequest {
    use Traits\ListError;
    public function rules() {
        return [
            'ma_mon_hoc'   => RegexRule::REGEX_EXISTS_MA_MON_HOC,
            'ma_phong'     => RegexRule::REGEX_EXISTS_MA_PHONG,
            'ma_giao_vien' => RegexRule::REGEX_EXISTS_MA_NGUOI_DUNG,
            'ma_phan_cong' => RegexRule::REGEX_EXISTS_MA_PHAN_CONG,
        ];
    }
    public function attributes() {
        return [
            'ma_mon_hoc'   => 'Môn học',
            'ma_phong'     => 'Phòng',
            'ma_giao_vien' => 'Người dùng',
            'ma_phan_cong' => 'Phân công',
        ];
    }
}
