<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class Toa extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	private $name = 'toa';
	private $ten_toa = ['Tòa 1', 'Tòa 2'];
	private $dia_chi = ['A17 Tạ Quang Bửu', 'D5 Trần Đại Nghĩa'];
	public function up() {
		Schema::create($this->name, function (Blueprint $table) {
			$table->increments('ma_toa');
			$table->string('ten_toa', 20);
			$table->string('dia_chi', 100);
		});
		for ($i = 0; $i < count($this->ten_toa); $i++) {
			DB::table($this->name)->insert(array(
				'ten_toa' => $this->ten_toa[$i],
				'dia_chi' => $this->dia_chi[$i],
			));
		}
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::dropIfExists($this->name);
	}
}
