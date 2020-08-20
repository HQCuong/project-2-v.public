<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách người dùng</h4>
        </div>
        <br />
        <div class="card-body table-responsive">
            <vue-good-table
                :columns="columns"
                :rows="arr_user"
                :search-options="{enabled: true}"
                :pagination-options="{enabled: true}"
                styleClass="vgt-table"
            >
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'ma_nguoi_dung'">
                        <router-link
                            class="btn btn-info"
                            :to="{path: `/quan_ly_user/update_thong_tin_user/${props.row.ma_nguoi_dung}`}"
                            title="Tùy thông tin người dùng"
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
    created() {
        this.$store.dispatch("user/get_all_user");
    },
    mounted() {
        this.$store.commit("content/page_title", "Danh sách người dùng");
    },
    data() {
        return {
            columns: [
                {
                    label: "Tên người dùng",
                    field: this.fomratNullName,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Email",
                    field: "email",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "SĐT",
                    field: "sdt",
                    sortable: false,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Cấp độ",
                    field: "ten_cap_do",
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
                {
                    label: "Tùy chỉnh",
                    field: "ma_nguoi_dung",
                    sortable: false,
                    thClass: "text-info",
                    tdClass: "font-weight-bold",
                },
            ],
        };
    },
    computed: {
        arr_user() {
            return this.$store.state.user.arr_user;
        },
    },
    methods: {
        fomratNullName(row) {
            if (row.ho_ten) {
                return row.ho_ten;
            } else {
                return "Demo user";
            }
        },
    },
    watch: {
        arr_user() {
            if (this.arr_user.length != 0) {
                $(document).ready(function () {
                    $(".btn").tooltip();
                });

                $(".tooltip-inner").remove();
            }
        },
    },
};
</script>
<style lang="css" scoped>
</style>

