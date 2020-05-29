<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Tang extends JsonResource {
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array
	 */
	public function toArray($request) {
		return [
			'ma_tang' => $this->ma_tang,
			'ten_tang' => $this->ten_tang,
			'ma_toa' => $this->ma_toa,
			'ten_toa' => $this->ten_toa,
			'dia_chi' => $this->dia_chi,
			'tinh_trang' => $this->tinh_trang,
			'ten_tinh_trang' => $this->tenTinhTrang(),
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
