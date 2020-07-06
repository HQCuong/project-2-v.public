<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use ResponseMau;

class ShowCallController extends Controller {
    use Traits\ReturnError;
    use Traits\CallApi;
    public function khoa(Request $rq) {
        if ($rq->has('ma_khoa')) {
            $this->setBody(['ma_khoa' => $rq->ma_khoa]);
        }
        $list = (object) $this->postApi('danhsachkhoa');
        if ($list->success == false) {
            return $this->endCatch();
        }
        return ResponseMau::Store([
            'string' => ResponseMau::SUCCESS_GET,
            'data'   => $list->data,
        ]);
    }
    public function ctdt(Request $rq) {
        if ($rq->has('ma_ctdt')) {
            $this->setBody(['ma_ctdt' => $rq->ma_ctdt]);
        }
        $list = (object) $this->postApi('danhsachctdt');
        if ($list->success == false) {
            return $this->endCatch();
        }
        return ResponseMau::Store([
            'string' => ResponseMau::SUCCESS_GET,
            'data'   => $list->data,
        ]);
    }
    public function lopCheck($ma_lop) {
        try {
            $this->setBody(['ma_lop' => $ma_lop]);
            $list = (object) $this->postApi('lop/kiemtra');
            return $list;
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function soSinhVien($ma_lop) {
        try {
            $this->setBody(['ma_lop' => $ma_lop]);
            $list = (object) $this->postApi('sosinhvien');
            if ($list->success == false) {
                return $this->endCatch();
            }
            return $list->data[0]['tong_sinh_vien'];
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
}
