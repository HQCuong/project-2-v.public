<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <selectgv @show_main_view="show_main_view" v-if="!is_giao_vien"></selectgv>
                        <br />
                        <maininfo v-if="main_view"></maininfo>
                        <br />
                        <lichgv v-if="main_view || is_giao_vien"></lichgv>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import selectgv from "./lichgiaovienchild/SelectGiaoVienComponent.vue";
import maininfo from "./lichgiaovienchild/MainInfoComponent.vue";
import lichgv from "./lichgiaovienchild/LichGiaoVienComponent.vue";

export default {
    mounted() {
        if (this.$store.state.phan_cong) {
            // get_phan_cong;
        }
        if (this.$route.path == "/xem_lich") {
            this.$store.commit("content/page_title", "Xem lịch làm việc");
        }
    },
    data() {
        return {
            main_view: false,
        };
    },
    computed: {
        is_giao_vien() {
            return this.$store.state.user.is_giao_vien;
        },
    },
    watch: {
        $route(to, from) {
            this.$store.commit("content/page_title", "Xem lịch làm việc");
        },
    },
    methods: {
        show_main_view(show) {
            if (show == 1) {
                this.main_view = true;
            } else {
                this.main_view = false;
            }
        },
    },
    components: {
        lichgv,
        selectgv,
        maininfo,
    },
};
</script>
<style lang="css" scoped>
</style>
