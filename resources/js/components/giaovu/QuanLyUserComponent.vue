<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <maininfo></maininfo>
                        <br>
                        <listuser></listuser>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import maininfo from './userchild/MainInfoComponent.vue';
import listuser from './userchild/ListUserComponent.vue';

export default {
    mounted() {
        this.$store.commit('content/page_title', 'Quản lý người dùng');
    },
    components: {
        listuser,
        maininfo
    }
}

</script>
<style lang="css" scoped>
</style>
