<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NgayNghi extends Model {
    use Traits\HasCompositePrimaryKey;
    protected $table      = 'ngay_nghi';
    protected $primaryKey = [
        'ngay',
        'ma_giao_vien',
        'ma_ca',
    ];
    protected $fillable = [
        'ngay',
        'ma_giao_vien',
        'ma_ca',
        'ghi_chu',
    ];
    protected $attributes = array(
        'ghi_chu' => null,
    );
    public $timestamps   = false;
    public $incrementing = false;
    public function ca() {
        return $this->hasOne('App\Models\Ca', 'ma_ca', 'ma_ca');
    }
}
