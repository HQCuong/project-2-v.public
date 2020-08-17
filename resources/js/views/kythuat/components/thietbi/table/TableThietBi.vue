<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách thiết bị</h4>
        </div>
        <div class="card-body table-responsive">
            <vue-good-table
                @on-selected-rows-change="selectionChanged"
                :columns="columns"
                :rows="rows"
                :search-options="{enabled: true}"
                :pagination-options="{enabled: true}"
                :select-options="{
                    enabled:true,
                    selectionText: 'thiết bị đã chọn',
                    clearSelectionText: 'Xóa',
                    selectOnCheckboxOnly: true
                }"
                styleClass="vgt-table"
            >
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'ma_thiet_bi'">
                        <button
                            class="btn btn-info"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Thay đổi tình trạng"
                        >
                            <i class="material-icons">power_settings_new</i>
                        </button>
                        <button
                            class="btn btn-info"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Thay đổi thông tin"
                        >
                            <i class="material-icons">settings</i>
                        </button>
                        <button
                            class="btn btn-info"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Chuyển phòng"
                        >
                            <i class="material-icons">redo</i>
                        </button>
                    </span>
                </template>
                <div slot="selected-row-actions">
                    <button
                        class="btn btn-info"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >Tùy chỉnh</button>
                </div>
            </vue-good-table>
            <formSelectedRows></formSelectedRows>
        </div>
    </div>
</template>
<script>
import formSelectedRows from "../form/FormSelectedRows";

export default {
    mounted() {
        $(".btn").tooltip();
    },
    data() {
        return {
            columns: [
                {
                    label: "Tên thiết bị",
                    field: "ten_thiet_bi",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Cấu hình",
                    field: "cau_hinh",
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
                    field: "ma_thiet_bi",
                    sortable: false,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
            ],
            rows: [
                {
                    ma_thiet_bi: 1,
                    ten_thiet_bi: "thiết bị 1",
                    cau_hinh: "cấu hình 1",
                    tinh_trang: "Hoạt động",
                },
                {
                    ma_thiet_bi: 2,
                    ten_thiet_bi: "thiết bị 2",
                    cau_hinh: "cấu hình 2",
                    tinh_trang: "bảo trì",
                },
            ],
        };
    },
    methods: {
        selectionChanged(row) {},
    },
    components: {
        formSelectedRows,
    },
};
</script>
<style lang="css" scoped>
</style>
