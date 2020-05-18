<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NguoiDung extends Model {
	protected $table = 'nguoi_dung';
	protected $primaryKey = 'ma_nguoi_dung';

	public $timestamps = false;
}
