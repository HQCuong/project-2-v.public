<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PhongRequest;
use App\Http\Resources\Phong as PhongResource;
use App\Models\LichSuChiTiet;
use App\Models\Phong;
use Illuminate\Http\Request;
use ResponseMau;

class PhongController extends Controller {
	public function getPhongTheoTang(PhongRequest $rq) {
		try {
			$phong = Phong::where('ma_tang', $rq->get('ma_tang'))
				->get();
			return ResponseMau::Store([
				'data' => PhongResource::collection($phong),
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'string' => ResponseMau::ERROR_NOT_DETERMINED,
				'bool' => false,
			]);
		}
	}
	public function taoPhong(PhongRequest $rq) {
		try {
			$phong = Phong::create($rq->all());
			return ResponseMau::Store([
				'string' => ResponseMau::SUCCESS_PHONG_CREATE,
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'string' => ResponseMau::ERROR_PHONG_CREATE,
				'bool' => false,
				'data' =>$e,
			]);
		}
	}
	public function xoaPhong(PhongRequest $rq) {
		try {
			$phong = Phong::find($rq->get('ma_phong'))->delete();
			return ResponseMau::Store([
				'string' => ResponseMau::SUCCESS_PHONG_DELETE,
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'string' => ResponseMau::ERROR_PHONG_DELETE,
				'bool' => false,
			]);
		}
	}
	public function hienThiPhong(PhongRequest $rq) {
		try {
			$phong = Phong::find($rq->get('ma_phong'));
			$phong_value =
				dd($phong);
		} catch (\Illuminate\Database\QueryException $e) {

		}
	}
	public function edit(Request $request) {
		$ls = LichSuChiTiet::where('ma_lich_su', '2')
			->where('ma_thiet_bi', '1')
			->update(['ma_kieu' => 1]);
	}
	public function update(Request $request, Phong $phong) {
		//
	}
	public function destroy(Phong $phong) {
		//
	}
}
