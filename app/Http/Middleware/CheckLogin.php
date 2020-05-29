<?php

namespace App\Http\Middleware;
use App\Models\NguoiDung;
use Closure;
use Illuminate\Http\Request;
use ResponseMau;

class CheckLogin {
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next) {
		$key = NguoiDung::where('key', $request->input('key'))->first();
		if (!is_null($key)) {
			$request->request->add(['cap_do' => $key->cap_do, 'ma_nguoi_dung' => $key->ma_nguoi_dung]);
			return $next($request);
		} else {
			return ResponseMau::Store(['bool' => false, 'string' => ResponseMau::ERROR_KEY]);
		}
	}
}
