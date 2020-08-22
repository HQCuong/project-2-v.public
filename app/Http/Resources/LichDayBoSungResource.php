<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LichDayBoSungResource extends JsonResource {
    public function toArray($request) {
        return [
            'ma_lich_day_bo_sung' => $this->ma_lich_day_bo_sung,
            'ngay'                => $this->ngay,
            'ma_lop'              => $this->ma_lop,
            'nguoi_dung'          => $this->nguoiDung,
            'ma_mon_hoc'          => $this->ma_mon_hoc,
            'ca'                  => $this->ca,
            'phong'               => $this->phong,
            'ghi_chu'             => $this->ghi_chu,
            'tinh_trang'          => $this->tinh_trang,
            'ten_tinh_trang'      => $this->tenTinhTrang(),
        ];
    }
    public function tenTinhTrang() {
        switch ($this->tinh_trang) {
        case 1:
            return 'Hoạt Động';
            break;
        case 2:
            return 'Đã Hủy';
            break;
        default:
            return 'Chưa Xác Định';
            break;
        }
    }
}
