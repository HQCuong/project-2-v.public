<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phong extends Model {
	protected $table = 'phong';
	protected $primaryKey = 'ma_phong';
	protected $fillable = [
		'ten_phong','so_cho_ngoi','ma_cau_hinh','ma_tang','tinh_trang'
	];

	public $timestamps = false;
}
