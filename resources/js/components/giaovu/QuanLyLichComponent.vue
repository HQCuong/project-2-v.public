<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <mainbutton></mainbutton>
                        <br />
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mainbutton from "./quanlylichchild/ButtonComponent.vue";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Quản lý lịch làm việc");
    },
    watch: {
        $route(to, from) {
            this.$store.commit("content/page_title", "Quản lý lịch làm việc");
        },
    },
    components: {
        mainbutton,
    },
};
</script>
<style lang="css" scoped>
</style>
