<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phong extends Model {
	protected $table = 'phong';
	protected $primaryKey = 'ma_phong';
	protected $fillable = [
		'ten_phong','so_cho_ngoi','ma_tang','ma_tinh_trang','ghi_chu'
	];

	protected $attributes = array(
	  'ma_tinh_trang' => 1,
	  'ghi_chu' => null,
	);

	public $timestamps = false;
}
