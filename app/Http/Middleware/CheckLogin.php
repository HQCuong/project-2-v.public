<?php

namespace App\Http\Middleware;
use App\Http\Controllers\Api\Mau;
use App\Models\NguoiDung;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

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
			return $next($request);
		} else {
			$res = Mau::Store(['bool' => false, 'string' => 'Bạn không có quyền truy cập']);
			return response()->json($res, Response::HTTP_UNAUTHORIZED);
		}
	}
}
