<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CauHinh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    private $name = 'cau_hinh';
    public function up()
    {
        Schema::create($this->name,function(Blueprint $table){
            $table->increments('ma_cau_hinh');
            $table->text('mo_ta');
            $table->integer('ma_loai')->unsigned();
            $table->foreign('ma_loai')->references('ma_loai')->on('loai');
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
