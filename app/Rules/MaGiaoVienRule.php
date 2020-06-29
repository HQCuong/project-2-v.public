<?php

namespace App\Rules;

use App\Http\Controllers\Api\GiaoVienController;
use Illuminate\Contracts\Validation\Rule;

class MaGiaoVienRule implements Rule {
    public function passes($attribute, $value) {
        if ($value == 0) {
            return true;
        }
        $list_gv = (new GiaoVienController)->getGiaoVien();
        if ($list_gv == false) {
            return false;
        }
        foreach ($list_gv as $key) {
            $data = (object) $key;
            if ($data->ma_can_bo == $value) {
                return true;
            }
        }
    }
    public function message() {
        return ':attribute không hợp lệ';
    }
}
