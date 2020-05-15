<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class NguoiDung extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	private $name = 'nguoi_dung';
	private $tai_khoan = ['admin', 'user', 'duong', 'cuong'];
	private $mat_khau = ['1', '1', '1', '1'];
	private $email = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com'];
	private $cap_do = ['0', '1', '2', '0'];
	private $key = ['0', '1', '2', '4'];
	public function up() {
		Schema::create($this->name, function (Blueprint $table) {
			$table->increments('ma_nguoi_dung');
			$table->string('tai_khoan', 50)->nullable(false)->unique();
			$table->string('mat_khau', 256)->nullable(false);
			$table->string('email', 50)->nullable(false)->unique();
			$table->integer('cap_do');
			$table->string('key', 256)->nullable(false)->unique();
		});
		for ($i = 0; $i < count($this->tai_khoan); $i++) {
			DB::table($this->name)->insert(array(
				'tai_khoan' => $this->tai_khoan[$i],
				'mat_khau' => Hash::make($this->mat_khau[$i]),
				'email' => $this->email[$i],
				'cap_do' => $this->cap_do[$i],
				'key' => $this->key[$i],
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
