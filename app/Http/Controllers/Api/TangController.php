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

class TangController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function gettang(TangRequest $rq) {
		$tang = new Tang();
		return ResponseMau::Store([
			'data' => TangResource::collection($tang->gettang($rq)),
		]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create(Request $rq) {

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Tang  $tang
	 * @return \Illuminate\Http\Response
	 */
	public function show(Tang $tang) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Tang  $tang
	 * @return \Illuminate\Http\Response
	 */
	public function editorcreate(TangRequest $rq) {
		try {
			$a = Tang::updateOrCreate(['ma_tang' => $rq->ma_tang],[
				'ten_tang' => $rq->ten_tang,
				'ma_toa' => $rq->ma_toa
			]);
			return ResponseMau::Store([
				'data' => $a,
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'string' => 'error',
				'string' =>DB::getQueryLog(),
			]);
		}
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Tang  $tang
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Tang $tang) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Tang  $tang
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Tang $tang) {
		//
	}
}
