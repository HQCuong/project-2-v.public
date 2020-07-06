<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\ShowCallController;
use App\Http\Controllers\Controller;
use App\Http\Requests\PhanCongChiTietRequest;
use App\Http\Resources\PhanCongChiTietResource;
use App\Models\PhanCong;
use App\Models\PhanCongChiTiet;
use DB;
use Exception;
use ResponseMau;

class PhanCongChiTietController extends Controller {
    use Traits\ReturnError;
    public function hienThi(PhanCongChiTietRequest $rq) {
        try {
            $phan_cong_ct = PhanCong::where('ma_phan_cong', $rq->ma_phan_cong)
                ->first();
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_CREATE,
                'data'   => (new PhanCongChiTietResource($phan_cong_ct))->toOne(),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_CREATE);
        }
    }
    public function deXuatPcct(PhanCongChiTietRequest $rq) {
        try {
            $tt_ma_phan_cong = PhanCong::find($rq->ma_phan_cong);
            $so_gio          = $rq->so_gio;
            $so_sinh_vien    = (new ShowCallController)->soSinhVien($tt_ma_phan_cong->ma_lop);
            $phong_hoc_duoc  = DB::select("SELECT DISTINCT phong.* FROM `thiet_bi_phong`
                INNER JOIN cau_hinh
                ON
                cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh
                INNER JOIN phong
                ON
                phong.ma_phong = thiet_bi_phong.ma_phong
                INNER JOIN cau_hinh_mon
                ON
                cau_hinh_mon.ma_cau_hinh = cau_hinh.ma_cau_hinh
                WHERE
                cau_hinh.ma_loai = 1
                AND
                cau_hinh_mon.ma_mon_hoc = '$tt_ma_phan_cong->ma_mon_hoc'
                AND
                phong.so_cho_ngoi>=$so_sinh_vien");
            foreach ($phong_hoc_duoc as $key => $value) {
                $lich_da_co = DB::select("SELECT phan_cong_chi_tiet.*,phan_cong.*,ca.gio_bat_dau,ca.gio_ket_thuc,phong.ma_phong
                    FROM `phan_cong_chi_tiet`
                    INNER JOIN phan_cong
                    ON
                    phan_cong_chi_tiet.ma_phan_cong = phan_cong.ma_phan_cong
                    INNER JOIN ca
                    on
                    ca.ma_ca = phan_cong_chi_tiet.ma_ca
                    INNER JOIN phong
                    ON
                    phong.ma_phong = phan_cong_chi_tiet.ma_phong
                    WHERE (phan_cong.ma_lop = '$tt_ma_phan_cong->ma_lop'
                    or phan_cong.ma_nguoi_dung = $tt_ma_phan_cong->ma_nguoi_dung) AND
                    phan_cong.tinh_trang = 0
                    ORDER BY `phan_cong_chi_tiet`.`thu` ASC");
                dd($lich_da_co);
            }
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
    public function taoPcct(PhanCongChiTietRequest $rq) {
        try {
            $model = new PhanCongChiTiet();
            dd($rq->only($model->getFillable()));
        } catch (Exception $e) {

        }
    }
    public function capNhatTang(PhanCongChiTietRequest $rq) {
        try {
            $phan_cong_ct = PhanCongChiTiet::where('ma_tang', $rq->ma_tang)->update(
                $rq->only((new Tang)->getFillable())
            );
            if ($phan_cong_ct) {
                return ResponseMau::Store([
                    'string' => ResponseMau::SUCCESS_UPDATE,
                ]);
            } else {
                return $this->endCatchValue(ResponseMau::ERROR_TANG_UPDATE_INFO);
            }
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_UPDATE);
        }
    }
}
