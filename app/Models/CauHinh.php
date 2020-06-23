<?php

namespace App\Models;
use App\Models\Loai;
use Illuminate\Database\Eloquent\Model;

class CauHinh extends Model {
    protected $table      = 'cau_hinh';
    protected $primaryKey = 'ma_cau_hinh';
    protected $fillable   = ['mo_ta', 'ma_loai'];

    public $timestamps = false;
    public function loai() {
        return $this->hasOne(new Loai, 'ma_loai', 'ma_loai');
    }
}
