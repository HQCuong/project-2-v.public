<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <mainbutton></mainbutton>
                        <br />
                        <maininfo></maininfo>
                        <br />
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mainbutton from "./userchild/ButtonComponent.vue";
import maininfo from "./userchild/MainInfoComponent.vue";
import listuser from "./userchild/ListUserComponent.vue";

export default {
    mounted() {
        if (this.$route.path == "/quan_ly_user") {
            this.$store.commit("content/page_title", "Quản lý người dùng");
        }
    },
    watch: {
        $route(to, from) {
            this.$store.commit("content/page_title", "Quản lý người dùng");
        }
    },
    components: {
        listuser,
        maininfo,
        mainbutton
    }
};
</script>
<style lang="css" scoped>
</style>
