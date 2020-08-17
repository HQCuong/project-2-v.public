<template>
    <div>
        <label>Phân công</label>
        <multiselect
            v-model="phan_cong"
            :options="arr_phan_cong"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn phân công"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="true"
            :custom-label="phanCongLabel"
        ></multiselect>
        <br />
        <label>Số giờ dạy mỗi buổi</label>
        <multiselect
            v-model="so_gio"
            :options="arr_gio_day"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn số giờ dạy"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="false"
            :custom-label="gioLabel"
        >
            <template slot="noOptions">Chưa chọn phân công</template>
        </multiselect>
        <br />
        <span class="text-danger" v-if="err_de_xuat">{{err_de_xuat}}</span>
        <span v-if="!err_de_xuat && loading">Đang tải...</span>
        <maintable
            :ma_phan_cong="phan_cong.ma_phan_cong"
            :so_gio="so_gio.value"
            v-if="table_phan_cong"
            @reset_form="reset_form"
        ></maintable>
        <notifications group="add_phan_cong_ct_success" />
    </div>
</template>

<script>
import maintable from "./phancongchild/TablePhanCongComponent";

export default {
    created() {
        this.$store.commit("phan_cong/reset_err");
        this.$store.dispatch("phan_cong/get_phan_cong");
    },
    mounted() {
        this.$store.commit("content/page_title", "Phân công chi tiết");
    },
    data() {
        return {
            table_phan_cong: false,
            phan_cong: "",
            so_gio: "",
            arr_gio_day: [],
            loading: false,
        };
    },
    computed: {
        arr_phan_cong() {
            return this.$store.state.phan_cong.arr_phan_cong;
        },
        de_xuat_phan_cong() {
            return this.$store.state.phan_cong.de_xuat_phan_cong;
        },
        err_de_xuat() {
            return this.$store.state.phan_cong.err_de_xuat;
        },
    },
    methods: {
        phanCongLabel({ ma_lop, ma_nguoi_dung, ma_mon_hoc }) {
            return `${ma_nguoi_dung} - ${ma_lop} - ${ma_mon_hoc}`;
        },
        gioLabel({ title }) {
            return `${title}`;
        },
        reset_form() {
            this.table_phan_cong = false;
            this.phan_cong = "";
            this.so_gio = "";
        },
    },
    watch: {
        phan_cong() {
            this.so_gio = "";
            this.table_phan_cong = false;
            this.$store.commit("phan_cong/reset_err");
            if (!this.phan_cong) {
                this.arr_gio_day = [];
            } else {
                this.arr_gio_day = [
                    {
                        value: 2,
                        title: "2 giờ",
                    },
                    {
                        value: 4,
                        title: "4 giờ",
                    },
                ];
            }
        },
        so_gio() {
            if (this.so_gio) {
                this.$store
                    .dispatch("phan_cong/get_de_xuat_phan_cong", {
                        ma_phan_cong: this.phan_cong.ma_phan_cong,
                        so_gio: this.so_gio.value,
                    })
                    .then((this.loading = true));
            } else {
                this.table_phan_cong = false;
            }
        },
        de_xuat_phan_cong() {
            if (this.de_xuat_phan_cong.length != 0) {
                this.loading = false;
                this.table_phan_cong = true;
            } else {
                this.table_phan_cong = false;
            }
        },
    },
    components: {
        maintable,
    },
};
</script>

<style>
</style>