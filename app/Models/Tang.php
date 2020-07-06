<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Tang extends Model {
    protected $table      = 'tang';
    protected $primaryKey = 'ma_tang';
    protected $fillable   = [
        'ten_tang', 'ma_toa', 'ma_tinh_trang',
    ];
    public $timestamps = false;

    public function toa() {
        return $this->belongsto('App\Models\Toa', 'ma_toa');
    }
    public function tinhTrang() {
        return $this->belongsto('App\Models\TinhTrang', 'ma_tinh_trang');
    }
}