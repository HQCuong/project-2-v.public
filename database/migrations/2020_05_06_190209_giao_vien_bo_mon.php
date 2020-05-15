<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class GiaoVienBoMon extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	private $name = 'giao_vien_bo_mon';
	public function up() {
		Schema::create($this->name, function (Blueprint $table) {
			$table->integer('ma_giao_vien')->unsigned();
			$table->string('ma_mon_hoc',10);
			$table->foreign('ma_mon_hoc')->references('ma_mon_hoc')->on('mon_hoc');
			$table->primary(['ma_giao_vien', 'ma_mon_hoc']);
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
