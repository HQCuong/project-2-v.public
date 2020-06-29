<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NguoiDungResource extends JsonResource {
    public function toArray($request) {
        return [
            'ma_nguoi_dung' => $this->ma_nguoi_dung,
            'tai_khoan'     => $this->tai_khoan,
            'email'         => $this->email,
            'sdt'           => $this->sdt,
            'ma_cap_do'     => $this->ma_cap_do,
            'ten_cap_do'    => $this->capDo->ten_cap_do,
        ];
    }
    public function fullInfo() {
        return [
            'ma_nguoi_dung' => $this->ma_nguoi_dung,
            'tai_khoan'     => $this->tai_khoan,
            'email'         => $this->email,
            'sdt'           => $this->sdt,
            'ma_cap_do'     => $this->ma_cap_do,
            'ten_cap_do'    => $this->capDo->ten_cap_do,
            'key'           => $this->key,
        ];
    }
    public function key() {
        return [
            'key' => $this->key,
        ];
    }
}
