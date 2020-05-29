<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Phong;
use Illuminate\Http\Request;
use App\Http\Requests\PhongRequest;

class PhongController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function getPhongTheoTang(PhongRequest $rq) {
		$phong = Phong::where('ma_tang',$rq->get('ma_tang'))
				->join('cau_hinh', 'phong.ma_cau_hinh', 'cau_hinh.ma_cau_hinh')
				->
				->get();

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create() {
		//
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
	 * @param  \App\Phong  $phong
	 * @return \Illuminate\Http\Response
	 */
	public function show(Phong $phong) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Phong  $phong
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Phong $phong) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Phong  $phong
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Phong $phong) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Phong  $phong
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Phong $phong) {
		//
	}
}
