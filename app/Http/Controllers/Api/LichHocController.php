<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ShowCallController;
use App\Http\Controllers\Controller;
use App\Http\Requests\LichHocRequest;
use App\Http\Resources\LichHocResource;
use App\Models\LichDayBoSung;
use App\Models\MonHoc;
use App\Models\NgayNghi;
use App\Models\PhanCong;
use App\Models\PhanCongChiTiet;
use App\Models\Phong;
use DB;
use ResponseMau;

class LichHocController extends Controller {
    use Traits\ReturnError;
    public function lichPhongTrongNow(LichHocRequest $rq) {

    }
    public function lichPhong(LichHocRequest $rq) {
        try {
            $phong = Phong::where('ma_tinh_trang', 1)->find($rq->ma_phong);
            if (is_null($phong)) {
                return $this->endCatchValue("Phòng bạn chọn đã hủy hoặc không tồn tại");
            }
            $phan_cong = PhanCong::where('tinh_trang', 0)
                ->whereHas('phanCongChiTiet', function ($query) use ($rq) {
                    $query->where('ma_phong', $rq->ma_phong);
                })
                ->select('ma_lop', 'ma_mon_hoc', 'ma_phan_cong', 'ma_nguoi_dung')
                ->get()
                ->toArray();
            $lich_phong = [];
            if (count($phan_cong) != 0) {
                $lich_day = (new ShowCallController)->checkOnCuArray($phan_cong);
                foreach ($lich_day as $key => $lich) {
                    $lich               = (object) $lich;
                    $lich->phan_cong    = (object) $lich->phan_cong;
                    $ngay_nghi          = $this->getNgayNghi($lich->phan_cong->ma_nguoi_dung, date("Y-m-d"));
                    $phan_cong_chi_tiet = PhanCongChiTiet::where('ma_phan_cong', $lich->phan_cong->ma_phan_cong)
                        ->join('ca', 'phan_cong_chi_tiet.ma_ca', '=', 'ca.ma_ca')
                        ->with(['phong' => function ($query) {
                            $query->select('ma_phong', 'ten_phong');
                        }])
                        ->select('thu', 'ca.ma_ca', 'ma_phong', 'ca.gio_bat_dau', 'ca.gio_ket_thuc')
                        ->addSelect(DB::raw("(((MINUTE(ca.gio_ket_thuc)+hour(ca.gio_ket_thuc)*60)-(MINUTE(ca.gio_bat_dau)+hour(ca.gio_bat_dau)*60))/60) as so_gio"))
                        ->get();
                    $nguoi_dung = (new PhanCong((array) $lich->phan_cong))->nguoiDung;
                    if ($phan_cong_chi_tiet->count() != 0) {
                        $gio_da_day = $lich->gio_da_day ?? 0;
                        $rt         = $this->checkLichHoc($lich->phan_cong, $ngay_nghi, $phan_cong_chi_tiet, $gio_da_day);
                        $rt         = array_map(function ($item) use ($nguoi_dung) {
                            $item = (object) $item;
                            return [
                                'ma_phong'      => $item->ma_phong,
                                'ngay'          => $item->ngay,
                                'gio_bat_dau'   => $item->gio_bat_dau,
                                'gio_ket_thuc'  => $item->gio_ket_thuc,
                                'ma_lop'        => $item->ma_lop ?? NULL,
                                'ma_mon_hoc'    => $item->ma_mon_hoc ?? NULL,
                                'so_gio'        => $item->so_gio ?? NULL,
                                'ma_nguoi_dung' => $nguoi_dung->ma_nguoi_dung,
                                'ho_ten'        => $nguoi_dung->ho_ten,
                                'hoat_dong'     => 'Cố Định',
                            ];
                        }, $rt);
                        $lich_phong = array_merge($lich_phong, $rt);
                    }
                    $lich_day_bo_sung = LichDayBoSung::where('ma_nguoi_dung', $lich->phan_cong->ma_nguoi_dung)
                        ->where('ma_phong', $phong->ma_phong)
                        ->where('tinh_trang', 1)
                        ->join('ca', 'lich_day_bo_sung.ma_ca', '=', 'ca.ma_ca')
                        ->select('ngay', 'ma_lop', 'ma_mon_hoc', 'lich_day_bo_sung.ma_ca', 'ma_phong', 'gio_bat_dau', 'gio_ket_thuc', 'ghi_chu')
                        ->addSelect(DB::raw("(((MINUTE(ca.gio_ket_thuc)+hour(ca.gio_ket_thuc)*60)-(MINUTE(ca.gio_bat_dau)+hour(ca.gio_bat_dau)*60))/60) as so_gio"))
                        ->get();
                    $lich_day_bo_sung_hop_le = $this->checkLichDayBoSungWithNgayNghi($lich_day_bo_sung, $ngay_nghi);
                    if (count($lich_day_bo_sung_hop_le) != 0) {
                        $lich_day_bo_sung_hop_le = array_map(function ($item) use ($nguoi_dung, $phong) {
                            $item = (object) $item;
                            if ($item->ma_phong == $phong->ma_phong) {
                                return [
                                    'ngay'          => $item->ngay,
                                    'gio_bat_dau'   => $item->gio_bat_dau,
                                    'gio_ket_thuc'  => $item->gio_ket_thuc,
                                    'ma_lop'        => $item->ma_lop ?? NULL,
                                    'ma_mon_hoc'    => $item->ma_mon_hoc ?? NULL,
                                    'so_gio'        => $item->so_gio ?? NULL,
                                    'ma_nguoi_dung' => $nguoi_dung->ma_nguoi_dung,
                                    'ho_ten'        => $nguoi_dung->ho_ten,
                                    'hoat_dong'     => 'Bất Thường',
                                ];
                            }
                        }, $lich_day_bo_sung_hop_le);
                        $lich_phong = array_merge($lich_phong, $lich_day_bo_sung_hop_le);
                    }

                }
            }
            $nghi = NgayNghi::where('ma_giao_vien', 0)
                ->where('ngay', '>=', date('Y-m-d'))
                ->where('tinh_trang', 1)
                ->join('ca', 'ngay_nghi.ma_ca', '=', 'ca.ma_ca')
                ->select('ngay', 'gio_bat_dau', 'gio_ket_thuc', 'ghi_chu')
                ->addSelect(DB::raw("(((MINUTE(ca.gio_ket_thuc)+hour(ca.gio_ket_thuc)*60)-(MINUTE(ca.gio_bat_dau)+hour(ca.gio_bat_dau)*60))/60) as so_gio"))
                ->get()
                ->map(function ($item) {
                    $item->nghi          = true;
                    $item->ma_nguoi_dung = 0;
                    $item->hoat_dong     = "Cả Trường Nghỉ";
                    return $item;
                })
                ->toArray();
            $lich_phong = array_merge($lich_phong, $nghi);
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_GET,
                'data'   => (new LichHocResource($lich_phong))->lichPhong(),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function lichDayCuaGiaoVien(LichHocRequest $rq) {
        try {
            if ($rq->cap_do == 1) {
                $ma_nguoi_dung = $rq->ma_giao_vien;
                $phan_cong     = PhanCong::where('ma_nguoi_dung', $rq->ma_giao_vien)
                    ->where('tinh_trang', 0);
            } else {
                $ma_nguoi_dung = $rq->ma_nguoi_dung;
                $phan_cong     = PhanCong::where('ma_nguoi_dung', $rq->ma_nguoi_dung)
                    ->where('tinh_trang', 0);
            }
            $ngay_nghi  = $this->getNgayNghi($ma_nguoi_dung, date("Y-m-d"));
            $array_lich = [];
            if ($phan_cong->count() != 0) {
                $lich_day = (new ShowCallController)->checkOnCuArray(
                    $phan_cong->select('ma_lop', 'ma_mon_hoc', 'ma_phan_cong')->get()->toArray()
                );
                foreach ($lich_day as $key => $lich) {
                    $lich               = (object) $lich;
                    $lich->phan_cong    = (object) $lich->phan_cong;
                    $phan_cong_chi_tiet = PhanCongChiTiet::where('ma_phan_cong', $lich->phan_cong->ma_phan_cong)
                        ->join('ca', 'phan_cong_chi_tiet.ma_ca', '=', 'ca.ma_ca')
                        ->with(['phong' => function ($query) {
                            $query->select('ma_phong', 'ten_phong');
                        }])
                        ->select('thu', 'ca.ma_ca', 'ma_phong', 'ca.gio_bat_dau', 'ca.gio_ket_thuc')
                        ->addSelect(DB::raw("(((MINUTE(ca.gio_ket_thuc)+hour(ca.gio_ket_thuc)*60)-(MINUTE(ca.gio_bat_dau)+hour(ca.gio_bat_dau)*60))/60) as so_gio"))
                        ->get();
                    if ($phan_cong_chi_tiet->count() != 0) {
                        $gio_da_day = $lich->gio_da_day ?? 0;
                        $rt         = $this->checkLichHoc($lich->phan_cong, $ngay_nghi, $phan_cong_chi_tiet, $gio_da_day);
                        $array_lich = array_merge($lich->checkon, $rt, $array_lich);
                    }
                }
            }
            $lich_day_bo_sung = LichDayBoSung::where('ma_nguoi_dung', $ma_nguoi_dung)
                ->where('tinh_trang', 1)
                ->with(['phong' => function ($query) {
                    $query->select('ma_phong', 'ten_phong');
                }])
                ->join('ca', 'lich_day_bo_sung.ma_ca', '=', 'ca.ma_ca')
                ->select('ngay', 'ma_lop', 'ma_mon_hoc', 'lich_day_bo_sung.ma_ca', 'ma_phong', 'gio_bat_dau', 'gio_ket_thuc', 'ghi_chu')
                ->addSelect(DB::raw("(((MINUTE(ca.gio_ket_thuc)+hour(ca.gio_ket_thuc)*60)-(MINUTE(ca.gio_bat_dau)+hour(ca.gio_bat_dau)*60))/60) as so_gio"))
                ->get();
            // ->toArray();
            $lich_day_bo_sung_hop_le = $this->checkLichDayBoSungWithNgayNghi($lich_day_bo_sung, $ngay_nghi);
            if (count($lich_day_bo_sung_hop_le) != 0) {
                $array_lich = array_merge($array_lich, $lich_day_bo_sung_hop_le);
            }
            $ngay_nghi = NgayNghi::whereIn('ma_giao_vien', [0, $ma_nguoi_dung])
                ->where('tinh_trang', 1)
                ->join('ca', 'ngay_nghi.ma_ca', '=', 'ca.ma_ca')
                ->select('ngay', 'gio_bat_dau', 'gio_ket_thuc', 'ghi_chu')
                ->addSelect(DB::raw("(((MINUTE(ca.gio_ket_thuc)+hour(ca.gio_ket_thuc)*60)-(MINUTE(ca.gio_bat_dau)+hour(ca.gio_bat_dau)*60))/60) as so_gio"))
                ->get()
                ->map(function ($item) {
                    $item->nghi = true;
                    return $item;
                })
                ->toArray();
            $array_lich = array_merge($array_lich, $ngay_nghi);
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_GET,
                'data'   => (new LichHocResource($array_lich))->lichDayCuaGiaoVien(),
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function lichDuKienKetThuc(LichHocRequest $rq) {
        try {
            $phan_cong = PhanCong::find($rq->ma_phan_cong);
            if ($phan_cong->tinh_trang != 0) {
                return $this->endCatchValue(ResponseMau::ERROR_GET);
            }
            if ($rq->cap_do != 1 && $phan_cong->ma_nguoi_dung != $rq->ma_nguoi_dung) {
                return $this->endCatchValue(ResponseMau::ERROR_GET);
            }
            $lich_day       = (new ShowCallController)->checkOnCu($phan_cong->ma_lop, $phan_cong->ma_mon_hoc);
            $gio_dinh_muc   = MonHoc::find($phan_cong->ma_mon_hoc)->so_gio;
            $so_gio_con_lai = $gio_dinh_muc - $lich_day['gio_da_day'];
            if ($so_gio_con_lai > 0) {
                $hom_nay            = date("Y-m-d");
                $phan_cong_chi_tiet = PhanCongChiTiet::where('ma_phan_cong', $phan_cong->ma_phan_cong)
                    ->join('ca', 'phan_cong_chi_tiet.ma_ca', '=', 'ca.ma_ca')
                    ->with(['phong' => function ($query) {
                        $query->select('ma_phong', 'ten_phong');
                    }])
                    ->select('thu', 'ca.ma_ca', 'ma_phong', 'ca.gio_bat_dau', 'ca.gio_ket_thuc')
                    ->addSelect(DB::raw("(((MINUTE(ca.gio_ket_thuc)+hour(ca.gio_ket_thuc)*60)-(MINUTE(ca.gio_bat_dau)+hour(ca.gio_bat_dau)*60))/60) as so_gio"))
                    ->get();
                if ($phan_cong_chi_tiet->count() != 0) {
                    $ngay_nghi = NgayNghi::where(function ($query) use ($phan_cong) {
                        $query->where('ma_giao_vien', $phan_cong->ma_nguoi_dung);
                        $query->orWhere('ma_giao_vien', 0);
                    })
                        ->where('ngay', '>=', $hom_nay)
                        ->where('tinh_trang', 1)
                        ->join(DB::raw("(SELECT * FROM (
                        SELECT 1 as ma_ca,4 as convent UNION
                        SELECT 1 as ma_ca,7 as convent UNION
                        SELECT 2 as ma_ca,4 as convent UNION
                        SELECT 3 as ma_ca,4 as convent UNION
                        SELECT 4 as ma_ca,4 as convent UNION
                        SELECT 5 as ma_ca,7 as convent UNION
                        SELECT 6 as ma_ca,7 as convent UNION
                        SELECT 7 as ma_ca,7 as convent UNION
                        SELECT 4 as ma_ca,2 as convent UNION
                        SELECT 4 as ma_ca,3 as convent UNION
                        SELECT 7 as ma_ca,5 as convent UNION
                        SELECT 7 as ma_ca,6 as convent UNION
                        SELECT 2 as ma_ca,2 as convent UNION
                        SELECT 3 as ma_ca,3 as convent UNION
                        SELECT 5 as ma_ca,5 as convent UNION
                        SELECT 1 as ma_ca,2 as convent UNION
                        SELECT 1 as ma_ca,3 as convent UNION
                        SELECT 1 as ma_ca,5 as convent UNION
                        SELECT 1 as ma_ca,6 as convent UNION
                        SELECT 6 as ma_ca,6 as convent
                    ) as convent_ca) as convent_ca "), 'convent_ca.ma_ca', '=', 'ngay_nghi.ma_ca')
                        ->select('ngay', 'convent_ca.convent as ma_ca')
                        ->get()
                        ->toArray();
                    while ($so_gio_con_lai > 0) {
                        $check = $this->checkTrung($hom_nay, $phan_cong_chi_tiet, $ngay_nghi);
                        if ($check != false) {
                            array_push($lich_day['checkon'], $check);
                            $so_gio_con_lai = $so_gio_con_lai - $check['so_gio'];
                        }
                        $hom_nay = date('Y-m-d', strtotime($hom_nay . "+1 days"));
                    }
                }
            }
            $data = [
                'ma_lop'     => $phan_cong->ma_lop,
                'ma_mon_hoc' => $phan_cong->ma_mon_hoc,
                'giao_vien'  => $phan_cong->nguoiDung,
                'lich_day'   => LichHocResource::collection($lich_day['checkon']),
            ];
            if (isset($phan_cong_chi_tiet) && $phan_cong_chi_tiet->count() != 0) {
                $string = "Dự kiến kết thúc vào ngày " . date('d-m-Y', strtotime($hom_nay . "-1 days"));
            } else {
                $string = "Rất tiếc lựa chọn của bạn không có phân công chi tiết nên không thể dự kiến ngày kết thúc";
            }
            if (($gio_dinh_muc - $lich_day['gio_da_day']) <= 0) {
                $hoan_thanh = $lich_day['checkon'][(count($lich_day['checkon']) - 1)]['ngay'];
                $string     = "Đã hoàn thành lịch dạy vào ngày " . date('d-m-Y', strtotime($hoan_thanh . "-1 days"));
            }
            return ResponseMau::Store([
                'string' => $string,
                'data'   => $data,
            ]);
        } catch (\Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function checkTrung($ngay, $array_pccc, $array_ngay_nghi) {
        foreach ($array_pccc as $key => $value) {
            if ($this->getWeek($ngay) == $value->thu) {
                $array_ss = ['ngay' => $ngay, 'ma_ca' => $value->ma_ca];
                if (in_array($array_ss, $array_ngay_nghi)) {
                    return false;
                } else {
                    return array_merge(['ngay' => $ngay], $value->toArray());
                }
            }
        }
        return false;
    }
    public function getWeek($date) {
        $week = date('w', strtotime($date));
        if ($week == 0) {
            return 8;
        } else {
            return $week + 1;
        }
    }
    public function checkLichHoc($phan_cong, $ngay_nghi, $phan_cong_chi_tiet, $gio_da_day) {
        $lich_day       = [];
        $gio_dinh_muc   = MonHoc::find($phan_cong->ma_mon_hoc)->so_gio;
        $so_gio_con_lai = $gio_dinh_muc - $gio_da_day;
        if ($so_gio_con_lai > 0) {
            $hom_nay = date("Y-m-d");
            while ($so_gio_con_lai > 0) {
                $check = $this->checkTrung($hom_nay, $phan_cong_chi_tiet, $ngay_nghi);
                if ($check != false) {
                    array_push($lich_day, array_merge(['ma_lop' => $phan_cong->ma_lop, 'ma_mon_hoc' => $phan_cong->ma_mon_hoc], $check));
                    $so_gio_con_lai = $so_gio_con_lai - $check['so_gio'];
                }
                $hom_nay = date('Y-m-d', strtotime($hom_nay . "+1 days"));
            }
        }
        return $lich_day;
    }
    public function checkLichDayBoSungWithNgayNghi($lich_day_bo_sung, $array_ngay_nghi) {
        $array_rt = [];
        foreach ($lich_day_bo_sung as $key => $bo_sung) {
            $array_ss = ['ngay' => $bo_sung->ngay, 'ma_ca' => $bo_sung->ma_ca];
            if (in_array($array_ss, $array_ngay_nghi)) {
                break;
            } else {
                array_push($array_rt, $bo_sung->toArray());
            }
        }
        return $array_rt;
    }
    public function getNgayNghi($ma_nguoi_dung, $hom_nay) {
        return NgayNghi::where(function ($query) use ($ma_nguoi_dung) {
            $query->where('ma_giao_vien', $ma_nguoi_dung);
            $query->orWhere('ma_giao_vien', 0);
        })
            ->where('ngay', '>=', $hom_nay)
            ->where('tinh_trang', 1)
            ->join(DB::raw("(SELECT * FROM (
                        SELECT 1 as ma_ca,4 as convent UNION
                        SELECT 1 as ma_ca,7 as convent UNION
                        SELECT 2 as ma_ca,4 as convent UNION
                        SELECT 3 as ma_ca,4 as convent UNION
                        SELECT 4 as ma_ca,4 as convent UNION
                        SELECT 5 as ma_ca,7 as convent UNION
                        SELECT 6 as ma_ca,7 as convent UNION
                        SELECT 7 as ma_ca,7 as convent UNION
                        SELECT 4 as ma_ca,2 as convent UNION
                        SELECT 4 as ma_ca,3 as convent UNION
                        SELECT 7 as ma_ca,5 as convent UNION
                        SELECT 7 as ma_ca,6 as convent UNION
                        SELECT 2 as ma_ca,2 as convent UNION
                        SELECT 3 as ma_ca,3 as convent UNION
                        SELECT 5 as ma_ca,5 as convent UNION
                        SELECT 1 as ma_ca,2 as convent UNION
                        SELECT 1 as ma_ca,3 as convent UNION
                        SELECT 1 as ma_ca,5 as convent UNION
                        SELECT 1 as ma_ca,6 as convent UNION
                        SELECT 6 as ma_ca,6 as convent
                    ) as convent_ca) as convent_ca "), 'convent_ca.ma_ca', '=', 'ngay_nghi.ma_ca')
            ->select('ngay', 'convent_ca.convent as ma_ca')
            ->get()
            ->toArray();
    }
}
