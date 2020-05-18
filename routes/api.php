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

Route::post('login/{tai_khoan}/{mat_khau}', 'Api\NguoiDungController@login')->name('api.nguoi_dung.login');
Route::group(['middleware' => 'CheckLogin'], function () {
	Route::post('changepassword/{id}/{old}/{new}/', 'Api\NguoiDungController@changepassword')->name('admin.api.changepassword');
	Route::post('index', 'Api\NguoiDungController@index')->name('admin.api.index');
});