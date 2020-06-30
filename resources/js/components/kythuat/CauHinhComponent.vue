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
import mainbutton from './cauhinhchild/ButtonComponent.vue';
import maininfo from './CauhinhChild/MainInfoComponent.vue';

export default {
    data() {
        return {
            view_add_ch: true,
            view_modi_ch: false,
            view_ch_mon: false
        }
    },
    methods: {

    },
    components: {
        mainbutton,
        maininfo
    }
}

</script>
