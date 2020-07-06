<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PhanCongChiTietResource extends JsonResource {
    public function toArray($request) {
        return [
            'ma_phan_cong'       => $this->ma_phan_cong,
            'ma_lop'             => $this->ma_lop,
            'ma_mon_hoc'         => $this->ma_mon_hoc,
            'ma_nguoi_dung'      => $this->ma_nguoi_dung,
            'tinh_trang'         => $this->tinh_trang,
            'phan_cong_chi_tiet' => $this->phanCongChiTiet,
            'ho_ten_nguoi_dung'  => $this->nguoiDung->ho_ten,
            'ma_cap_do'          => $this->nguoiDung->ma_cap_do,
        ];
    }
    public function toOne() {
        return [
            'ma_phan_cong'       => $this->ma_phan_cong,
            'ma_lop'             => $this->ma_lop,
            'ma_mon_hoc'         => $this->ma_mon_hoc,
            'ma_nguoi_dung'      => $this->ma_nguoi_dung,
            'ho_ten_nguoi_dung'  => $this->nguoiDung->ho_ten,
            'ma_cap_do'          => $this->nguoiDung->ma_cap_do,
            'ten_cap_do'         => $this->nguoiDung->capDo->ten_cap_do,
            'ma_tinh_trang'      => $this->tinh_trang,
            'ten_tinh_trang'     => $this->tinhTrang(),
            'phan_cong_chi_tiet' => $this->phanCongChiTiet,
        ];
    }
}
