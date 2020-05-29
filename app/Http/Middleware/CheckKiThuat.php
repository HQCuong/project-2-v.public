<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use ResponseMau;

class CheckKiThuat {
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next) {
		if ($request->input('cap_do') == 1) {
			return $next($request);
		} else {
			return ResponseMau::Store(['bool' => false, 'string' => ResponseMau::ERROR_KEY]);
		}
	}
}
