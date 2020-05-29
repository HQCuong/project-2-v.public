<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;
class CapDo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    private $name = 'cap_do';
    private $ma_cap_do = ['0', '1', '2'];
    private $ten_cap_do = ['Giáo Vụ', 'Kĩ Thuật', 'Giáo Viên'];    
    public function up()
    {
        Schema::create($this->name,function(Blueprint $table){
            $table->integer('ma_cap_do')->unique();
            $table->string('ten_cap_do',30);
            $table->primary('ma_cap_do');
        });
        for ($i = 0; $i < count($this->ten_cap_do); $i++) {
            DB::table($this->name)->insert(array(
                'ma_cap_do' => $this->ma_cap_do[$i],
                'ten_cap_do' => $this->ten_cap_do[$i],
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
