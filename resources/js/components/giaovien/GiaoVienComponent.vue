<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <selectgv
                            @show_main_info="show_main_info"
                            @show_calendar="show_calendar"
                            v-if="!is_giao_vien"
                        ></selectgv>
                        <br />
                        <maininfo v-if="is_detail"></maininfo>
                        <br />
                        <lichgv v-if="calendar || is_giao_vien"></lichgv>
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
            calendar: false,
            is_detail: false,
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
        show_main_info(show) {
            if (show == 1) {
                this.is_detail = true;
            } else {
                this.is_detail = false;
            }
        },
        show_calendar(show) {
            if (show == 1) {
                this.calendar = true;
            } else {
                this.calendar = false;
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
