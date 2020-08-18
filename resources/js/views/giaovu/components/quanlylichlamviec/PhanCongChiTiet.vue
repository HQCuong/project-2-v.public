<template>
    <div>
        <label>Phân công</label>
        <selectPhanCongChiTiet @emit_ma_phan_cong="pass_ma_phan_cong"></selectPhanCongChiTiet>
        <br />
        <span class="text-danger" v-if="err_de_xuat">{{err_de_xuat}}</span>
        <span v-if="!err_de_xuat && show_loading">Đang tải...</span>
        <tablePhanCongChiTiet v-if="table_phan_cong_ct" :ma_phan_cong="ma_phan_cong"></tablePhanCongChiTiet>
        <notifications group="add_phan_cong_ct" />
    </div>
</template>

<script>
import selectPhanCongChiTiet from "./select/SelectPhanCongChiTiet";
import tablePhanCongChiTiet from "./table/TablePhanCongChiTiet.vue";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Phân công chi tiết");
    },
    data() {
        return {
            table_phan_cong_ct: false,
            show_loading: false,
            ma_phan_cong: "",
        };
    },
    computed: {
        err_de_xuat() {
            return this.$store.state.phan_cong.err_de_xuat;
        },
        arr_de_xuat_phan_cong_ct() {
            return this.$store.state.phan_cong.arr_de_xuat_phan_cong_ct;
        },
    },
    methods: {
        pass_ma_phan_cong(ma_phan_cong) {
            this.ma_phan_cong = ma_phan_cong;
        },
    },
    watch: {
        arr_de_xuat_phan_cong_ct() {
            if (this.arr_de_xuat_phan_cong_ct.length != 0) {
                this.table_phan_cong_ct = true;
            } else {
                this.table_phan_cong_ct = false;
            }
        },
    },
    components: {
        tablePhanCongChiTiet,
        selectPhanCongChiTiet,
    },
};
</script>

<style>
</style>