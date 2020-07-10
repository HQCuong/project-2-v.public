<?php
namespace App\Http\Custom;
use App;
use DB;

class QueryRaw {
    public static function deXuatPCCT($phan_cong, $so_gio, $so_sinh_vien) {
        $query = "SELECT tb_phong_hoc_duoc.ma_phong,tb_cac_ca_duoc.thu,ca.*,phong.*,tang.*,toa.ten_toa
			FROM (
			SELECT thu,convent as ca_phu_hop,COUNT(*) as dem
			FROM (
			SELECT tb1.thu,tb1.da_dung,convent_ca.convent
			FROM (
			SELECT DISTINCT phan_cong_chi_tiet.thu,phan_cong_chi_tiet.ma_ca,1 as da_dung
			FROM `phan_cong_chi_tiet`
			INNER JOIN phan_cong on phan_cong.ma_phan_cong = phan_cong_chi_tiet.ma_phan_cong
			INNER JOIN ca on ca.ma_ca = phan_cong_chi_tiet.ma_ca
			WHERE (`phan_cong`.`ma_lop` = '$phan_cong->ma_lop' OR `phan_cong`.`ma_nguoi_dung` = $phan_cong->ma_nguoi_dung) AND `phan_cong`.`tinh_trang` = 0
			UNION
			SELECT tb.*,ca.ma_ca,0 as da_dung
			FROM ca
			CROSS JOIN (
			    SELECT 2 as thu UNION
			    SELECT 3 as thu UNION
			    SELECT 4 as thu UNION
			    SELECT 5 as thu UNION
			    SELECT 6 as thu UNION
			    SELECT 7 as thu UNION
			    SELECT 8 as thu
			) as tb
			WHERE ca.ma_ca !=1
			) as tb1
			INNER JOIN(
			SELECT 2 as ma_ca,4 as convent,4 as gio UNION
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
			) as convent_ca ON convent_ca.ma_ca = tb1.ma_ca AND convent_ca.gio = $so_gio
			GROUP BY tb1.thu,tb1.da_dung,convent_ca.convent )
			as tbs
			GROUP BY thu,convent
			HAVING dem = 1
			) as tb_cac_ca_duoc
			INNER JOIN (
			SELECT tb_c_da.thu,tb_c_da.ma_phong,tb_c_da.convent as p_ca_phu_hop,COUNT(*) as dem
			FROM (
			SELECT tb_value.thu,tb_value.ma_phong,tb_value.da_dung,convent_ca.convent
			FROM (
			SELECT phan_cong_chi_tiet.thu,phan_cong_chi_tiet.ma_phong,phan_cong_chi_tiet.ma_ca,1 as da_dung FROM `phan_cong_chi_tiet`
			INNER JOIN (
			SELECT thiet_bi_phong.ma_phong FROM thiet_bi_phong
			INNER JOIN cau_hinh ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh.ma_loai = 1
			INNER JOIN cau_hinh_mon ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh_mon.ma_mon_hoc = '$phan_cong->ma_mon_hoc'
			GROUP BY thiet_bi_phong.ma_phong
			) as tb_hoc_duoc
			ON tb_hoc_duoc.ma_phong = phan_cong_chi_tiet.ma_phong
			UNION
			SELECT tb.thu,c_ma_phong.ma_phong,ca.ma_ca,0 as da_dung
			FROM ca
			CROSS JOIN (
			    SELECT 2 as thu UNION
			    SELECT 3 as thu UNION
			    SELECT 4 as thu UNION
			    SELECT 5 as thu UNION
			    SELECT 6 as thu UNION
			    SELECT 7 as thu UNION
			    SELECT 8 as thu
			) as tb
			CROSS JOIN (
			SELECT thiet_bi_phong.ma_phong FROM thiet_bi_phong
			INNER JOIN cau_hinh ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh.ma_loai = 1
			INNER JOIN cau_hinh_mon ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh_mon.ma_mon_hoc = '$phan_cong->ma_mon_hoc'
			GROUP BY thiet_bi_phong.ma_phong
			) as c_ma_phong
			WHERE ca.ma_ca !=1
			) as tb_value
			INNER JOIN(
			SELECT 2 as ma_ca,4 as convent,4 as gio UNION
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
			) as convent_ca ON convent_ca.ma_ca = tb_value.ma_ca AND convent_ca.gio = $so_gio
			GROUP BY tb_value.thu,tb_value.ma_phong,tb_value.da_dung,convent_ca.convent
			) as tb_c_da
			GROUP BY tb_c_da.thu,tb_c_da.ma_phong,tb_c_da.convent
			HAVING dem = 1
			) as tb_phong_hoc_duoc ON
			tb_phong_hoc_duoc.thu = tb_cac_ca_duoc.thu AND
			tb_phong_hoc_duoc.p_ca_phu_hop = tb_cac_ca_duoc.ca_phu_hop
			INNER JOIN ca ON tb_cac_ca_duoc.ca_phu_hop = ca.ma_ca
			INNER JOIN phong ON phong.ma_phong = tb_phong_hoc_duoc.ma_phong AND phong.ma_tinh_trang = 1 AND phong.so_cho_ngoi >= $so_sinh_vien
			INNER JOIN tang ON phong.ma_tang = tang.ma_tang AND tang.ma_tinh_trang = 1
			INNER JOIN toa ON tang.ma_toa = toa.ma_toa AND toa.ma_tinh_trang = 1
			ORDER BY tb_phong_hoc_duoc.ma_phong ASC,tb_cac_ca_duoc.thu ASC,ca.ma_ca ASC";
        return DB::select(DB::raw($query));
    }
    public static function deXuatTho($phan_cong, $so_gio, $so_sinh_vien) {
        $query = "SELECT tb_phong_hoc_duoc.ma_phong,tb_cac_ca_duoc.thu,ca.ma_ca
			FROM (
			SELECT thu,convent as ca_phu_hop,COUNT(*) as dem
			FROM (
			SELECT tb1.thu,tb1.da_dung,convent_ca.convent
			FROM (
			SELECT DISTINCT phan_cong_chi_tiet.thu,phan_cong_chi_tiet.ma_ca,1 as da_dung
			FROM `phan_cong_chi_tiet`
			INNER JOIN phan_cong on phan_cong.ma_phan_cong = phan_cong_chi_tiet.ma_phan_cong
			INNER JOIN ca on ca.ma_ca = phan_cong_chi_tiet.ma_ca
			WHERE (`phan_cong`.`ma_lop` = '$phan_cong->ma_lop' OR `phan_cong`.`ma_nguoi_dung` = $phan_cong->ma_nguoi_dung) AND `phan_cong`.`tinh_trang` = 0
			UNION
			SELECT tb.*,ca.ma_ca,0 as da_dung
			FROM ca
			CROSS JOIN (
			    SELECT 2 as thu UNION
			    SELECT 3 as thu UNION
			    SELECT 4 as thu UNION
			    SELECT 5 as thu UNION
			    SELECT 6 as thu UNION
			    SELECT 7 as thu UNION
			    SELECT 8 as thu
			) as tb
			WHERE ca.ma_ca !=1
			) as tb1
			INNER JOIN(
			SELECT 2 as ma_ca,4 as convent,4 as gio UNION
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
			) as convent_ca ON convent_ca.ma_ca = tb1.ma_ca AND convent_ca.gio = $so_gio
			GROUP BY tb1.thu,tb1.da_dung,convent_ca.convent )
			as tbs
			GROUP BY thu,convent
			HAVING dem = 1
			) as tb_cac_ca_duoc
			INNER JOIN (
			SELECT tb_c_da.thu,tb_c_da.ma_phong,tb_c_da.convent as p_ca_phu_hop,COUNT(*) as dem
			FROM (
			SELECT tb_value.thu,tb_value.ma_phong,tb_value.da_dung,convent_ca.convent
			FROM (
			SELECT phan_cong_chi_tiet.thu,phan_cong_chi_tiet.ma_phong,phan_cong_chi_tiet.ma_ca,1 as da_dung FROM `phan_cong_chi_tiet`
			INNER JOIN (
			SELECT thiet_bi_phong.ma_phong FROM thiet_bi_phong
			INNER JOIN cau_hinh ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh.ma_loai = 1
			INNER JOIN cau_hinh_mon ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh_mon.ma_mon_hoc = '$phan_cong->ma_mon_hoc'
			GROUP BY thiet_bi_phong.ma_phong
			) as tb_hoc_duoc
			ON tb_hoc_duoc.ma_phong = phan_cong_chi_tiet.ma_phong
			UNION
			SELECT tb.thu,c_ma_phong.ma_phong,ca.ma_ca,0 as da_dung
			FROM ca
			CROSS JOIN (
			    SELECT 2 as thu UNION
			    SELECT 3 as thu UNION
			    SELECT 4 as thu UNION
			    SELECT 5 as thu UNION
			    SELECT 6 as thu UNION
			    SELECT 7 as thu UNION
			    SELECT 8 as thu
			) as tb
			CROSS JOIN (
			SELECT thiet_bi_phong.ma_phong FROM thiet_bi_phong
			INNER JOIN cau_hinh ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh.ma_loai = 1
			INNER JOIN cau_hinh_mon ON cau_hinh.ma_cau_hinh = thiet_bi_phong.ma_cau_hinh AND cau_hinh_mon.ma_mon_hoc = '$phan_cong->ma_mon_hoc'
			GROUP BY thiet_bi_phong.ma_phong
			) as c_ma_phong
			WHERE ca.ma_ca !=1
			) as tb_value
			INNER JOIN(
			SELECT 2 as ma_ca,4 as convent,4 as gio UNION
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
			) as convent_ca ON convent_ca.ma_ca = tb_value.ma_ca AND convent_ca.gio = $so_gio
			GROUP BY tb_value.thu,tb_value.ma_phong,tb_value.da_dung,convent_ca.convent
			) as tb_c_da
			GROUP BY tb_c_da.thu,tb_c_da.ma_phong,tb_c_da.convent
			HAVING dem = 1
			) as tb_phong_hoc_duoc ON
			tb_phong_hoc_duoc.thu = tb_cac_ca_duoc.thu AND
			tb_phong_hoc_duoc.p_ca_phu_hop = tb_cac_ca_duoc.ca_phu_hop
			INNER JOIN ca ON tb_cac_ca_duoc.ca_phu_hop = ca.ma_ca
			INNER JOIN phong ON phong.ma_phong = tb_phong_hoc_duoc.ma_phong AND phong.ma_tinh_trang = 1 AND phong.so_cho_ngoi >= $so_sinh_vien
			INNER JOIN tang ON phong.ma_tang = tang.ma_tang AND tang.ma_tinh_trang = 1
			INNER JOIN toa ON tang.ma_toa = toa.ma_toa AND toa.ma_tinh_trang = 1
			ORDER BY tb_phong_hoc_duoc.ma_phong ASC,tb_cac_ca_duoc.thu ASC,ca.ma_ca ASC";
        return DB::select(DB::raw($query));
    }
}