<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CaResource;
use App\Models\Ca;
use Exception;
use ResponseMau;

class CaController extends Controller {
    use Traits\ReturnError;
    public function hienThiTatCa() {
        try {
            $ca = Ca::all();
            return ResponseMau::Store([
                'data' => CaResource::collection($ca),
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
}
