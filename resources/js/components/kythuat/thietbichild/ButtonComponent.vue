<template>
    <div>
        <router-link to="/quan_ly_thiet_bi/danh_sach_thiet_bi"><span class="btn btn-info" :class="{active:isListTools}">Danh sách thiết bị</span></router-link>
        <router-link to="/quan_ly_thiet_bi/add_thiet_bi"><span class="btn btn-info" :class="{active:isAddTools}">Thêm thiết bị</span></router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isListTools: false,
            isAddTools: false
        }
    },
    mounted() {
        if (this.$route.path == '/quan_ly_thiet_bi/danh_sach_thiet_bi') {
            this.isListTools = true;
            this.isAddTools = false;
        } else if (this.$route.path == '/quan_ly_thiet_bi/add_thiet_bi') {
            this.isAddTools = true;
            this.isListTools = false;
        } else {
            this.isListTools = false;
            this.isAddTools = false;
        }
    },
    watch: {
        $route(to, from) {
            if (to.path == '/quan_ly_thiet_bi/danh_sach_thiet_bi') {
                this.isListTools = true;
                this.isAddTools = false;
            } else if (to.path == '/quan_ly_thiet_bi/add_thiet_bi') {
                this.isAddTools = true;
                this.isListTools = false;
            } else {
                this.isListTools = false;
                this.isAddTools = false;
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
