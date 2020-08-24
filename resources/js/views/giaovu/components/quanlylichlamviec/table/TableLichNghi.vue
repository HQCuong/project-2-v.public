<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách lịch nghỉ</h4>
        </div>
        <div class="card-body table-responsive">
            <vue-good-table
                :columns="columns"
                :rows="arr_ngay_nghi"
                :search-options="{enabled: true}"
                styleClass="vgt-table striped"
                :pagination-options="{enabled: true}"
            >
                <!-- <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field == 'ma_ca'">
                <button
                    class="btn btn-info"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa phân công"
                    @click="test(props.row)"
                >
                    <i class="material-icons">delete</i>
                </button>
            </span>
                </template>-->
                <div slot="emptystate">
                    <span class="font-weight-bold">Giáo viên chưa có lịch nghỉ</span>
                </div>
            </vue-good-table>
        </div>
    </div>
</template>

<script>
export default {
    props: ["arr_ngay_nghi"],
    data() {
        return {
            columns: [
                {
                    label: "Ngày",
                    field: "date",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Giáo viên",
                    field: this.columns_gv,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Ca",
                    field: this.columns_ca,
                    formatFn: this.formatArrCa,
                    sortable: false,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Ghi chú",
                    thClass: "text-info",
                    sortable: false,
                    tdClass: "font-weight-bold",
                },
            ],
        };
    },
    methods: {
        columns_gv(row) {
            if (row.nguoidung) {
                return row.nguoidung.email;
            } else {
                return "Nghỉ lịch chung";
            }
        },
        columns_ca(row) {
            return row.ca;
        },

        formatArrCa(val) {
            if (val.length == 1) {
                return val[0].ma_ca;
            } else {
                var group_ca = "";
                for (let i = 0; i < val.length; i++) {
                    if (i == 0) {
                        group_ca += val[i].ma_ca;
                    } else {
                        group_ca += ", " + val[i].ma_ca;
                    }
                }
                return group_ca;
            }
        },
    },
};
</script>

<style>
</style>