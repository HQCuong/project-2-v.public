<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// laravel-router

Route::get('/', function () {
    return view('login');
});

Route::get('/home', function () {
    return view('app');
});
Route::get('/home2', function () {
    return "done";
});
// vue-router
Route::group(['middleware' => 'CheckKey'], function () {
    Route::get('/home2', function () {
        return "done";
    });
});
Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');
