<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton @change_current_view="change_current_view"></mainbutton>
                        <br>
                        <!-- main view -->
                        <showmodilab v-if="current_view"></showmodilab>
                        <addlab v-if="!current_view"></addlab>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import showmodilab from './modilabchild/ShowModiLabComponent.vue';
import addlab from './modilabchild/AddLabComponent.vue';
import mainbutton from './modilabchild/ButtonComponent.vue';

export default {
    data() {
        return {
            current_view: true
        }
    },
    methods: {
        change_current_view(map_lab) {
            this.current_view = !this.current_view;
        }
    },
    components: {
        showmodilab,
        addlab,
        mainbutton
    }
}

</script>
<style scoped>
</style>
