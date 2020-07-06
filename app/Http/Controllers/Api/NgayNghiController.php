<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NgayNghiRequest;
use App\Http\Resources\NgayNghiResource;
use App\Http\Resources\NguoiDungResource;
use App\Models\NgayNghi;
use App\Models\NguoiDung;
use Exception;
use ResponseMau;

class NgayNghiController extends Controller {
    use Traits\ReturnError;
    public function hienThiTatCa(NgayNghiRequest $rq) {
        try {
            $data = [];
            $ngay = NgayNghi::where(function ($query) use ($rq) {
                if ($rq->has('ngay')) {
                    $query->where('ngay', $rq->ngay);
                } else {
                    if ($rq->has('tuong_lai')) {
                        $query->whereRaw('ngay >= CURDATE()');
                    }
                }
            })
                ->where('tinh_trang', 1)
                ->select('ngay')
                ->distinct()
                ->orderBy('ngay', 'ASC')
                ->get();
            $dem = 0;
            foreach ($ngay as $key => $value) {
                $can_bo = NgayNghi::where('ngay', $value->ngay)
                    ->with('nguoiDung', 'ca')
                    ->get();
                $re                = (object) [];
                $re->ngay          = $value->ngay;
                $re->so_nguoi_nghi = $can_bo->count();
                $re->can_bo        = $can_bo;
                array_push($data, $re);
            }
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_GET,
                'data'   => NgayNghiResource::collection($data),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function ngayNghiTheoGiaoVien(NgayNghiRequest $rq) {
        try {
            $ngay_nghi = NguoiDung::withCount(['ngayNghi' => function ($query) {
                $query->where('tinh_trang', 1);
            }])
                ->orderBy('ngay_nghi_count', 'DESC')
                ->where(function ($query) use ($rq) {
                    if ($rq->has('ma_giao_vien')) {
                        $query->where('ma_nguoi_dung', $rq->ma_giao_vien);}
                })
                ->get();
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_GET,
                'data'   => (new NguoiDungResource($ngay_nghi))->withNgayNghi(),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function themNgayNghi(NgayNghiRequest $rq) {
        try {
            $data = [];
            if (is_array($rq->get('ma_giao_vien'))) {
                for ($i = 0; $i < count($rq->get('ma_giao_vien')); $i++) {
                    array_push($data, $this->arrayInsert($rq, $rq->get('ma_giao_vien')[$i]));
                }
            } else {
                array_push($rq, $rq->ma_giao_vien);
            }
            NgayNghi::insert($data);
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_NGAY_NGHI_THEM,
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_NGAY_NGHI_THEM);
        }
    }
    public function suaNgayNghi(NgayNghiRequest $rq) {
        try {
            $ngay_nghi = NgayNghi::where('ngay', $rq->ngay_cu)
                ->where('ma_ca', $rq->ma_ca_cu)
                ->where('ma_giao_vien', $rq->ma_giao_vien_cu)
                ->where('tinh_trang', 1)
                ->update($rq->only((new NgayNghi)->getFillable()));
            if ($ngay_nghi) {
                return ResponseMau::Store([
                    'string' => ResponseMau::SUCCESS_UPDATE,
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
            $ngay_nghi = NgayNghi::where('ngay', $rq->ngay)
                ->where('ma_ca', $rq->ma_ca)
                ->where('ma_giao_vien', $rq->ma_giao_vien)
                ->where('tinh_trang', 1)
                ->update(['tinh_trang' => 2]);
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
    public function arrayInsert($rq, $ma_giao_vien) {
        $array = [
            'ngay'         => $rq->ngay,
            'ma_ca'        => $rq->ma_ca,
            'ghi_chu'      => $rq->ghi_chu,
            'ma_giao_vien' => $ma_giao_vien,
        ];
        if ($rq->has('tinh_trang')) {
            $array = array_merge($array, ['tinh_trang' => $rq->tinh_trang]);
        }
        return $array;
    }
}
