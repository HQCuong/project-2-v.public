<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Xem lich</div>
                    <div class="card-body">
                        <selectgv></selectgv>
                        <br>
                        <br>
                        <lichgv></lichgv>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import selectgv from './lichgiaovienchild/SelectGiaoVienComponent.vue';
import lichgv from './lichgiaovienchild/LichGiaoVienComponent.vue';
export default {
    mounted() {
        if (this.$route.path == '/xem_lich') {
            this.$store.commit('content/page_title', 'Xem lịch dạy');
        }
    },
    data() {
        return {

        }
    },
    watch: {
        $route(to, from) {
            this.$store.commit('content/page_title', 'Xem lịch dạy');
        }
    },
    components: {
        lichgv,
        selectgv
    }
}

</script>
<style lang="css" scoped>
</style>
