<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhanCong extends Model {
    protected $table      = 'phan_cong';
    protected $primaryKey = 'ma_phan_cong';
    protected $fillable   = [
        'ma_lop',
        'ma_mon_hoc',
        'ma_giao_vien',
        'tinh_trang',
    ];
    //0: Đang dạy
    //1: Hoàn thành bởi giáo viên
    //2: Hoàn thành bởi giáo vụ
    protected $attributes = array(
        'tinh_trang' => '0',
    );
    public $timestamps = false;
}
