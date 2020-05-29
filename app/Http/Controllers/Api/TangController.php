<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TangRequest;
use App\Models\Tang;
use DB;
use Illuminate\Http\Request;
use ResponseMau;
use Illuminate\Validation\Validator;
use App\Http\Resources\Tang as TangResource;
use Illuminate\Database\QueryException;

class TangController extends Controller {
	public function gettang(TangRequest $rq) {
		$tang = new Tang();
		return ResponseMau::Store([
			'data' => TangResource::collection($tang->gettang($rq)),
		]);
	}
	public function update(TangRequest $rq,$ma_tang) {
		try {
			$tang = Tang::where('ma_tang',$ma_tang)
					->join('toa', 'toa.ma_toa', 'tang.ma_toa')
					->first();
			!is_null($rq->get('ten_tang'))?$tang->ten_tang = $rq->get('ten_tang'):'';
			!is_null($rq->get('ma_toa'))?$tang->ma_toa = $rq->get('ma_toa'):'';
			!is_null($rq->get('tinh_trang'))?$tang->tinh_trang = $rq->get('tinh_trang'):'';
			$tang->save();
			return ResponseMau::Store([
				'data' => new TangResource($tang),
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'bool' => false,
				'string' => ResponseMau::ERROR_TANG_UPDATE_INFO,
			]);
		}
	}
	public function create(TangRequest $rq) {
		try {
			$tang = new Tang();
			!is_null($rq->get('ten_tang'))?$tang->ten_tang = $rq->get('ten_tang'):'';
			!is_null($rq->get('ma_toa'))?$tang->ma_toa = $rq->get('ma_toa'):'';
			$tang->tinh_trang = !is_null($rq->get('tinh_trang'))?$rq->get('tinh_trang'):1;
			$tang->save();
			return ResponseMau::Store([
				'data' => new TangResource($tang),
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'bool' => false,
				'string' => ResponseMau::ERROR_TANG_CREATE,
			]);
		}
	}
}
