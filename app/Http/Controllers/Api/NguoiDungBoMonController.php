<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NguoiDungBoMonRequest;
use App\Http\Resources\NguoiDungBoMonResource;
use App\Models\NguoiDung;
use App\Models\NguoiDungBoMon;
use App\Models\PhanCong;
use ResponseMau;

class NguoiDungBoMonController extends Controller {
    public function hienThi(NguoiDungBoMonRequest $rq) {
        try {
            $nguoi_dung_bo_mon = NguoiDung::where(function ($query) use ($rq) {
                if ($rq->cap_do == 1) {
                    if ($rq->has('ma_giao_vien')) {
                        $query->whereIn('ma_nguoi_dung', $rq->ma_giao_vien);
                    }
                } else {
                    $query->where('ma_nguoi_dung', $rq->ma_nguoi_dung);
                }
            })
                ->with(['nguoiDungBoMon' => function ($query) {
                    $query->with(['monHoc' => function ($q) {
                        $q->select('ma_mon_hoc', 'ten_mon_tieng_viet', 'ten_mon_tieng_anh');
                    }]);
                }])
                ->whereHas('nguoiDungBoMon')
                ->select('ma_nguoi_dung', 'ho_ten', 'email')
                ->withCount('nguoiDungBoMon as so_mon_day_duoc')
                ->orderBy('so_mon_day_duoc', 'DESC')
                ->get();
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_GET,
                'data'   => NguoiDungBoMonResource::collection($nguoi_dung_bo_mon),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function themOrSua(NguoiDungBoMonRequest $rq) {
        try {
            $cau_hinh_mon = NguoiDungBoMon::whereIn('ma_nguoi_dung', $rq->ma_giao_vien)->delete();
            $data         = [];
            foreach ($rq->ma_mon_hoc as $key_m => $ma_mon_hoc) {
                foreach ($rq->ma_giao_vien as $key_n => $ma_nguoi_dung) {
                    $cache = [
                        'ma_nguoi_dung' => $ma_nguoi_dung,
                        'ma_mon_hoc'    => $ma_mon_hoc,
                    ];
                    array_push($data, $cache);
                }
            }
            NguoiDungBoMon::insert($data);
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_UPDATE,
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_UPDATE);
        }
    }
    public function kiemTra(NguoiDungBoMonRequest $rq) {
        return ResponseMau::Store([]);
    }
    public function cloneWithPhanCong() {
        try {
            $phan_cong = PhanCong::whereNotNull(['ma_nguoi_dung', 'ma_mon_hoc'])
                ->select('ma_mon_hoc', 'ma_nguoi_dung')
                ->distinct()
                ->get();
            $a = NguoiDungBoMon::insert($phan_cong->toArray());
            return true;
        } catch (Exception $e) {
            return false;
        }
    }
}
