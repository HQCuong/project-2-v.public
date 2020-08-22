<?php

use Illuminate\Database\Migrations\Migration;

class InsertLichDayBoSung extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        DB::select(DB::raw("INSERT INTO `lich_day_bo_sung`
        (`ma_lich_day_bo_sung`, `ngay`, `ma_lop`, `ma_nguoi_dung`, `ma_mon_hoc`, `ma_ca`, `ma_phong`, `ghi_chu`, `tinh_trang`) VALUES
        (1, '2020-08-11', 'BKD01K10', 22, 'BKA_ESE', 3, 2, 'sdvasdvs', 1),
        (2, '2020-08-15', 'BIT01K10', 6, 'BIT_ECOM1', 2, 5, '', 1),
        (4, '2020-08-15', 'BIT01K10', 38, 'BIT_ACC', 3, 3, '', 1),
        (5, '2020-08-15', 'BIT01K10', 15, 'BIT_ACC', 6, 5, '', 1)"
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        //
    }
}
