<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
class CauHinh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    private $name = 'cau_hinh';
    private $chip = ['i5-8100F','G5400','E1280'];
    private $ram = ['8','16','32'];
    private $o_cung = ['250GB HDD','250GB SSD, 500GB HDD','250GB SSD'];
    private $vga = ['GTX 1080','GTX 1050','RTX 2080'];
    private $man_hinh=['Asus VX279','Dell E2417','Dell P2417'];
    public function up()
    {
        Schema::create($this->name,function(Blueprint $table){
            $table->increments('ma_cau_hinh');
            $table->string('chip',20);
            $table->string('ram',20);
            $table->string('o_cung',25);
            $table->string('vga',20);
            $table->string('man_hinh',50);
        });
        for ($i=0; $i < count($this->chip); $i++) { 
            DB::table($this->name)->insert(array(
                'chip' => $this->chip[$i],
                'ram' => $this->ram[$i],
                'o_cung' => $this->o_cung[$i],
                'vga' => $this->vga[$i],
                'man_hinh' => $this->man_hinh[$i],
            ));
        }
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
