<template>
    <div>
        <selectPhanCong @emit_data="pass_data"></selectPhanCong>
        <br />
        <tablePhanCongChiTiet
            v-if="show_table"
            :ma_phan_cong="ma_phan_cong"
            :arr_phan_cong_ct="arr_phan_cong_ct"
        ></tablePhanCongChiTiet>
    </div>
</template>

<script>
import selectPhanCong from "./select/SelectPhanCong";
import tablePhanCongChiTiet from "./table/TablePhanCongChiTiet";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Xem phân công thi tiết");
    },
    computed: {
        arr_phan_cong_ct() {
            return this.$store.state.phan_cong.arr_phan_cong_ct;
        },
    },
    data() {
        return {
            show_table: false,
            ma_phan_cong: "",
        };
    },
    methods: {
        pass_data(ma_phan_cong) {
            this.ma_phan_cong = ma_phan_cong;
        },
    },
    watch: {
        arr_phan_cong_ct() {
            if (this.arr_phan_cong_ct.length != 0) {
                this.show_table = true;
            } else {
                this.show_table = false;
            }
        },
    },
    components: {
        tablePhanCongChiTiet,
        selectPhanCong,
    },
};
</script>

<style>
</style>