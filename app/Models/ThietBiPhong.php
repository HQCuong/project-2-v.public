<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ThietBiPhong extends Model {
	protected $table = 'thiet_bi_phong';
	protected $primaryKey = 'ma_thiet_bi';
	protected $fillable = ['ma_phong', 'ma_cau_hinh'];

	public $timestamps = false;
}
