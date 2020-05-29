<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NguoiDung extends JsonResource {
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
			'sdt' => $this->sdt,
			'cap_do' => $this->cap_do,
			'ten_cap_do' => NguoiDung::tenCapDo($this->cap_do),
			'key' => $this->key,
		];
	}
	public static function viewinfo($array) {
		return [
			'ma_nguoi_dung' => $array->ma_nguoi_dung,
			'tai_khoan' => $array->tai_khoan,
			'email' => $array->email,
			'sdt' => $array->sdt,
			'ten_cap_do' => NguoiDung::tenCapDo($array->cap_do),
		];
	}
	public static function viewmuti($user) {
		$rt = [];
		foreach ($user as $value) {
			array_push($rt, NguoiDung::viewinfo($value));
		}
		return $rt;
	}
	public static function tenCapDo($cap_do) {
		switch ($cap_do) {
		case 0:
			return 'Giáo Vụ';
			break;
		case 1:
			return 'Kĩ Thuật';
			break;
		case 2:
			return 'Giáo Viên';
			break;
		default:
			return 'None';
			break;
		}
	}
}
