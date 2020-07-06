<?php

namespace App\Http\Requests;

use App\Rules\MaLopRule;
use Illuminate\Foundation\Http\FormRequest;
use RegexRule;

class PhanCongRequest extends FormRequest {
    use Traits\ListError;
    public function rules() {
        return [
            'ma_phan_cong'  => RegexRule::REGEX_EXISTS_MA_PHAN_CONG,
            'ma_lop'        => new MaLopRule(),
            'ma_mon_hoc'    => RegexRule::REGEX_PHAN_CONG_MA_MON_HOC,
            'ma_nguoi_dung' => RegexRule::REGEX_PHAN_CONG_MA_NGUOI_DUNG,
        ];
    }
    public function attributes() {
        return [
            'ma_phan_cong'  => 'Phân công',
            'ma_lop'        => 'Lớp',
            'ma_mon_hoc'    => 'Môn học',
            'ma_nguoi_dung' => 'Người dùng',
        ];
    }
}
