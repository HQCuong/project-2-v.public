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
            this.isList = true;
            this.isModi = false;
        } else if (this.$route.path.includes("/modi_user_info")) {
            this.isList = false;
            this.isModi = true;
        } else {
            this.isList = false;
            this.isModi = false;
        }
    },
    data() {
        return {
            isList: false,
            isModi: false
        };
    },
    watch: {
        $route(to, from) {
            if (to.path.includes("/list_user")) {
                this.isList = true;
                this.isModi = false;
            } else if (to.path.includes("/modi_user_info")) {
                this.isList = false;
                this.isModi = true;
            } else {
                this.isList = false;
                this.isModi = false;
            }
        }
    }
};
</script>
<style lang="css" scoped>
</style>
