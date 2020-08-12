<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách các phòng</h4>
        </div>
        <br>
        <div class="card-body table-responsive">
            <vue-good-table :columns="columns" :rows="arr_lab" :search-options="{enabled: true}" :pagination-options="{enabled: true}">
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'ma_phong'">
                        <button class="btn btn-info" title="Thay đổi tình trạng">
                            <i class="material-icons">
                                power_settings_new
                            </i>
                        </button>
                        <router-link class="btn btn-info" :to="{path: `/quan_ly_lab/modi_lab/${props.row.ma_phong}`}" title="Tùy chỉnh">
                            <i class="material-icons">
                                settings
                            </i>
                        </router-link>
                    </span>
                </template>
            </vue-good-table>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {},
    data() {
        return {
            columns: [{
                    label: 'Tên phòng',
                    field: 'ten_phong',
                },
                {
                    label: 'Cấu hình',
                    field: 'cau_hinh'
                },
                {
                    label: 'Số chỗ ngồi',
                    field: 'cho_ngoi',
                    type: 'number'
                },
                {
                    label: 'Số máy',
                    field: 'may',
                    type: 'number'
                },
                {
                    label: 'Tình trạng',
                    field: 'tinh_trang',
                },
                {
                    label: 'Options',
                    field: 'ma_phong',
                    sortable: false
                }
            ],
            arr_lab: [
                { ma_phong: 1, ten_phong: 'lab 201', cho_ngoi: 25, may: 25, cau_hinh: 'cau_hinh 1', tinh_trang: "Hoạt động" },
                { ma_phong: 2, ten_phong: 'lab 202', cho_ngoi: 25, may: 25, cau_hinh: 'cau_hinh 2', tinh_trang: "Hoạt động" },
                { ma_phong: 3, ten_phong: 'lab 203', cho_ngoi: 30, may: 30, cau_hinh: 'cau_hinh 2', tinh_trang: "Hoạt động" },
                { ma_phong: 4, ten_phong: 'lab 204', cho_ngoi: 20, may: 15, cau_hinh: 'cau_hinh 2', tinh_trang: "Bảo trì" }
            ]
        }
    },
    computed: {
        // arr_lab() {
        //     return this.$store.state('lab/arr_lab');
        // }
    },
    methods: {

    },
    watch: {

    }
}

</script>
<style lang="css" scoped>
</style>
