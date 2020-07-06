<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoaiRequest;
use App\Http\Resources\Loai as LoaiResource;
use App\Models\Loai;
use Exception;
use ResponseMau;

class LoaiController extends Controller {
    use Traits\ReturnError;
    public function hienThi() {
        try {
            return ResponseMau::Store([
                'data' => LoaiResource::collection(Loai::all()),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function suaLoai(LoaiRequest $rq) {
        try {
            $loai = Loai::find($rq->ma_loai)->update($rq->all());
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_UPDATE,
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_UPDATE);
        }
    }public function themLoai(LoaiRequest $rq) {
        try {
            $loai = Loai::create($rq->all());
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_CREATE,
                'data'   => new LoaiResource($loai),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_CREATE);
        }
    }
}
