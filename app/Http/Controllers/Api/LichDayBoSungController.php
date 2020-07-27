<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LichDayBoSungRequest;
use App\Models\LichDayBoSung;
use App\Models\PhanCongChiTiet;
use DB;
use Exception;
use Illuminate\Http\Request;
use ResponseMau;

class LichDayBoSungController extends Controller {
    public function hienThi(LichDayBoSungRequest $rq) {
        dd(1);
    }
    public function deXuatLich(LichDayBoSungRequest $rq) {
        try {
            return $rq->all();
            DB::connection()->enableQueryLog();
            $rq                 = new Request($rq->request->all());
            $phan_cong_chi_tiet = PhanCongChiTiet::whereHas('phanCong', function ($query) use ($rq) {
                $query->orWhere('ma_lop', $rq->ma_lop);
                $query->orWhere('ma_nguoi_dung', $rq->ma_giao_vien);
            })
            // ->select('thu', 'ma_ca', 'ma_phong')
            //->distinct()
                ->join(DB::raw("(" . "SELECT 2 as ma_ca,4 as convent,4 as gio UNION
            SELECT 3 as ma_ca,4 as convent,4 as gio UNION
            SELECT 4 as ma_ca,4 as convent,4 as gio UNION
            SELECT 5 as ma_ca,7 as convent,4 as gio UNION
            SELECT 6 as ma_ca,7 as convent,4 as gio UNION
            SELECT 7 as ma_ca,7 as convent,4 as gio UNION
            SELECT 4 as ma_ca,2 as convent,2 as gio UNION
            SELECT 4 as ma_ca,3 as convent,2 as gio UNION
            SELECT 7 as ma_ca,5 as convent,2 as gio UNION
            SELECT 7 as ma_ca,6 as convent,2 as gio UNION
            SELECT 2 as ma_ca,2 as convent,2 as gio UNION
            SELECT 3 as ma_ca,3 as convent,2 as gio UNION
            SELECT 5 as ma_ca,5 as convent,2 as gio UNION
            SELECT 6 as ma_ca,6 as convent,2 as gio
            ) convent_ca"), function ($join) use ($rq) {
                    $join->where('convent_ca.gio', $rq->so_gio);
                    $join->on('convent_ca.ma_ca', '=', 'phan_cong_chi_tiet.ma_ca');
                })
                ->select('thu', 'ma_phong', )
                ->get();
            //dd(DB::getQueryLog());
            return $phan_cong_chi_tiet;
        } catch (Exception $e) {
            dd($e);
        }
    }
    public function themLich(LichDayBoSungRequest $rq) {
        //
    }
    public function suaLich(LichDayBoSung $lichDayBoSung) {
        //
    }
    public function kiemTra(LichDayBoSungRequest $rq) {
        return ResponseMau::Store([]);
    }
}
