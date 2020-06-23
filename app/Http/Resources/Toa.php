<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Toa extends JsonResource {
    public function toArray($request) {
        return [
            'ma_toa'         => $this->ma_toa,
            'ten_toa'        => $this->ten_toa,
            'dia_chi'        => $this->dia_chi,
            'ma_tinh_trang'  => $this->ma_tinh_trang,
            'ten_tinh_trang' => Toa::tenTrangThai($this->ma_tinh_trang),
        ];
    }
    public static function tenTrangThai($ma_tinh_trang) {
        switch ($ma_tinh_trang) {
        case 1:
            return 'Hoạt Động';
            break;
        case 0:
            return 'Đã Đóng';
            break;
        default:
            return 'None';
            break;
        }
    }
}
