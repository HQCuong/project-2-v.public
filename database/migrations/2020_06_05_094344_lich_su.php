<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class LichSu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    private $name = 'lich_su';
    public function up()
    {
        Schema::create($this->name,function(Blueprint $table){
            $table->increments('ma_lich_su');
            $table->integer('ma_nguoi_dung')->unsigned();
            $table->timestamp('thoi_gian', 0);
            $table->foreign('ma_nguoi_dung')->references('ma_nguoi_dung')->on('nguoi_dung');
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
