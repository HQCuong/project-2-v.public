<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ShowCallController;
use App\Http\Controllers\Controller;
use App\Models\NgayNghi;
use App\Models\PhanCong;
use DB;
use Illuminate\Http\Request;

class LichHocController extends Controller {
    use Traits\ReturnError;
    public function lichCuHocCuaLop(Request $rq) {
        try {
            if ($rq->cap_do != 1) {
                $phan_cong = PhanCong::where(function ($query) use ($rq) {
                    if ($rq->has('ma_mon_hoc')) {
                        $query->where('ma_mon_hoc', $rq->ma_mon_hoc);
                    }
                    if ($rq->has('ma_lop')) {
                        $query->where('ma_lop', $rq->ma_lop);
                    }
                })
                    ->where('ma_nguoi_dung', $rq->ma_nguoi_dung)
                    ->where('tinh_trang', 0);
            } else {
                $phan_cong = PhanCong::where(function ($query) use ($rq) {
                    if ($rq->has('ma_mon_hoc')) {
                        $query->where('ma_mon_hoc', $rq->ma_mon_hoc);
                    }
                    if ($rq->has('ma_lop')) {
                        $query->where('ma_lop', $rq->ma_lop);
                    }
                    if ($rq->has('ma_giao_vien')) {
                        $query->where('ma_nguoi_dung', $rq->ma_giao_vien);
                    }
                })
                    ->where('tinh_trang', 0);
            }
            if ($phan_cong->count() != 0) {
                foreach ($phan_cong->get() as $key => $value) {
                    $lich_day    = (new ShowCallController)->checkOnCu($value->ma_lop, $value->ma_mon_hoc);
                    $gio_con_lai = $value->monHoc->so_gio - array_sum(array_column($lich_day, 'so_gio'));
                    $ngay_nghi   = NgayNghi::where('ma_giao_vien', $value->ma_nguoi_dung)
                        ->where('tinh_trang', 1)
                        ->select('ngay', 'ma_giao_vien', 'ma_ca', DB::raw('DAYOFWEEK("2020-07-13") as thu'))
                        ->get();

                    return $ngay_nghi;
                }
            }
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function lichDayBoSungDeXuat() {
        dd(1);
    }
}
