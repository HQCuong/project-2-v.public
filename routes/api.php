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
	// 	->name('api.nguoi_dung.view.get_cap_do');
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
Route::group(['middleware' => 'CheckLogin', 'prefix' => 'tang'], function () {
	Route::post('gettang', 'Api\TangController@gettang')
		->name('api.tang.gettang');
	Route::post('editorcreate', 'Api\TangController@editorcreate')
		->name('api.tang.editorcreate');
});