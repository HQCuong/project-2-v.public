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
    use Traits\ReturnError;
    public function danhSachCauHinhCoCHM(CauHinhMonRequest $rq) {
        try {
            $cau_hinh_mon = CauHinhMon::select('ma_cau_hinh')
                ->groupBy('ma_cau_hinh')
                ->get();
            return ResponseMau::Store([
                'data'   => (new CauHinhMonResource($cau_hinh_mon))->cauHinhCoMonHoc(),
                'string' => ResponseMau::SUCCESS_GET,
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function hienThiDanhSachMon(CauHinhMonRequest $rq) {
        try {
            $return_data  = (object) ['cau_hinh' => null, 'list_mon' => null];
            $cau_hinh_mon = CauHinhMon::where('ma_cau_hinh', $rq->get('ma_cau_hinh'))->get();
            if ($cau_hinh_mon->count() == 0) {
                return $this->endCatchValue(ResponseMau::ERROR_CAU_HINH_MON);
            }
            $return_data->cau_hinh = (new CauHinhController())->layThongTinCauHinh($rq->get('ma_cau_hinh'));
            $return_data->list_mon = CauHinhMonResource::collection($cau_hinh_mon);
            return ResponseMau::Store([
                'data'   => $return_data,
                'string' => ResponseMau::SUCCESS_GET,
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function monHocDuocTheoCauHinh(CauHinhMonRequest $rq) {
        try {
            $create = 0;
            $delete = 0;
            $exists = 0;
            $data   = (object) ['create' => [], 'update' => []];
            if (is_array($rq->ma_mon_hoc)) {
                foreach ($rq->ma_mon_hoc as $key => $ma_mon_hoc) {
                    $cau_hinh_mon = CauHinhMon::firstOrCreate([
                        'ma_mon_hoc'  => $ma_mon_hoc,
                        'ma_cau_hinh' => $rq->ma_cau_hinh,
                    ]);
                    if ($cau_hinh_mon->wasRecentlyCreated) {

                    } else {

                    }
                }
            } else {
                $cache = [
                    'ma_cau_hinh' => $rq->get('ma_cau_hinh'),
                    'ma_mon_hoc'  => $rq->get('ma_mon_hoc'),
                ];
                array_push($data, $cache);
            }
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_UPDATE,
            ]);
        } catch (Exception $e) {
            dd($e);
            return $this->endCatchValue(ResponseMau::ERROR_UPDATE);
        }
    }
    public function kiemTra(CauHinhMonRequest $rq) {
        return ResponseMau::Store([]);
    }
}
