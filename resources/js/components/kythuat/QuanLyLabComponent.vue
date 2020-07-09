<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton></mainbutton>
                        <br>
                        <maininfo></maininfo>
                        <br>
                        <!-- main view -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mainbutton from './modilabchild/ButtonComponent.vue';
import maininfo from './modilabchild/MainInfoComponent.vue';

export default {
    mounted() {
        if (this.$route.path == '/quan_ly_lab') {
            this.$store.commit('content/page_title', 'Quản lý phòng lab');
        }
    },
    data() {
        return {
        }
    },
    watch: {
        $route(to, from) {
            this.$store.commit('content/page_title', 'Quản lý phòng lab');
        }
    },
    components: {
        mainbutton,
        maininfo
    }
}

</script>
<style scoped>
</style>
