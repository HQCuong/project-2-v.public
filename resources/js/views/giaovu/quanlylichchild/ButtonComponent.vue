<template>
    <div>
        <router-link
            to="/quan_ly_lich/xem_lich_nghi"
            class="btn btn-info"
            :class="{disabled:isListDayOff}"
        >Xem lịch nghỉ</router-link>
        <router-link
            to="/quan_ly_lich/add_dayoff"
            class="btn btn-info"
            :class="{disabled:isDayOff}"
        >Thêm lịch nghỉ</router-link>
        <router-link
            to="/quan_ly_lich/add_work"
            class="btn btn-info"
            :class="{disabled:isAddWork}"
        >Thêm lịch dạy</router-link>
        <router-link
            to="/quan_ly_lich/xem_phan_cong"
            class="btn btn-info"
            :class="{disabled: isListPcong}"
        >Xem phân công</router-link>
        <router-link
            to="/quan_ly_lich/phan_cong"
            class="btn btn-info"
            :class="{disabled:isPcong}"
        >Phân công</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isDayOff: false,
            isAddWork: false,
            isPcong: false,
            isListPcong: false,
            isListDayOff: false,
        };
    },
    mounted() {
        if (this.$route.path.includes("add_dayoff")) {
            this.reset_btn_class();
            this.isDayOff = true;
        } else if (this.$route.path.includes("add_work")) {
            this.reset_btn_class();
            this.isAddWork = true;
        } else if (this.$route.path.includes("xem_phan_cong")) {
            this.reset_btn_class();
            this.isListPcong = true;
        } else if (this.$route.path.includes("phan_cong")) {
            this.reset_btn_class();
            this.isPcong = true;
        } else if (this.$route.path.includes("xem_lich_nghi")) {
            this.reset_btn_class();
            this.isListDayOff = true;
        } else {
            this.reset_btn_class();
        }
    },
    watch: {
        $route(to, from) {
            if (to.path.includes("add_dayoff")) {
                this.reset_btn_class();
                this.isDayOff = true;
            } else if (to.path.includes("add_work")) {
                this.reset_btn_class();
                this.isAddWork = true;
            } else if (to.path.includes("xem_phan_cong")) {
                this.reset_btn_class();
                this.isListPcong = true;
            } else if (to.path.includes("phan_cong")) {
                this.reset_btn_class();
                this.isPcong = true;
            } else if (to.path.includes("xem_lich_nghi")) {
                this.reset_btn_class();
                this.isListDayOff = true;
            } else {
                this.reset_btn_class();
            }
        },
    },
    methods: {
        reset_btn_class() {
            this.isListDayOff = false;
            this.isAddWork = false;
            this.isDayOff = false;
            this.isListPcong = false;
            this.isPcong = false;
        },
    },
};
</script>
<style lang="css" scoped>
</style>
