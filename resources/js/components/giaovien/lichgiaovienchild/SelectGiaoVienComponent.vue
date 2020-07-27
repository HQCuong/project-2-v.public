<template>
    <div>
        <div v-if="!is_giao_vien">
            <label>Chọn phân công</label>
            <multiselect
                v-model="phan_cong"
                :options="arr_phan_cong"
                :close-on-select="true"
                :show-labels="true"
                placeholder="Chọn giáo viên"
                deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
                selectLabel="Click hoặc nhấn Enter để chọn"
                :searchable="true"
                :custom-label="labelPhanCong"
            ></multiselect>
        </div>
        <div>
            <br />
            <maininfo v-if="show_maininfo"></maininfo>
            <br />
            <calendar v-if="show_calendard"></calendar>
        </div>
    </div>
</template>
<script>
import maininfo from "./MainInfoComponent";
import calendar from "./LichGiaoVienComponent";

export default {
    created() {
        if (this.$store.state.user.is_giao_vien) {
            // this.arr_lop = ["BKD", "BIT"];
        }

        if (!this.$store.state.user.is_giao_vien) {
            this.$store.dispatch("phan_cong/get_phan_cong");
        }
    },
    data() {
        return {
            phan_cong: "",
            show_maininfo: false,
            show_calendar: false,
        };
    },
    computed: {
        is_giao_vien() {
            return this.$store.state.user.is_giao_vien;
        },
        arr_phan_cong() {
            return this.$store.state.phan_cong.arr_phan_cong;
        },
    },
    watch: {
        phan_cong() {
            if (this.phan_cong) {
                console.log(1);
            } else {
                console.log(2);
            }
        },
    },
    methods: {
        labelPhanCong({ ma_nguoi_dung, ma_lop, ma_mon_hoc }) {
            return `${ma_nguoi_dung}-${ma_lop}-${ma_mon_hoc}`;
        },
    },
    components: {
        maininfo,
        calendar,
    },
};
</script>
<style lang="css" scoped>
</style>
