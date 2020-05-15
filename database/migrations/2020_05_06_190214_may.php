<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class May extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	private $name = 'may';
	public function up() {
		Schema::create($this->name, function (Blueprint $table) {
			$table->string('ma_may', 15);
			$table->integer('ma_cau_hinh')->unsigned();
			$table->integer('ma_phong')->unsigned();
			$table->integer('tinh_trang');
			$table->foreign('ma_cau_hinh')->references('ma_cau_hinh')->on('cau_hinh');
			$table->foreign('ma_phong')->references('ma_phong')->on('phong');
			$table->primary('ma_may');
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
