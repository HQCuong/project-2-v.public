<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NgayNghiRequest;
use App\Http\Resources\NgayNghiResource;
use App\Http\Resources\NguoiDungResource;
use App\Models\NgayNghi;
use App\Models\NguoiDung;
use Exception;
use Illuminate\Http\Request;
use ResponseMau;

class NgayNghiController extends Controller {
    use Traits\ReturnError;
    public function hienThiTatCa(NgayNghiRequest $rq) {
        $rq = new Request($rq->request->all());
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
                ->where(function ($query) use ($rq) {
                    if ($rq->cap_do != 1) {
                        $query->where('ma_giao_vien', $rq->ma_nguoi_dung);
                    } else {
                        if ($rq->has('ma_giao_vien')) {
                            $query->where('ma_giao_vien', $rq->ma_giao_vien);
                        }
                    }
                })
                ->where(function ($query) use ($rq) {
                    if ($rq->has('tinh_trang')) {
                        $query->where('tinh_trang', $rq->tinh_trang);
                    } else {
                        $query->where('tinh_trang', 1);
                    }
                })
                ->select('ngay')
                ->distinct()
                ->orderBy('ngay', 'ASC')
                ->get();
            $dem = 0;
            foreach ($ngay as $key => $value) {
                $can_bo = NgayNghi::where('ngay', $value->ngay)
                    ->where(function ($query) use ($rq) {
                        if ($rq->cap_do != 1) {
                            $query->where('ma_giao_vien', $rq->ma_nguoi_dung);
                        } else {
                            if ($rq->has('ma_giao_vien')) {
                                $query->where('ma_giao_vien', $rq->ma_giao_vien);
                            }
                        }
                    })
                    ->where(function ($query) use ($rq) {
                        if ($rq->has('tinh_trang')) {
                            $query->where('tinh_trang', $rq->tinh_trang);
                        } else {
                            $query->where('tinh_trang', 1);
                        }
                    })
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
        $rq = new Request($rq->request->all());
        try {
            $ngay_nghi = NguoiDung::withCount(['ngayNghi' => function ($query) {
                $query->where('tinh_trang', 1);
            }])
                ->where(function ($query) use ($rq) {
                    if ($rq->cap_do != 1) {
                        $query->where('ma_nguoi_dung', $rq->ma_nguoi_dung);
                    } else {
                        if ($rq->has('ma_giao_vien')) {
                            $query->where('ma_nguoi_dung', $rq->ma_giao_vien);
                        }
                    }
                })
                ->orderBy('ngay_nghi_count', 'DESC')
                ->get();
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_GET,
                'data'   => (new NguoiDungResource($ngay_nghi))->withNgayNghi(),
            ]);
        } catch (Exception $e) {
            dd($e->getMessage());
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function themNgayNghi(NgayNghiRequest $rq) {
        $rq = new Request($rq->request->all());
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
        $rq = new Request($rq->request->all());
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
    public function kiemTra(NgayNghiRequest $rq) {
        return ResponseMau::Store([]);
    }
    public function arrayInsert($rq, $ma_giao_vien) {
        $array = [
            'ngay'         => $rq->ngay,
            'ma_ca'        => $rq->ma_ca,
            'ma_giao_vien' => $ma_giao_vien,
        ];
        if ($rq->has('tinh_trang')) {
            $array = array_merge($array, ['tinh_trang' => $rq->tinh_trang]);
        }
        if ($rq->has('ghi_chu')) {
            $array = array_merge($array, ['ghi_chu' => $rq->ghi_chu]);
        }
        return $array;
    }
}
