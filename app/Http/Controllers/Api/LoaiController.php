<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoaiRequest;
use App\Http\Resources\Loai as LoaiResource;
use App\Models\Loai;
use ResponseMau;

class LoaiController extends Controller {
    public function hienThiTatCa() {
        try {
            return ResponseMau::Store([
                'data' => LoaiResource::collection(Loai::all()),
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_NOT_DETERMINED,
                'bool'   => false,
            ]);
        }
    }
    public function suaLoai(LoaiRequest $rq) {
        try {
            $loai = Loai::find($rq->get('ma_loai'))->update($rq->all());
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_LOAI_EDIT,
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_LOAI_EDIT,
                'bool'   => false,
            ]);
        }
    }public function themLoai(LoaiRequest $rq) {
        try {
            $loai = Loai::create($rq->all());
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_LOAI_CREATE,
                'data'   => new LoaiResource($loai),
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_LOAI_CREATE,
                'bool'   => false,
            ]);
        }
    }
}
