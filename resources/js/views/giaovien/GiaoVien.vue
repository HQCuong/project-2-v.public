<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <selectGiaovien
                            @show_lich_lam_viec="show_lich_lam_viec"
                            v-if="!is_giao_vien"
                        ></selectGiaovien>
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
    created() {
        if (!this.$store.state.user.is_giao_vien) {
            // phan cong
            this.$store.dispatch("user/get_all_user");
            this.$store.dispatch("phan_cong/get_phan_cong");
        } else {
            // neu la giao vien get phan cong theo ma
            // this.$store.dispatch("phan_cong/get_phan_cong");
        }
    },
    mounted() {
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
        show_lich_lam_viec(show) {
            if (show == 1) {
                this.lich_lam_viec = true;
            } else {
                this.lich_lam_viec = false;
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
