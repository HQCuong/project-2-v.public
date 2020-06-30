<template>
    <div>
        <router-link to="/quan_ly_cau_hinh/them_cau_hinh"><span class="btn btn-info" :class="{active:isAddCh}">Thêm cấu hình</span></router-link>
        <router-link to="/quan_ly_cau_hinh/modi_cau_hinh"><span class="btn btn-info" :class="{active:isModiCh}">Tùy chỉnh cấu hình</span></router-link>
        <router-link to="/quan_ly_cau_hinh/cau_hinh_mon"><span class="btn btn-info" :class="{active:isChMon}">Tùy chỉnh cấu hình - môn</span></router-link>
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
        if (this.$router.history.current.path == '/quan_ly_cau_hinh/them_cau_hinh') {
            this.isAddCh = true;
            this.isModiCh = false;
            this.isChMon = false;
        } else if (this.$router.history.current.path == '/quan_ly_cau_hinh/modi_cau_hinh') {
            this.isAddCh = false;
            this.isModiCh = true;
            this.isChMon = false;
        } else if (this.$router.history.current.path == '/quan_ly_cau_hinh/cau_hinh_mon') {
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
