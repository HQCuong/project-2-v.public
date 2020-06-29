<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MonHoc extends Model {
    protected $table      = 'mon_hoc';
    protected $primaryKey = 'ma_mon_hoc';
    protected $fillable   = ['ma_mon_hoc', 'ten_mon_tieng_anh', 'ten_mon_tieng_viet', 'so_gio', 'ma_kieu_thi'];
    protected $keyType    = 'string';
    protected $attributes = array(
        'ten_mon_tieng_anh'  => null,
        'ten_mon_tieng_viet' => null,
        'so_gio'             => null,
        'ma_kieu_thi'        => null,
    );
    public $timestamps = false;
}
