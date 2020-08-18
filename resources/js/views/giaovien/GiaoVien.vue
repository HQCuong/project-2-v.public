<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <selectGiaovien @show_main_view="show_main_view" v-if="!is_giao_vien"></selectGiaovien>
                        <br />
                        <lichLamViec v-if="lich_lam_viec || is_giao_vien"></lichLamViec>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import selectGiaovien from "./components/SelectGiaoVien.vue";
import lichLamViec from "./components/LichLamViec.vue";

export default {
    mounted() {
        if (!this.$store.state.user.is_giao_vien) {
            // get tat ca phan cong;
        } else {
            // get phan cong theo tung giao vien
        }
        if (this.$route.path == "/lich_lam_viec") {
            this.$store.commit("content/page_title", "Xem lịch làm việc");
        }
    },
    data() {
        return {
            lich_lam_viec: false,
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
        lichLamViec,
        selectGiaovien,
    },
};
</script>
<style lang="css" scoped>
</style>
