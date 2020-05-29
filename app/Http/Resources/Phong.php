<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Phong extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'ma_phong' => $this->ma_phong,
            'ten_phong' => $this->ten_phong,
            'so_cho_ngoi' => $this->so_cho_ngoi,
            'ma_cau_hinh' => $this->ma_cau_hinh,
            'tinh_trang' => $this->tinh_trang,
            'ten_tinh_trang' => $this->tenTinhTrang(),
            'cac_mon_co_the_hoc' =>
        ];
    }
    public function tenTinhTrang() {
        switch ($this->tinh_trang) {
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
