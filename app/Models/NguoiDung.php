<?php

namespace App\Models;

use App\Models\CapDo;
use Illuminate\Database\Eloquent\Model;

class NguoiDung extends Model {
    protected $table      = 'nguoi_dung';
    protected $primaryKey = 'ma_nguoi_dung';
    protected $fillable   = [
        'ho_ten',
        'tai_khoan',
        'mat_khau',
        'email',
        'sdt',
        'ma_cap_do',
        'key',
    ];
    protected $attributes = array(
        'ma_cap_do' => 3,
        'ho_ten'    => null,
    );
    protected $hidden = [
        'key',
        'mat_khau',
    ];
    public $timestamps = false;

    public function capDo() {
        return $this->hasOne(new CapDo, 'ma_cap_do', 'ma_cap_do');
    }
    public function ngayNghi() {
        return $this->hasMany('App\Models\NgayNghi', 'ma_giao_vien', 'ma_nguoi_dung');
    }
    public function phanCong() {
        return $this->hasMany('App\Models\PhanCong', 'ma_nguoi_dung', 'ma_nguoi_dung');
    }
}
