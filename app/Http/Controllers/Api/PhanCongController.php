<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PhanCong;
use Illuminate\Http\Request;
use ResponseMau;

class PhanCongController extends Controller {
    use Traits\ReturnError;
    use Traits\CallApi;
    public function phanCongWithTtGv(Request $rq) {
        dd($rq->toArray());
        try {
            $phan_cong = PhanCong::where(function ($query) use ($rq) {
                if ($rq->has('tinh_trang')) {
                    $query->where('tinh_trang', $rq->get('tinh_trang'));
                }
                if ($rq->get('cap_do') == 2) {
                    $query->where('ma_giao_vien', $rq->get('ma_nguoi_dung'));
                }
            })->get();
            dd($phan_cong->toArray());
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function cloneBKACADToLocal() {
        try {
            $list = (object) $this->postApi('phancongdayhoc');
            if ($list->success == false) {
                return $this->endCatch();
            }
            $create = 0;
            $update = 0;
            $data   = (object) ['create' => [], 'update' => []];
            foreach ($list->data as $key) {
                $value = (object) $key;
                try {
                    $flight = PhanCong::updateOrCreate(
                        [
                            'ma_lop'     => $value->ma_lop,
                            'ma_mon_hoc' => $value->ma_mon_hoc,
                        ],
                        [
                            'ma_lop'       => $value->ma_lop,
                            'ma_giao_vien' => $value->ma_can_bo,
                            'ma_mon_hoc'   => $value->ma_mon_hoc,
                            'tinh_trang'   => $value->tinh_trang,
                        ]
                    );
                } catch (Exception $e) {
                    return $this->endCatch();
                }
                if (count($flight->getChanges()) > 0) {
                    $update++;
                    $arr = (object) [
                        'ma_lop'     => $value->ma_lop,
                        'ma_mon_hoc' => $value->ma_mon_hoc,
                        'changer'    => $flight->getChanges(),
                    ];
                    array_push($data->update, $arr);
                }
                if ($flight->wasRecentlyCreated) {
                    $create++;
                    array_push($data->create, $flight);
                }
            }
            return ResponseMau::Store([
                'string' => "Đã tạo mới " . $create . " bản ghi và Cập nhật " . $update . " bản ghi",
                'data'   => $data,
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
}
