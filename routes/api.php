<?php

use Illuminate\Support\Facades\Route;
//Chưa login cũng được phép truy cập
///NguoiDungController-ALL
Route::post('dangnhap/{tai_khoan}/{mat_khau}', 'Api\NguoiDungController@dangNhap')
    ->name('api.nguoidung.dangNhap');
Route::any('nguoidung/reset', 'Api\NguoiDungController@khoiPhucMatKhau')
    ->name('api.nguoidung.khoiPhucMatKhau');
Route::group(['middleware' => 'CheckLogin'], function () {
    Route::post('dangxuat', 'Api\NguoiDungController@dangXuat')
        ->name('api.nguoidung.dangXuat');
    Route::post('nguoidung/doimatkhau', 'Api\NguoiDungController@doiMatKhau')
        ->name('api.nguoidung.doiMatKhau');
    Route::post('nguoidung/capnhatthongtin/{id}', 'Api\NguoiDungController@capNhatThongTin')
        ->name('api.nguoidung.capNhatThongTin');
    Route::post('nguoidung/kiemtra', 'Api\NguoiDungController@kiemTra')
        ->name('api.nguoidung.view.kiemTra');
    Route::post('nguoidung/kiemtrakey', 'Api\NguoiDungController@kiemTraKey')
        ->name('api.nguoidung.kiemTraKey');
    Route::post('nguoidung/danhsach', 'Api\NguoiDungController@danhSachGiaoVienKiThuat')
        ->name('api.nguoidung.danhSachGiaoVienKiThuat');
    Route::post('nguoidung/thongtin', 'Api\NguoiDungController@thongTin')
        ->name('api.nguoidung.thongTin');
});
///NguoiDungController-Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('nguoidung/tao', 'Api\NguoiDungController@taoNguoiDung')
        ->name('api.nguoidung.taoNguoiDung');
    Route::any('nguoidung/danhsachall', 'Api\NguoiDungController@danhSachAll')
        ->name('api.nguoidung.danhSachAll');
    Route::any('nguoidung/clone', 'Api\NguoiDungController@giaoVienClone')
        ->name('api.nguoidung.giaoVienClone');
});
///ToaController--ALL USER
Route::group(['middleware' => ['CheckLogin']], function () {
    Route::post('toa/hienthicactoa', 'Api\ToaController@hienThiTatCaToa')
        ->name('api.toa.hienThiTatCaToa');
});

///ToaController--Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('toa/capnhat', 'Api\ToaController@capNhatToa')
        ->name('api.toa.capNhatToa');
    Route::post('toa/kiemtra', 'Api\ToaController@kiemTra')
        ->name('api.toa.kiemTra');
});

//TangController--
//--ALL
Route::group(['middleware' => 'CheckLogin'], function () {
    Route::post('tang', 'Api\TangController@hienthiCacTang')
        ->name('api.tang.hienthiCacTang');
    Route::post('tang/kiemtra', 'Api\TangController@kiemTra')
        ->name('api.tang.kiemTra');
});
//-Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('tang/capnhat', 'Api\TangController@capNhatTang')
        ->name('api.tang.update');
    Route::post('tang/tao', 'Api\TangController@taoTang')
        ->name('api.tang.taoTang');
});

//PhongController--Giáo Vụ
Route::group(['middleware' => 'CheckLogin'], function () {
    Route::post('phong/getphong', 'Api\PhongController@getPhongTheoTang')
        ->name('api.tang.getPhongTheoTang');
    Route::post('phong/create', 'Api\PhongController@taoPhong')
        ->name('api.tang.create');
    Route::post('phong/delete', 'Api\PhongController@xoaPhong')
        ->name('api.tang.delete');
    Route::post('phong/show/info', 'Api\PhongController@hienThiPhong')
        ->name('api.tang.hienThiPhong');
    Route::post('phong/edit', 'Api\PhongController@edit')
        ->name('api.tang.edit');
});

//LoaiController
//--Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('loai/sua', 'Api\LoaiController@suaLoai')
        ->name('api.loai.suaLoai');
    Route::post('loai/them', 'Api\LoaiController@themLoai')
        ->name('api.loai.themLoai');
});
Route::group(['middleware' => ['CheckLogin']], function () {
    Route::post('loai', 'Api\LoaiController@hienThi')
        ->name('api.loai.hienThi');
    Route::post('loai/kiemtra', 'Api\LoaiController@kiemTra')
        ->name('api.loai.kiemTra');
});

