<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Xem lich</div>
                    <div class="card-body">
                        <selectgv></selectgv>
                        <br>
                        <br>
                        <lichgv></lichgv>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import selectgv from './lichgiaovienchild/SelectGiaoVienComponent.vue';
import lichgv from './lichgiaovienchild/LichGiaoVienComponent.vue';
export default {

    data() {
        return {

        }
    },
    components: {
        lichgv,
        selectgv
    }
}

</script>
<style lang="css" scoped>
</style>
