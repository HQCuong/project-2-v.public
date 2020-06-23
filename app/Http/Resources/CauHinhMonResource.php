<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CauHinhMonResource extends JsonResource {
    public function toArray($request) {
        return [
            'ma_cau_hinh'        => $this->ma_cau_hinh,
            'ma_mon_hoc'         => $this->ma_mon_hoc,
            'ten_mon_tieng_viet' => $this->monHoc->ten_mon_tieng_viet,
            'ten_mon_tieng_anh'  => $this->monHoc->ten_mon_tieng_anh,
        ];
    }
}
