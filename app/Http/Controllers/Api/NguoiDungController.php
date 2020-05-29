<?php

namespace App\Http\Controllers\Api;

use App;
//use App\Http\Controllers\Api\Response;
use App\Http\Controllers\Controller;
use App\Http\Requests\NguoiDungRequest;
use App\Http\Resources\NguoiDung as NguoiDungResource;
use App\Models\NguoiDung;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use ResponseMau;

//
//demo
class NguoiDungController extends Controller {
	public function create(NguoiDungRequest $rq) {
		try {
			$user = new NguoiDung();
			$user->tai_khoan = $rq->get('tai_khoan');
			$user->email = $rq->get('email');
			$user->sdt = $rq->get('sdt');
			$user->cap_do = 2;
			$user->mat_khau = Hash::make($rq->get('mat_khau'));
			$user->key = Str::random(256);
			$user->save();
			return ResponseMau::Store([
				'string' => ResponseMau::SUCCESS_USER_CREATE,
				'data' => NguoiDungResource::viewinfo($user),
				'code' => Response::HTTP_OK,
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'string' => ResponseMau::ERROR_USER_DUPLICATE_INFO,
				'bool' => false,
			]);
		}
	}
	public function login($tai_khoan, $mat_khau) {
		$user = NguoiDung::where('tai_khoan', $tai_khoan)
			->orWhere('email', $tai_khoan)
			->first();
		if (!is_null($user) && Hash::check($mat_khau, $user->mat_khau) == true) {
			$user->key = Str::random(256);
			$user->save();
			return ResponseMau::Store([
				'data' => new NguoiDungResource($user),
			]);
		} else {
			return ResponseMau::Store([
				'bool' => false,
				'string' => ResponseMau::ERROR_USER_LOGIN,
			]);
		}
	}
	public function logout(Request $rq) {
		try {
			$user = NguoiDung::where('ma_nguoi_dung', $rq->get('ma_nguoi_dung'))->first();
			$user->key = Str::random(256);
			$user->save();
			return ResponseMau::Store([
				'string' => ResponseMau::SUCCESS_USER_LOGOUT,
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'string' => ResponseMau::ERROR_NOT_DETERMINED,
				'bool' => false,
			]);
		}
	}
	public function changepassword(NguoiDungRequest $rq) {
		$user = NguoiDung::where('ma_nguoi_dung', $rq->get('ma_nguoi_dung'))->first();
		if (Hash::check($rq->get('mat_khau'), $user->mat_khau) == true) {
			$user->mat_khau = Hash::make($rq->get('mat_khau_moi'));
			$user->key = Str::random(256);
			$user->save();
			return ResponseMau::Store([
				'string' => ResponseMau::SUCCESS_USER_CHANGEPASSWORD,
				'data' => new NguoiDungResource($user),
			]);
		} else {
			return ResponseMau::Store([
				'bool' => false,
				'string' => ResponseMau::ERROR_USER_CHANGEPASSWORD,
			]);
		}
	}
	public function resetpassword(Request $rq) {
		return ResponseMau::Store([
			'string' => ResponseMau::ERROR_USER_RESETPASSWORD,
			'bool' => false,
		]);
	}
	public function updateinfo(NguoiDungRequest $rq, $id) {
		try {
			if ($rq->cap_do == 0 && $id != $rq->get('ma_nguoi_dung')) {
				$user = NguoiDung::where('ma_nguoi_dung', $id)->first();
				if ($user->cap_do == 0) {
					return ResponseMau::Store([
						'bool' => false,
						'string' => ResponseMau::ERROR_USER_UPDATE_INFO_CAP_DO,
					]);
				}
				if (!is_null($rq->get('mat_khau'))) {
					$user->mat_khau = Hash::make($rq->get('mat_khau'));
				}

			} else {
				$user = NguoiDung::where('ma_nguoi_dung', $rq->get('ma_nguoi_dung'))->first();
			}
			$user->tai_khoan = !is_null($rq->get('tai_khoan')) ? $rq->get('tai_khoan') : $user->tai_khoan;
			$user->email = !is_null($rq->get('email')) ? $rq->get('email') : $user->email;
			$user->sdt = !is_null($rq->get('sdt')) ? $rq->get('sdt') : $user->sdt;
			$user->key = Str::random(256);
			$user->save();
			return ResponseMau::Store([
				'string' => ResponseMau::SUCCESS_USER_UPDATE_INFO,
				'data' => new NguoiDungResource($user),
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'string' => ResponseMau::ERROR_NOT_DETERMINED,
				'bool' => false,
			]);
		}
	}
	public function viewgiaovienkithuat() {
		try {
			$user = NguoiDung::where('cap_do', 1)
				->orWhere('cap_do', 2)
				->get();
			return ResponseMau::Store([
				'data' => NguoiDungResource::viewmuti($user),
			]);
		} catch (\Illuminate\Database\QueryException $e) {
			return ResponseMau::Store([
				'bool' => false,
				'string' => ResponseMau::ERROR_NOT_DETERMINED,
			]);
		}
	}
	public function duplicate_email_sdt(NguoiDungRequest $rq) {
		return ResponseMau::Store([]);
	}
	public function check_key() {
		return ResponseMau::Store([]);
	}
}