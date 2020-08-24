<template>
    <div>
        <thongKeLichNghi></thongKeLichNghi>
        <selectGiaoVien v-if="!is_giao_vien"></selectGiaoVien>
        <br />
        <tableLichNghi v-if="show_table_ngay_nghi" :arr_ngay_nghi="arr_ngay_nghi"></tableLichNghi>
    </div>
</template>

<script>
import thongKeLichNghi from "./thongke/ThongKeLichNghi";
import selectGiaoVien from "./select/SelectGiaoVien";
import tableLichNghi from "./table/TableLichNghi";

export default {
    created() {
        this.$store.dispatch("ngay_nghi/get_ngay_nghi");
    },
    mounted() {
        this.$store.commit("content/page_title", "Xem lịch nghỉ");
    },
    computed: {
        arr_ngay_nghi() {
            return this.$store.state.ngay_nghi.arr_ngay_nghi;
        },
        is_giao_vien() {
            return this.$store.state.user.is_giao_vien;
        },
    },
    data() {
        return {
            show_table_ngay_nghi: false,
        };
    },
    watch: {
        arr_ngay_nghi() {
            if (this.arr_ngay_nghi.length != 0) {
                this.show_table_ngay_nghi = true;
            } else {
                this.arr_ngay_nghi = false;
            }
        },
    },
    components: {
        thongKeLichNghi,
        selectGiaoVien,
        tableLichNghi,
    },
};
</script>

<style>
</style>