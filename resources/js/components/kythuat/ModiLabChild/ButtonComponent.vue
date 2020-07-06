<template>
    <div>
        <router-link to="/quan_ly_lab/danh_sach_lab"><span class="btn btn-info" :class="{active:isListLab}">Danh sách lab</span></router-link>
        <router-link to="/quan_ly_lab/add_lab"><span class="btn btn-info" :class="{active:isAddLab}">Thêm lab</span></router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isListLab: false,
            isAddLab: false
        }
    },
    mounted() {
        if (this.$route.path == '/quan_ly_lab/danh_sach_lab') {
            this.isListLab = true;
            this.isAddLab = false;
        } else if (this.$route.path == '/quan_ly_lab/add_lab') {
            this.isAddLab = true;
            this.isListLab = false;
        } else {
            this.isListLab = false;
            this.isAddLab = false;
        }

        
    },
    watch: {
        $route(to, from) {
            if (to.path == '/quan_ly_lab/danh_sach_lab') {
                this.isListLab = true;
                this.isAddLab = false;
            } else if (to.path == '/quan_ly_lab/add_lab') {
                this.isAddLab = true;
                this.isListLab = false;
            } else {
                this.isListLab = false;
                this.isAddLab = false;
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
