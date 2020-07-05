<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton></mainbutton>
                        <br>
                        <maininfo></maininfo>
                        <br>
                        <!-- main view -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mainbutton from './thietbichild/ButtonComponent.vue';
import maininfo from './thietbichild/MainInfoComponent.vue';

export default {
    data() {
        return {

        }
    },
    components: {
    	mainbutton,
    	maininfo
    }
}

</script>
<style lang="css" scoped>
</style>
