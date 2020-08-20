<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="arr_phan_cong_ct"
            :search-options="{enabled: true}"
            styleClass="vgt-table"
        >
            <template slot="table-row" slot-scope="props">
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
            </template>
            <div slot="emptystate">
                <span
                    class="font-weight-bold"
                >Giáo viên và lớp chưa được xếp lịch đối với phân công đã chọn</span>
            </div>
        </vue-good-table>
    </div>
</template>

<script>
export default {
    props: ["ma_phan_cong"],
    data() {
        return {
            columns: [
                {
                    label: "Thứ",
                    field: "thu",
                    type: "number",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Tên phòng",
                    field: "ten_phong",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Giờ bắt đầu",
                    field: "gio_bat_dau",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Giờ kết thúc",
                    field: "gio_ket_thuc",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Tùy chỉnh",
                    field: "ma_ca",
                    thClass: "text-info",
                },
            ],
            selected_rows: [],
        };
    },
    computed: {
        arr_phan_cong_ct() {
            return this.$store.state.phan_cong.arr_phan_cong_ct;
        },
    },
    methods: {
        test(row) {
            this.$store
                .dispatch("phan_cong/delete_phan_cong_chi_tiet", {
                    user_input: row,
                    ma_phan_cong: this.ma_phan_cong,
                })
                .then(
                    this.$store.dispatch(
                        "phan_cong/get_phan_cong_chi_tiet",
                        this.ma_phan_cong
                    )
                );
        },
    },
    watch: {
        arr_phan_cong_ct() {
            if (this.arr_phan_cong_ct.length != 0) {
                $(document).ready(function () {
                    $(".btn").tooltip({
                        trigger: "hover",
                    });

                    $(".tooltip-inner").remove();
                });
            }
        },
    },
};
</script>

<style>
</style>