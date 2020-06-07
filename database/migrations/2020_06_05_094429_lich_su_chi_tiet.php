<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class LichSuChiTiet extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    private $name = 'lich_su_chi_tiet';
    public function up()
    {
        Schema::create($this->name,function(Blueprint $table){
            $table->integer('ma_lich_su')->unsigned();
            $table->integer('ma_thiet_bi')->unsigned();
            $table->string('gia',20);
            $table->integer('ma_kieu')->unsigned();
            $table->foreign('ma_lich_su')->references('ma_lich_su')->on('lich_su');
            $table->foreign('ma_thiet_bi')->references('ma_thiet_bi')->on('thiet_bi_phong');
            $table->foreign('ma_kieu')->references('ma_kieu')->on('kieu');
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
