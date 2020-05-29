<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Toa extends JsonResource {
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array
	 */
	public function toArray($request) {
		return [
			'ma_toa' => $this->ma_toa,
			'ten_toa' => $this->ten_toa,
			'dia_chi' => $this->dia_chi,
			'tinh_trang' =>$this->tinh_trang,
			'ten_tinh_trang' =>Toa::tenTrangThai($this->tinh_trang),
		];
	}
	public static function tenTrangThai($tinh_trang) {
		switch ($tinh_trang) {
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
