<?php

namespace App\Http\Middleware;

use ResponseMau;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CheckGiaoVien {
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next) {
		if ($request->input('cap_do') == 2) {
			return $next($request);
		} else {
			$res = ResponseMau::Store(['bool' => false, 'string' => ResponseMau::ERROR_KEY]);
			return response()->json($res, Response::HTTP_UNAUTHORIZED);
		}
	}
}
