<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NgayNghiResource extends JsonResource {
    public function toArray($request) {
        return [
            'ma_giao_vien' => $this->ma_giao_vien,
            'ngay'         => $this->ngay,
            'ma_ca'        => $this->ma_ca,
            'ghi_chu'      => $this->ghi_chu,
            'gio_bat_dau'  => $this->ca->gio_bat_dau,
            'gio_ket_thuc' => $this->ca->gio_ket_thuc,
            'ho_ten'       => $this->giao_vien->ho_ten,
            'email'        => $this->giao_vien->email,
        ];
    }
}
