<?php

namespace App\Http\Controllers\Api;

use App;
//use App\Http\Controllers\Api\Response;
use App\Http\Controllers\Api\Mau;
use App\Http\Controllers\Controller;
use App\Http\Resources\NguoiDungResource;
use App\Models\NguoiDung;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class NguoiDungController extends Controller {
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */

	public function logout() {
		$admin = NguoiDungResource::collection(NguoiDung::get());
		$res = Mau::Object($admin);
		return response()->json($res, Response::HTTP_OK);
	}
	public function changepassword($id,$old,$new) {
		$cache = NguoiDung::where('ma_nguoi_dung', $id)->first();
		if(!is_null($cache) && Hash::check($old,$cache->mat_khau)==true)
		{
			$cache->mat_khau = Hash::make($new);
			$cache->save();
			$res = Mau::Store(['string' => 'Đổi mật khẩu thành công']);
			return response()->json($res, Response::HTTP_OK);
		}else{
			$res = Mau::Store(['bool' => false, 'string' => 'Không tồn tại người dùng']);
			return response()->json($res, Response::HTTP_UNAUTHORIZED);
		}
	}
	public function resetpassword($id) {

	}
	public function updateinfo(Request $request, $id) {
		//
	}
	public function login($tai_khoan, $mat_khau) {
		$cache = NguoiDung::where('tai_khoan', $tai_khoan)
				->orWhere('email', $tai_khoan)
				->first();
		$res = Mau::Store(['data' => $cache]);
		if (!is_null($cache)&&Hash::check($mat_khau,$cache->mat_khau)==true) {
			$cache->key = Str::random(256);
			$cache->save();
			$res = Mau::Store(['data' => new NguoiDungResource($cache)]);
			return response()->json($res, Response::HTTP_OK);
		} else {
			$res = Mau::Store(['bool' => false, 'string' => 'Đăng nhập thất bại kiểm tra lại tài khoản hoặc mật khẩu']);
			return response()->json($res, Response::HTTP_UNAUTHORIZED);
		}
	}
}