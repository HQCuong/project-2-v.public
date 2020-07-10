<template>
    <div>
        <div>
            <label>Người dùng</label>
            <multiselect v-model="user" :options="arr_user" :close-on-select="true" :show-labels="true" placeholder="Chọn người dùng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true" :custom-label="userLabel"></multiselect>
        </div>
        <br>
        <br>
        <div class="form-group">
            <label for="insertEmail">Nhập email</label>
            <input type="email" class="form-control" id="insertEmail" :placeholder="current_email ? current_email :  'Email'" v-model="email">
        </div>
        <br>
        <div class="form-group">
            <label for="insertAccount">Nhập tài khoản</label>
            <input type="text" class="form-control" id="insertAccount" :placeholder="current_account ? current_account : 'Tài khoản'" v-model="account">
        </div>
        <br>
        <div class="form-group">
            <label for="insertSDT">Nhập số điện thoại</label>
            <input type="text" class="form-control" id="insertSDT" :placeholder="current_sdt ? current_sdt : 'sdt'" v-model="sdt">
        </div>
        <br>
        <div class="form-group">
            <label for="insertPass">Nhập Mật khẩu</label>
            <input type="password" class="form-control" id="insertPass" placeholder="Mật khẩu mới" v-model="password">
        </div>
        <br>
        <div class="form-group">
            <label for="confirmPass">Nhập lại mật khẩu</label>
            <input type="password" class="form-control" id="confirmPass" placeholder="Nhập lại mật khẩu" v-model="password">
        </div>
        <br>
        <button class="btn btn-info">Submit</button>
    </div>
</template>
<script>
export default {
    created() {
        if (this.$route.params.ma_nguoi_dung) {
            this.$store.dispatch('user/get_user_info', this.$route.params.ma_nguoi_dung);
        }

        this.$store.dispatch('user/get_user');
    },
    mounted() {
        // change label color
        $(".form-group").addClass("bmd-form-group");
        $("label").addClass("bmd-label-static");
        $(".form-group").on("click", function() {
            $(".form-group").removeClass("is-focused");
            $(this).addClass("is-focused");
        })

        // remove color while move out input
        $("input").blur(function() {
            $(".form-group").removeClass("is-focused");
        });

        this.$store.commit('content/page_title', 'Tùy chỉnh thông tin người dùng');
    },
    data() {
        return {
            user: '',
            email: '',
            account: '',
            sdt: '',
            password: ''
        }
    },
    computed: {
        user_info() {
            return this.$store.state.user.user_info;
        },
        arr_user() {
            return this.$store.state.user.arr_user;
        },
        current_email() {
            return this.user_info.email;
        },
        current_account() {
            return this.user_info.tai_khoan;
        },
        current_sdt() {
            return this.user_info.sdt;
        }
    },
    methods: {
        userLabel({ ho_ten, email }) {
            return `${ho_ten} - ${email}`;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
