<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PhanCong extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	private $name = 'phan_cong';
	public function up() {
		Schema::create($this->name, function (Blueprint $table) {
			$table->increments('ma_phan_cong');
			$table->string('ma_lop', 15);
			$table->string('ma_mon_hoc', 10);
			$table->integer('ma_giao_vien');
			$table->integer('tinh_trang');
			$table->foreign('ma_mon_hoc')->references('ma_mon_hoc')->on('mon_hoc');

		});
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
