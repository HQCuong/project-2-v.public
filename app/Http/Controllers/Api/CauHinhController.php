<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CauHinhRequest;
use App\Http\Resources\CauHinhResource;
use App\Models\CauHinh;
use Exception;
use ResponseMau;

class CauHinhController extends Controller {
    public function hienThi(CauHinhRequest $rq) {
        try {
            $cau_hinh = CauHinh::where(function ($query) use ($rq) {
                if ($rq->has('ma_loai')) {
                    $query->where('ma_loai', $rq->get('ma_loai'));
                }
            })->get();
            return ResponseMau::Store([
                'data' => CauHinhResource::collection($cau_hinh),
            ]);
        } catch (Exception $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_NOT_DETERMINED,
                'bool'   => false,
            ]);
        }
    }
    public function layThongTinCauHinh($ma_cau_hinh) {
        try {
            return new CauHinhResource(
                CauHinh::find($ma_cau_hinh)
            );
        } catch (Exception $e) {
            return "null";
        }
    }
    public function hienThiCase(CauHinhRequest $rq) {
        try {
            $cau_hinh = CauHinh::where('ma_cau_hinh', $rq->get('ma_cau_hinh'))
                ->where('ma_loai', 1)
                ->first();
            if (!is_null($cau_hinh)) {
                return ResponseMau::Store([
                    'data'   => (new CauHinhResource($cau_hinh))->infoCase(),
                    'string' => ResponseMau::SUCCESS_CAU_HINH,
                ]);
            } else {
                return ResponseMau::Store([
                    'string' => ResponseMau::ERROR_CAU_HINH_GET_INFO_CASE,
                    'bool'   => false,
                ]);
            }
        } catch (Exception $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_NOT_DETERMINED,
                'bool'   => false,
            ]);
        }
    }
    public function themCauHinh(CauHinhRequest $rq) {
        try {
            if ($rq->get('ma_loai') != 1) {
                $cau_hinh = CauHinh::create($rq->all());
            } else {
                $cau_hinh          = new CauHinh();
                $cau_hinh->mo_ta   = "CPU:`" . $rq->get('cpu') . "` Main:`" . $rq->get('main') . "` Ram:`" . $rq->get('ram') . "` Ổ Cứng:`" . $rq->get('o_cung') . "`";
                $cau_hinh->ma_loai = $rq->get('ma_loai');
                $cau_hinh->save();
            }
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_CAU_HINH_CREATE,
                'data'   => new CauHinhResource($cau_hinh),
            ]);
        } catch (Exception $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_CAU_HINH_TAO,
                'bool'   => false,
            ]);
        }
    }
    public function capNhatCauHinh(CauHinhRequest $rq) {
        try {
            $cau_hinh = CauHinh::find($rq->get('ma_cau_hinh'));
            if ($rq->get('ma_loai') != 1) {
                $cau_hinh->update($rq->all());
            } else {
                $cau_hinh->mo_ta   = "CPU:`" . $rq->get('cpu') . "` Main:`" . $rq->get('main') . "` Ram:`" . $rq->get('ram') . "` Ổ Cứng:`" . $rq->get('o_cung') . "`";
                $cau_hinh->ma_loai = $rq->get('ma_loai');
                $cau_hinh->save();
            }
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_CAU_HINH_CREATE,
                'data'   => new CauHinhResource($cau_hinh),
            ]);
        } catch (Exception $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_CAU_HINH_TAO,
                'bool'   => false,
            ]);
        }
    }
}
