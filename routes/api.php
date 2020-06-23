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
Route::post('login/{tai_khoan}/{mat_khau}', 'Api\NguoiDungController@login')
    ->name('api.nguoi_dung.login');
Route::any('nguoidung/resetpassword', 'Api\NguoiDungController@resetpassword')
    ->name('api.nguoi_dung.resetpassword');
Route::group(['middleware' => 'CheckLogin'], function () {
    Route::post('logout', 'Api\NguoiDungController@logout')
        ->name('api.nguoi_dung.logout');
    Route::post('nguoidung/changepassword', 'Api\NguoiDungController@changepassword')
        ->name('api.nguoi_dung.changepassword');
    Route::post('nguoidung/update/info/{id}', 'Api\NguoiDungController@updateinfo')
        ->name('api.nguoi_dung.updateinfo');
    Route::post('nguoidung/check/duplicate', 'Api\NguoiDungController@duplicate_email_sdt')
        ->name('api.nguoi_dung.view.duplicate_email_sdt');
    Route::post('nguoidung/check/key', 'Api\NguoiDungController@check_key')
        ->name('api.nguoi_dung.check.key');
});
///NguoiDungController-Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('nguoidung/create', 'Api\NguoiDungController@create')
        ->name('api.nguoi_dung.create');
    Route::post('nguoidung/view/list', 'Api\NguoiDungController@viewgiaovienkithuat')
        ->name('api.nguoi_dung.view.all');
    // Route::post('nguoidung/view/cap_do', 'Api\NguoiDungController@get_cap_do')
    //     ->name('api.nguoi_dung.view.get_cap_do');
});

///ToaController--Giáo Vụ
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVu']], function () {
    Route::post('toa/show/{ma_toa}', 'Api\ToaController@hienToa')
        ->name('api.toa.hien_toa');
    Route::post('toa/update/{ma_toa}', 'Api\ToaController@capNhat')
        ->name('api.toa.capNhat');
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

//GiáoViênController --Giáo Vụ + Giáo Viên
Route::group(['middleware' => ['CheckLogin', 'CheckGiaoVuOrGiaoVien']], function () {
    Route::any('giaovien', 'Api\GiaoVienController@testCall')
        ->name('api.giaovien.testCall');
});