<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <thongKe></thongKe>
                        <selectlab @show_lab_info="show_lab_info"></selectlab>
                        <div v-if="show_lab_calendar">
                            <lichSuDung></lichSuDung>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import selectlab from "./components/SelectLab.vue";
import lichSuDung from "./components/LichSuDung.vue";
import thongKe from "./components/ThongKe.vue";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Xem thông tin lab");
    },
    data() {
        return {
            show_lab_calendar: false,
        };
    },
    methods: {
        show_lab_info(show_lab_calendar) {
            if (show_lab_calendar == 0) {
                this.show_lab_calendar = false;
            } else {
                this.show_lab_calendar = true;
            }
        },
    },
    components: {
        lichSuDung,
        selectlab,
        thongKe,
    },
};
</script>
<style lang="css" scoped>
</style>
