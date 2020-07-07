<template>
    <div>
        <router-link to="/quan_ly_lab/add_dayoff" class="btn btn-info" :class="{disabled:isDayOff}">Thêm lịch nghỉ</router-link>
        <router-link to="/quan_ly_lab/add_work" class="btn btn-info" :class="{disabled:isAddWord}">Thêm lịch học</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isDayOff: false,
            isAddWord: false
        }
    },
    mounted() {
        if (this.$route.path == '/quan_ly_lab/add_dayoff') {
            this.isDayOff = true;
            this.isAddWord = false;
        } else if (this.$route.path == '/quan_ly_lab/add_work') {
            this.isAddWord = true;
            this.isDayOff = false;
        } else {
            this.isDayOff = false;
            this.isAddWord = false;
        }

        
    },
    watch: {
        $route(to, from) {
            if (to.path == '/quan_ly_lab/add_dayoff') {
                this.isDayOff = true;
                this.isAddWord = false;
            } else if (to.path == '/quan_ly_lab/add_work') {
                this.isAddWord = true;
                this.isDayOff = false;
            } else {
                this.isDayOff = false;
                this.isAddWord = false;
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
