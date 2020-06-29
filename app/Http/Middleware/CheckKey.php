<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Api\Traits\CallApi;
use Closure;

class CheckKey {
    use CallApi;
    public function handle($request, Closure $next) {
        if (!empty($_COOKIE['key'])) {
            $this->setBody(['key' => $_COOKIE['key']]);
            $result = (object) $this->postRaw(route('api.nguoidung.kiemTraKey'));
            if ($result->success) {
                dd('done');
                return $next($request);
            } else {
                dd("No ACCSECS");
            }
        } else {
            dd("No ACCSECS");
        }
    }
}
