<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class Kieu extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	private $name = 'kieu';
	private $ten_kieu = ['Hoạt Động','Thêm', 'Cho Mượn', 'Sửa', 'Trả Về'];
	public function up() {
		Schema::create($this->name, function (Blueprint $table) {
			$table->increments('ma_kieu');
			$table->string('ten_kieu', 100);
		});
		for ($i = 0; $i < count($this->ten_kieu); $i++) {
			DB::table($this->name)->insert(array(
				'ten_kieu' => $this->ten_kieu[$i],
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
