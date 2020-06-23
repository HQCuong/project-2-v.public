<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Phong extends JsonResource {
    public function toArray($request) {
        return [
            'ma_phong'       => $this->ma_phong,
            'ten_phong'      => $this->ten_phong,
            'so_cho_ngoi'    => $this->so_cho_ngoi,
            'ghi_chu'        => $this->ghi_chu,
            'ma_tinh_trang'  => $this->ma_tinh_trang,
            'ten_tinh_trang' => $this->tenTinhTrang(),
        ];
    }
    public function tenTinhTrang() {
        switch ($this->ma_tinh_trang) {
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
