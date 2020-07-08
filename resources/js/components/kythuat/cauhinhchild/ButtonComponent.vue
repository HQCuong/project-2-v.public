<template>
    <div>
        <router-link to="/quan_ly_cau_hinh/them_cau_hinh" class="btn btn-info" :class="{disabled:isAddCh}">Thêm cấu hình</router-link>
        <router-link to="/quan_ly_cau_hinh/modi_cau_hinh" class="btn btn-info" :class="{disabled:isModiCh}">Tùy chỉnh cấu hình</router-link>
        <router-link to="/quan_ly_cau_hinh/cau_hinh_mon" class="btn btn-info" :class="{disabled:isChMon}">Tùy chỉnh cấu hình - môn</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isAddCh: false,
            isModiCh: false,
            isChMon: false
        }
    },
    mounted() {
        if (this.$route.path == '/quan_ly_cau_hinh/them_cau_hinh') {
            this.isAddCh = true;
            this.isModiCh = false;
            this.isChMon = false;
        } else if (this.$route.path == '/quan_ly_cau_hinh/modi_cau_hinh') {
            this.isAddCh = false;
            this.isModiCh = true;
            this.isChMon = false;
        } else if (this.$route.path == '/quan_ly_cau_hinh/cau_hinh_mon') {
            this.isAddCh = false;
            this.isModiCh = false;
            this.isChMon = true;
        } else {
            this.isAddCh = false;
            this.isModiCh = false;
            this.isChMon = false;
        }
    },
    watch: {
        $route(to, from) {
            if (to.path == '/quan_ly_cau_hinh/them_cau_hinh') {
                this.isAddCh = true;
                this.isModiCh = false;
                this.isChMon = false;
            } else if (to.path == '/quan_ly_cau_hinh/modi_cau_hinh') {
                this.isAddCh = false;
                this.isModiCh = true;
                this.isChMon = false;
            } else if (to.path == '/quan_ly_cau_hinh/cau_hinh_mon') {
                this.isAddCh = false;
                this.isModiCh = false;
                this.isChMon = true;
            } else {
                this.isAddCh = false;
                this.isModiCh = false;
                this.isChMon = false;
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
