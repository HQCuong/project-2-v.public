<?php

use Illuminate\Database\Migrations\Migration;

class CreateTriggerLichSuChiTiet extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	private $table = 'lich_su_chi_tiet';
	private $name_trigger_update = 'update_tinh_trang_thiet_bi_theo_lic_su';
	private $name_trigger_insert = 'insert_tinh_trang_thiet_bi_theo_lic_su';
	public function up() {
		DB::unprepared("CREATE TRIGGER $this->name_trigger_insert
        BEFORE INSERT
        ON $this->table
        FOR EACH ROW
        BEGIN
            IF(NEW.ma_kieu = 2 OR NEW.ma_kieu = 3)
                THEN SET @tt = NEW.ma_kieu;
            ELSE
                SET @tt = 0;
            END IF;
            UPDATE thiet_bi_phong SET thiet_bi_phong.tinh_trang = @tt WHERE thiet_bi_phong.ma_thiet_bi = NEW.ma_thiet_bi;
        END
        ");
		DB::unprepared("CREATE TRIGGER $this->name_trigger_update
        BEFORE UPDATE
        ON $this->table
        FOR EACH ROW
        BEGIN
            IF(NEW.ma_kieu = 2 OR NEW.ma_kieu = 3)
                THEN SET @tt = NEW.ma_kieu;
            ELSE
                SET @tt = 0;
            END IF;
            UPDATE thiet_bi_phong SET thiet_bi_phong.tinh_trang = @tt WHERE thiet_bi_phong.ma_thiet_bi = NEW.ma_thiet_bi;
        END
        ");
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		DB::unprepared("DROP TRIGGER IF EXISTS $this->name_trigger");
	}
}
