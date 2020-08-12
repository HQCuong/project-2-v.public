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
            :custom-label="labelPcong"
        ></multiselect>
        <br />
        <maintable v-if="show_table"></maintable>
    </div>
</template>

<script>
import maintable from "./xemphancongchild/TablePcongCTComponent";

export default {
    created() {
        this.$store.dispatch("phan_cong/get_phan_cong");
    },
    data() {
        return {
            phan_cong: "",
            show_table: false,
        };
    },
    computed: {
        arr_phan_cong() {
            return this.$store.state.phan_cong.arr_phan_cong;
        },
    },
    methods: {
        labelPcong({ ma_nguoi_dung, ma_lop, ma_mon_hoc }) {
            return `${ma_nguoi_dung} - ${ma_lop} - ${ma_mon_hoc}`;
        },
    },
    watch: {
        phan_cong() {
            if (this.phan_cong) {
                this.$store
                    .dispatch(
                        "phan_cong/get_phan_cong_chi_tiet",
                        this.phan_cong.ma_phan_cong
                    )
                    .then((this.show_table = true));
            } else {
                this.show_table = false;
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