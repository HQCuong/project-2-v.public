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
    public function hienThiDanhSachMon(CauHinhMonRequest $rq) {
        try {
            $return_data           = (object) ['cau_hinh' => null, 'list_mon' => null];
            $return_data->cau_hinh = (new CauHinhController())->layThongTinCauHinh($rq->get('ma_cau_hinh'));
            $cau_hinh_mon          = CauHinhMon::where('ma_cau_hinh', $rq->get('ma_cau_hinh'))->get();
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
            $cau_hinh_mon = CauHinhMon::where('ma_cau_hinh', $rq->get('ma_cau_hinh'))->delete();
            $data         = [];
            if (is_array($rq->get('ma_mon_hoc'))) {
                for ($i = 0; $i < count($rq->get('ma_mon_hoc')); $i++) {
                    $cache = [
                        'ma_cau_hinh' => $rq->get('ma_cau_hinh'),
                        'ma_mon_hoc'  => $rq->get('ma_mon_hoc')[$i],
                    ];
                    array_push($data, $cache);
                }
            } else {
                $cache = [
                    'ma_cau_hinh' => $rq->get('ma_cau_hinh'),
                    'ma_mon_hoc'  => $rq->get('ma_mon_hoc'),
                ];
                array_push($data, $cache);
            }
            CauHinhMon::insert($data);
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_UPDATE,
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_UPDATE);
        }
    }
}
