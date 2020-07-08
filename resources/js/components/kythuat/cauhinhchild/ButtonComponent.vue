<template>
    <div>
        <router-link to="/quan_ly_cau_hinh/list_cau_hinh" class="btn btn-info" :class="{disabled:isListCh}">Danh sách cấu hình</router-link>
        <router-link to="/quan_ly_cau_hinh/them_cau_hinh" class="btn btn-info" :class="{disabled:isAddCh}">Thêm cấu hình</router-link>
        <router-link to="/quan_ly_cau_hinh/modi_cau_hinh" class="btn btn-info" :class="{disabled:isModiCh}">Tùy chỉnh cấu hình</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isListCh: false,
            isAddCh: false,
            isModiCh: false
        }
    },
    mounted() {
        if (this.$route.path == '/quan_ly_cau_hinh/list_cau_hinh') {
            this.isListCh = true;
            this.isAddCh = false;
            this.isModiCh = false;
        } else if (this.$route.path == '/quan_ly_cau_hinh/them_cau_hinh') {
            this.isListCh = false;
            this.isAddCh = true;
            this.isModiCh = false;
        } else if (this.$route.path == '/quan_ly_cau_hinh/modi_cau_hinh') {
            this.isListCh = false;
            this.isAddCh = false;
            this.isModiCh = true;
        } else {
            this.isListCh = false;
            this.isAddCh = false;
            this.isModiCh = false;
        }
    },
    watch: {
        $route(to, from) {
            if (to.path == '/quan_ly_cau_hinh/list_cau_hinh') {
                this.isListCh = true;
                this.isAddCh = false;
                this.isModiCh = false;
            } else if (to.path == '/quan_ly_cau_hinh/them_cau_hinh') {
                this.isListCh = false;
                this.isAddCh = true;
                this.isModiCh = false;
            } else if (to.path == '/quan_ly_cau_hinh/modi_cau_hinh') {
                this.isListCh = false;
                this.isAddCh = false;
                this.isModiCh = true;
            } else {
                this.isListCh = false;
                this.isAddCh = false;
                this.isModiCh = false;
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
