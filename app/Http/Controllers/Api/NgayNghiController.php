<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\GiaoVienController;
use App\Http\Controllers\Controller;
use App\Http\Requests\NgayNghiRequest;
use App\Http\Resources\NgayNghiResource;
use App\Models\NgayNghi;
use Exception;
use ResponseMau;

class NgayNghiController extends Controller {
    use Traits\ReturnError;
    public function returnGiaovien($list_gv, $ma_gv) {
        if ($ma_gv === 0) {
            $a = ['ma_can_bo' => 0, 'ho_ten' => "Toàn Trường", 'email' => ''];
            return (object) $a;
        }
        foreach ($list_gv as $key) {
            $value = (object) $key;
            if ($value->ma_can_bo === $ma_gv) {
                return $value;
            }

        }
        $a = ['ma_can_bo' => 'a', 'ho_ten' => "Error", 'email' => ''];
        return (object) $a;
    }
    public function hienThiTatCaLichNghi() {
        try {
            $list_gv   = (new GiaoVienController)->getGiaoVien();
            $ngay_nghi = NgayNghi::all();
            if ($list_gv == false) {
                return $this->endCatchValue(ResponseMau::ERROR_GIAO_VIEN_API);
            }
            foreach ($ngay_nghi as $key) {
                $key->giao_vien = $this->returnGiaovien($list_gv, $key->ma_giao_vien);
            }
            return ResponseMau::Store([
                'data' => NgayNghiResource::collection($ngay_nghi),
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function themNgayNghi(NgayNghiRequest $rq) {
        try {
            $ngay_nghi = NgayNghi::create([
                'ngay'         => date_format(date_create($rq->get('ngay')), "Y/m/d"),
                'ma_ca'        => $rq->get('ma_ca'),
                'ma_giao_vien' => $rq->get('ma_giao_vien'),
            ]);
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_NGAY_NGHI_THEM,
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_NGAY_NGHI_THEM);
        }
    }
    public function suaNgayNghi(NgayNghiRequest $rq) {
        try {
            $ngay_nghi = NgayNghi::where('ngay', date_format(date_create($rq->get('ngay_cu')), "Y/m/d"))
                ->where('ma_ca', $rq->get('ma_ca_cu'))
                ->where('ma_giao_vien', $rq->get('ma_giao_vien_cu'))
                ->update([
                    'ngay'         => date_format(date_create($rq->get('ngay')), "Y/m/d"),
                    'ma_ca'        => $rq->get('ma_ca'),
                    'ma_giao_vien' => $rq->get('ma_giao_vien'),
                ]);
            if ($ngay_nghi) {
                return ResponseMau::Store([
                    'string' => ResponseMau::SUCCESS_NGAY_NGHI_SUA,
                ]);
            } else {
                return $this->endCatchValue(ResponseMau::ERROR_NGAY_NGHI_SUA);
            }
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_NGAY_NGHI_SUA);
        }
    }
    public function xoaNgayNghi(NgayNghiRequest $rq) {
        try {
            $ngay_nghi = NgayNghi::where('ngay', date_format(date_create($rq->get('ngay')), "Y/m/d"))
                ->where('ma_ca', $rq->get('ma_ca'))
                ->where('ma_giao_vien', $rq->get('ma_giao_vien'))
                ->delete();
            if ($ngay_nghi) {
                return ResponseMau::Store([
                    'string' => ResponseMau::SUCCESS_NGAY_NGHI_XOA,
                ]);
            } else {
                return $this->endCatchValue(ResponseMau::ERROR_NGAY_NGHI_XOA);
            }
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_NGAY_NGHI_XOA);
        }
    }
}