//CauHinhController
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrKiThuat']], function () {
    Route::post('cauhinh', 'Api\CauHinhController@hienThi')
        ->name('api.cauhinh.hienThi');
    Route::post('cauhinh/case', 'Api\CauHinhController@hienThiCase')
        ->name('api.cauhinh.hienThiCase');
    Route::post('cauhinh/sua', 'Api\CauHinhController@capNhatCauHinh')
        ->name('api.cauhinh.capNhatCauHinh');
    Route::post('cauhinh/them', 'Api\CauHinhController@themCauHinh')
        ->name('api.cauhinh.themCauHinh');
    Route::post('cauhinh/kiemtra', 'Api\CauHinhController@kiemTra')
        ->name('api.cauhinh.kiemTra');
});

//CauHinhMonController
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrKiThuat']], function () {
    Route::post('cauhinhmon', 'Api\CauHinhMonController@danhSachCauHinhCoCHM')
        ->name('api.cauhinhmon.danhSachCauHinhCoCHM');
    Route::post('cauhinhmon/mon', 'Api\CauHinhMonController@hienThiDanhSachMon')
        ->name('api.cauhinhmon.hienThiDanhSachMon');
    Route::post('cauhinhmon/capnhat', 'Api\CauHinhMonController@monHocDuocTheoCauHinh')
        ->name('api.cauhinhmon.monHocDuocTheoCauHinh');
    Route::post('cauhinhmon/kiemtra', 'Api\CauHinhMonController@kiemTra')
        ->name('api.cauhinhmon.kiemTra');
});
//NgàyNghỉController --Giáo Vụ + Giáo Viên
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::any('ngaynghi', 'Api\NgayNghiController@hienThiTatCa')
        ->name('api.ngaynghi.hienThiTatCa');
    Route::any('ngaynghi/giaovien', 'Api\NgayNghiController@ngayNghiTheoGiaoVien')
        ->name('api.ngaynghi.ngayNghiTheoGiaoVien');
    Route::post('ngaynghi/them', 'Api\NgayNghiController@themNgayNghi')
        ->name('api.ngaynghi.themNgayNghi');
    Route::post('ngaynghi/sua', 'Api\NgayNghiController@suaNgayNghi')
        ->name('api.ngaynghi.suaNgayNghi');
    Route::post('ngaynghi/xoa', 'Api\NgayNghiController@xoaNgayNghi')
        ->name('api.ngaynghi.xoaNgayNghi');
});
//Ca Controller
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::post('ca', 'Api\CaController@hienThiTatCa')
        ->name('api.ca.hienThiTatCa');
});
//GiáoViênController --Giáo Vụ + Giáo Viên
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::post('giaovien', 'Api\GiaoVienController@getGiaoVien')
        ->name('api.giaovien.getGiaoVien');
});
//MônHoc Controller
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::post('monhoc', 'Api\MonHocController@hienThiTatCaMon')
        ->name('api.monhoc.hienThiTatCaMon');
});
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('monhoc/clone', 'Api\MonHocController@cloneBKACADToLocal')
        ->name('api.monhoc.cloneBKACADToLocal');
});

//PhanCongController
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('phancong/clone', 'Api\PhanCongController@cloneBKACADToLocal')
        ->name('api.phancong.cloneBKACADToLocal');
});
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::post('phancong', 'Api\PhanCongController@phanCongWithTtGv')
        ->name('api.phancong.phanCongWithTtGv');
});
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::post('khoa', 'Api\ShowCallController@khoa')
        ->name('api.khoa.all');
    Route::post('ctdt', 'Api\ShowCallController@ctdt')
        ->name('api.khoa.ctdt');
});

//PhanCongChiTiet Controller
Route::group(['middleware' => ['CheckLogin']], function () {
    Route::post('phancongchitiet', 'Api\PhanCongChiTietController@hienThi')
        ->name('api.phancongchitiet.hienThi');
    Route::post('phancongchitiet/tao', 'Api\PhanCongChiTietController@taoPcct')
        ->name('api.phancongchitiet.taoPcct');
    Route::post('phancongchitiet/dexuatlichmoi', 'Api\PhanCongChiTietController@deXuatPcct')
        ->name('api.phancongchitiet.deXuatPcct');
});