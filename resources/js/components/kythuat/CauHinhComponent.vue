<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton @change_main_view="change_main_view"></mainbutton>
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
        change_main_view(main_view) {
            if (main_view == 1) {
                this.view_add_ch = true;
                this.view_modi_ch = false;
                this.view_ch_mon = false;
            } else if (main_view == 2) {
                this.view_add_ch = false;
                this.view_modi_ch = true;
                this.view_ch_mon = false;
            } else {
                this.view_add_ch = false;
                this.view_modi_ch = false;
                this.view_ch_mon = true;
            }
        }
    },
    components: {
        mainbutton,
        maininfo
    }
}

</script>
