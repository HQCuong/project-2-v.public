<template>
    <div class="card">
        <div class="card-header card-header-info">
            <h4 class="card-title">Danh sách người dùng</h4>
        </div>
        <div class="card-body table-responsive">
            <table class="table table-hover">
                <thead class="text-info">
                    <th>Tên</th>
                    <th>Địa chỉ email</th>
                    <th>Chức vụ</th>
                    <th>Tùy chỉnh</th>
                </thead>
                <tbody>
                    <tr v-if="arr_user && index < 5" v-for="(user ,index) in arr_user">
                        <td>{{user.ho_ten ? user.ho_ten : 'khong xac dinh'}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.ten_cap_do}}</td>
                        <td>
                            <button class="btn btn-info" title="tùy chỉnh thông tin">
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
        this.$store.dispatch('user/get_user');
    },
    data() {
        return {

        }
    },
    computed: {
        arr_user() {
            return this.$store.state.user.arr_user;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
