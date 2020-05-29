<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Toa as ToaResource;
use App\Models\Toa;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use ResponseMau;
use App\Http\Requests\ToaRequest;


class ToaController extends Controller {
	public function hienToa($ma_toa) {
		try {
			return ResponseMau::Store([
				'data' => ToaResource::collection(
					($ma_toa == 'all') ? Toa::all() : Toa::where('ma_toa', $ma_toa)->get()
				),
			]);
		} catch (QueryException $e) {
			return ResponseMau::Store([
				'bool' => false,
				'string' => ResponseMau::ERROR_NOT_DETERMINED,
			]);
		}
	}
	public function capNhat(ToaRequest $rq,$ma_toa) {
		try {
			$toa = Toa::where('ma_toa',$ma_toa)
				->update([
					'ten_toa' =>$rq->get('ten_toa'),
					'dia_chi' =>$rq->get('dia_chi'),
					'tinh_trang' =>$rq->get('tinh_trang'),
				]);
			return ResponseMau::Store([
				'data' => new ToaResource(Toa::where('ma_toa',$ma_toa)->first()),
			]);
		} catch (QueryException $e) {
			return ResponseMau::Store([
				'bool' => false,
				'string' => ResponseMau::ERROR_TOA_UPDATE_INFO,
			]);
		}
	}
	public function checkInfo(ToaRequest $rq) {
		return ResponseMau::Store([]);
	}
}
