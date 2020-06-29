<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Api\Traits\CallApi;
use Closure;

class CheckKey {
    use CallApi;
    public function handle($request, Closure $next) {
        $this->setBody(['key' => $request->key]);
        $result = (object) $this->postRaw(route('api.nguoidung.kiemTraKey'));
        if ($result->success) {
            return $next($request);
        } else {
            dd("No ACCSECS");
        }
    }
}
