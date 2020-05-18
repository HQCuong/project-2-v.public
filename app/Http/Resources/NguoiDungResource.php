<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NguoiDungResource extends JsonResource {
	/**
	 * Transform the resource into an array.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return array
	 */
	public function toArray($request) {
		return [
			'ma_nguoi_dung' => $this->ma_nguoi_dung,
			'tai_khoan' => $this->tai_khoan,
			'email' => $this->email,
			'cap_do' => $this->cap_do,
			'key' => $this->key,
		];
	}
}
