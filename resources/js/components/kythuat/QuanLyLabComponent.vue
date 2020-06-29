<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton></mainbutton>
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
import mainbutton from './modilabchild/ButtonComponent.vue';

export default {
    data() {
        return {
            current_view: true
        }
    },
    components: {
        mainbutton
    }
}

</script>
<style scoped>
</style>
