<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CauHinhResource extends JsonResource {
    public function toArray($request) {
        return [
            'ma_cau_hinh' => $this->ma_cau_hinh,
            'mo_ta'       => str_replace('`', '', $this->mo_ta),
            'ma_loai'     => $this->ma_loai,
            'ten_loai'    => $this->loai->ten_loai,
            'mo_ta_loai'  => $this->loai->mo_ta,
        ];
    }
    public function infoCase() {
        $mo_ta = explode('`', $this->mo_ta);
        return [
            'ma_cau_hinh' => $this->ma_cau_hinh,
            'ma_loai'     => $this->ma_loai,
            'cpu'         => $mo_ta[1],
            'main'        => $mo_ta[3],
            'ram'         => $mo_ta[5],
            'o_cung'      => $mo_ta[7],
            'ten_loai'    => $this->loai->ten_loai,
            'mo_ta_loai'  => $this->loai->mo_ta,
        ];
    }
}
