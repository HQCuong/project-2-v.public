<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\CauHinhController;
use App\Http\Controllers\Controller;
use App\Http\Requests\CauHinhMonRequest;
use App\Http\Resources\CauHinhMonResource;
use App\Models\CauHinhMon;
use Exception;
use ResponseMau;

class CauHinhMonController extends Controller {
    public function hienThiDanhSachMon(CauHinhMonRequest $rq) {
        try {
            $cau_hinh_mon           = new CauHinhMon();
            $cau_hinh_mon->cau_hinh = (new CauHinhController())->layThongTinCauHinh($rq->get('ma_cau_hinh'));
            $cau_hinh_mon->list_mon = CauHinhMonResource::collection(
                CauHinhMon::where('ma_cau_hinh', $rq->get('ma_cau_hinh'))
                    ->get()
            );
            return ResponseMau::Store([
                'data' => $cau_hinh_mon,
            ]);
        } catch (Exception $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_NOT_DETERMINED,
                'bool'   => false,
            ]);
        }
    }
    public function suaDoiMonTheoCauHinh(CauHinhMonRequest $rq) {
        try {
            $cau_hinh_mon = CauHinhMon::where('ma_cau_hinh', $rq->get('ma_cau_hinh'))->delete();
            $data         = [];
            for ($i = 0; $i < count($rq->get('ma_mon_hoc')); $i++) {
                $cache = [
                    'ma_cau_hinh' => $rq->get('ma_cau_hinh'),
                    'ma_mon_hoc'  => $rq->get('ma_mon_hoc')[$i],
                ];
                array_push($data, $cache);
            }
            CauHinhMon::insert($data);
            return ResponseMau::Store([]);
        } catch (Exception $e) {
            return ResponseMau::Store([
                'string' => ResponseMau::ERROR_NOT_DETERMINED,
                'bool'   => false,
            ]);
        }
    }
}
