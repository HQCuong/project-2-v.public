<?php

namespace App\Models;
use App\Models\Toa;
use Illuminate\Database\Eloquent\Model;

class Tang extends Model {
	protected $table = 'tang';
	protected $primaryKey = 'ma_tang';
	protected $fillable = [
		'ten_tang', 'ma_toa',
	];
	public $timestamps = false;

	public function toa() {
		return $this->belongsto('App\Models\Toa', 'ma_toa');
	}
	public function gettang($rq) {
		if(!$rq->has('ma_tang') && !$rq->has('ma_toa')){
			return $this->join('toa', 'toa.ma_toa', 'tang.ma_toa')
			->get();
		}else{
			return $this->join('toa', 'toa.ma_toa', 'tang.ma_toa')
			->where('tang.ma_toa', $rq->get('ma_toa'))
			->orWhere('tang.ma_tang', $rq->get('ma_tang'))
			->get();
		}
	}
}