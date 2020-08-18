<template>
    <div>
        <label>Phân công</label>
        <selectPhanCong @show_table_phan_cong_ct="show_table_phan_cong_ct"></selectPhanCong>
        <br />
        <tablePhanCongChiTiet v-if="show_table"></tablePhanCongChiTiet>
    </div>
</template>

<script>
import selectPhanCong from "./select/SelectPhanCong";
import tablePhanCongChiTiet from "./table/TablePhanCongChiTiet";

export default {
    mounted() {
        return this.$store.commit(
            "content/page_title",
            "Xem phân công thi tiết"
        );
    },
    data() {
        return {
            show_table: false,
        };
    },
    methods: {
        show_table_phan_cong_ct(show) {
            if (show == 1) {
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