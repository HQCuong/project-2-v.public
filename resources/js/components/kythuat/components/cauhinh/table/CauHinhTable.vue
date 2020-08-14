<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách cấu hình</h4>
        </div>
        <br />
        <div class="card-body table-responsive">
            <vue-good-table
                :columns="columns"
                :search-options="{enabled: true}"
                :rows="arr_cau_hinh"
                styleClass="vgt-table"
            ></vue-good-table>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch("cau_hinh/get_cau_hinh");
    },
    mounted() {
        this.$store.commit("content/page_title", "Danh sách cấu hình");
    },
    data() {
        return {
            columns: [
                {
                    label: "Cấu hình",
                    field: "mo_ta",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Tên loại",
                    field: "ten_loai",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
            ],
        };
    },
    computed: {
        arr_cau_hinh() {
            return this.$store.state.cau_hinh.arr_cau_hinh;
        },
    },
};
</script>
<style lang="css" scoped>
</style>
