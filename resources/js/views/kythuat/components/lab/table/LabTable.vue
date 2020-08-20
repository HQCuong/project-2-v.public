<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách các phòng</h4>
        </div>
        <div class="card-body table-responsive">
            <vue-good-table
                :columns="columns"
                :rows="arr_lab"
                :search-options="{enabled: true}"
                :pagination-options="{enabled: true}"
                styleClass="vgt-table"
            >
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'ma_phong'">
                        <button
                            class="btn btn-info"
                            title="Thay đổi tình trạng"
                            data-toggle="tooltip"
                            data-placement="top"
                        >
                            <i class="material-icons">power_settings_new</i>
                        </button>
                        <router-link
                            class="btn btn-info"
                            :to="{path: `/quan_ly_lab/modi_lab/${props.row.ma_phong}`}"
                            title="Thay đổi tình trạng"
                            data-toggle="tooltip"
                            data-placement="top"
                        >
                            <i class="material-icons">settings</i>
                        </router-link>
                    </span>
                </template>
            </vue-good-table>
        </div>
    </div>
</template>
<script>
export default {
    props: ["arr_lab"],
    data() {
        return {
            columns: [
                {
                    label: "Tên phòng",
                    field: "ten_phong",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Cấu hình",
                    field: "cau_hinh",
                    sortable: false,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Số chỗ ngồi",
                    field: "cho_ngoi",
                    type: "number",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Số máy",
                    field: "may",
                    type: "number",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Tình trạng",
                    field: "tinh_trang",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Tùy chỉnh",
                    field: "ma_phong",
                    sortable: false,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
            ],
        };
    },
    watch: {
        arr_lab() {
            $(document).ready(function () {
                $(".btn").tooltip();
                $(".tooltip-inner").remove();
            });
        },
    },
};
</script>
<style lang="css" scoped>
</style>
