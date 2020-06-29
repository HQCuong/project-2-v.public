<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

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
});
///NguoiDungController-Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('nguoidung/tao', 'Api\NguoiDungController@taoNguoiDung')
        ->name('api.nguoidung.taoNguoiDung');
    Route::post('nguoidung/danhsach', 'Api\NguoiDungController@danhSachGiaoVienKiThuat')
        ->name('api.nguoidung.danhSachGiaoVienKiThuat');
    Route::post('nguoidung/clone', 'Api\NguoiDungController@giaoVienClone')
        ->name('api.nguoidung.giaoVienClone');
});
///ToaController--ALL USER
Route::group(['middleware' => ['CheckLogin']], function () {
    Route::post('toa/hienthicactoa', 'Api\ToaController@hienThiTatCaToa')
        ->name('api.toa.hienThiTatCaToa');
});

///ToaController--Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('toa/capnhattoa', 'Api\ToaController@capNhatToa')
        ->name('api.toa.capNhatToa');
    Route::post('toa/check/info', 'Api\ToaController@checkInfo')
        ->name('api.toa.checkInfo');
});

//TangController--Giáo Vụ
Route::group(['middleware' => 'CheckLogin'], function () {
    Route::post('tang/gettang', 'Api\TangController@gettang')
        ->name('api.tang.gettang');
    Route::post('tang/update/{ma_tang}', 'Api\TangController@update')
        ->name('api.tang.update');
    Route::post('tang/create', 'Api\TangController@create')
        ->name('api.tang.create');
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
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrKiThuat']], function () {
    Route::post('loai', 'Api\LoaiController@hienThiTatCa')
        ->name('api.loai.hienThiTatCa');
    Route::post('loai/edit', 'Api\LoaiController@suaLoai')
        ->name('api.loai.suaLoai');
    Route::post('loai/create', 'Api\LoaiController@themLoai')
        ->name('api.loai.themLoai');
});

//CauHinhController
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrKiThuat']], function () {
    Route::post('cauhinh', 'Api\CauHinhController@hienThi')
        ->name('api.cauhinh.hienThiTatCa');
    Route::post('cauhinh/them', 'Api\CauHinhController@themCauHinh')
        ->name('api.cauhinh.themCauHinh');
    Route::post('cauhinh/case/info', 'Api\CauHinhController@hienThiCase')
        ->name('api.cauhinh.hienThiCase');
    Route::post('cauhinh/update/info', 'Api\CauHinhController@capNhatCauHinh')
        ->name('api.cauhinh.capNhatCauHinh');
});

//CauHinhMonController
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrKiThuat']], function () {
    Route::post('cauhinhmon', 'Api\CauHinhMonController@hienThiDanhSachMon')
        ->name('api.cauhinhmon.hienThiDanhSachMon');
    Route::post('cauhinhmon/update', 'Api\CauHinhMonController@suaDoiMonTheoCauHinh')
        ->name('api.cauhinhmon.suaDoiMonTheoCauHinh');
});
//NgàyNghỉController --Giáo Vụ + Giáo Viên
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::post('ngaynghi', 'Api\NgayNghiController@hienThiTatCaLichNghi')
        ->name('api.ngaynghi.hienThiTatCaLichNghi');
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
    Route::post('monhoc/mot', 'Api\MonHocController@hienThiMotMon')
        ->name('api.monhoc.hienThiMotMon');
});
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('monhoc/clone', 'Api\MonHocController@cloneBKACADToLocal')
        ->name('api.monhoc.cloneBKACADToLocal');
});

//PhanCongController
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('phancong/clone', 'Api\PhanCongController@cloneBKACADToLocal')
        ->name('api.phancong.cloneBKACADToLocal');
    Route::post('phancong', 'Api\PhanCongController@phanCongWithTtGv')
        ->name('api.phancong.phanCongWithTtGv');
});