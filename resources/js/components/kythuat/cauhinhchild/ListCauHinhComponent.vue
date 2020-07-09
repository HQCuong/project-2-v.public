<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách thiết bị</h4>
        </div>
        <div class="card-body table-responsive">
            <table class="table table-hover">
                <thead class="text-info">
                    <th>Thông số</th>
                    <th>Tùy chỉnh</th>
                </thead>
                <tbody v-if="arr_cau_hinh">
                    <tr v-for="cau_hinh in arr_cau_hinh" :key="cau_hinh.ma_cau_hinh">
                        <td>{{cau_hinh.mo_ta}}</td>
                        <td>
                            <button class="btn btn-info" data-toggle="tooltip" data-placement="top" title="Tùy chỉnh thông tin">
                                <i class="material-icons">
                                    settings
                                </i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('cau_hinh/get_cau_hinh');
    },
    mounted() {
        this.$store.commit('content/page_title', 'Danh sách cấu hình');
    },
    data() {
        return {

        }
    },
    computed: {
        arr_cau_hinh() {
            return this.$store.state.cau_hinh.arr_cau_hinh;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
