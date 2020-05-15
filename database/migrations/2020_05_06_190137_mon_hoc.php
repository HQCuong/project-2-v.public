<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MonHoc extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    private $name = 'mon_hoc';
    public function up()
    {
        Schema::create($this->name,function(Blueprint $table){
            $table->string('ma_mon_hoc',10);
            $table->string('ten_mon_tieng_anh',100);
            $table->string('ten_mon_tieng_viet',100);
            $table->integer('so_gio')->unsigned();
            $table->integer('ma_kieu_thi');
            $table->primary('ma_mon_hoc');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists($this->name);
    }
}
