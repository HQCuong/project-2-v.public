<?php

namespace App\Http\Controllers\Api\Traits;
use ResponseMau;
trait ReturnError {
    public function endCatch() {
        return ResponseMau::Store([
            'string' => ResponseMau::ERROR_NOT_DETERMINED,
            'bool'   => false,
        ]);
    }
    public function endCatchValue($mess) {
        return ResponseMau::Store([
            'string' => $mess,
            'bool'   => false,
        ]);
    }
}