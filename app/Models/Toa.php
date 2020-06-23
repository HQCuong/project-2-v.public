<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Toa extends Model {
	protected $table = 'toa';
	protected $primaryKey = 'ma_toa';
	protected $fillable = ['ten_toa', 'dia_chi','ma_tinh_trang'];

	public $timestamps = false;
	public function tang() {
		return $this->hasMany('App\Models\Tang', 'ma_toa');
	}
}
