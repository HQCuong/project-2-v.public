<template>
    <div>
        <button class="btn btn-info">Xem lịch nghỉ</button>
        <router-link
            to="/quan_ly_lich/add_dayoff"
            class="btn btn-info"
            :class="{disabled:isDayOff}"
        >Thêm lịch nghỉ</router-link>
        <router-link
            to="/quan_ly_lich/add_work"
            class="btn btn-info"
            :class="{disabled:isAddWord}"
        >Thêm lịch dạy</router-link>
        <button class="btn btn-info">Xem phân công</button>
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
            isAddWord: false,
            isPcong: false,
        };
    },
    mounted() {
        if (this.$route.path.includes("add_dayoff")) {
            this.isDayOff = true;
            this.isAddWord = false;
            this.isPcong = false;
        } else if (this.$route.path.includes("add_work")) {
            this.isAddWord = true;
            this.isDayOff = false;
            this.isPcong = false;
        } else if (this.$route.path.includes("phan_cong")) {
            this.isAddWord = false;
            this.isDayOff = false;
            this.isPcong = true;
        } else {
            this.isAddWord = false;
            this.isDayOff = false;
            this.isPcong = false;
        }
    },
    watch: {
        $route(to, from) {
            if (to.path.includes("add_dayoff")) {
                this.isDayOff = true;
                this.isAddWord = false;
                this.isPcong = false;
            } else if (to.path.includes("add_work")) {
                this.isAddWord = true;
                this.isDayOff = false;
                this.isPcong = false;
            } else if (to.path.includes("phan_cong")) {
                this.isAddWord = false;
                this.isDayOff = false;
                this.isPcong = true;
            } else {
                this.isAddWord = false;
                this.isDayOff = false;
                this.isPcong = false;
            }
        },
    },
};
</script>
<style lang="css" scoped>
</style>
