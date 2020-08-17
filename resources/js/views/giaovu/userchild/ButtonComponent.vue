<template>
    <div>
        <router-link
            class="btn btn-info"
            :class="{disabled:isList}"
            to="/quan_ly_user/list_user"
        >Danh sách người dùng</router-link>
        <router-link
            class="btn btn-info"
            :class="{disabled:isModi}"
            to="/quan_ly_user/modi_user_info"
        >Tùy chỉnh thông tin người dùng</router-link>
    </div>
</template>
<script>
export default {
    mounted() {
        if (this.$route.path.includes("/list_user")) {
            this.reset_btn_class();
            this.isList = true;
        } else if (this.$route.path.includes("/modi_user_info")) {
            this.reset_btn_class();
            this.isModi = true;
        } else {
            this.reset_btn_class();
        }
    },
    data() {
        return {
            isList: false,
            isModi: false,
        };
    },
    watch: {
        $route(to, from) {
            if (to.path.includes("/list_user")) {
                this.reset_btn_class();
                this.isList = true;
            } else if (to.path.includes("/modi_user_info")) {
                this.reset_btn_class();
                this.isModi = true;
            } else {
                this.reset_btn_class();
            }
        },
    },
    methods: {
        reset_btn_class() {
            this.isList = false;
            this.isModi = false;
        },
    },
};
</script>
<style lang="css" scoped>
</style>
