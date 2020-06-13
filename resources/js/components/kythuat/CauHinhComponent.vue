<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton @change_current_view="change_current_view"></mainbutton>
                        <br>
                        <br>
                        <!-- main view -->
                        <addcauhinh v-if="view_add_ch"></addcauhinh>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mainbutton from './CauhinhChild/ButtonComponent.vue';
import addcauhinh from './CauhinhChild/AddCauHinhComponent.vue';

export default {
    data() {
        return {
            view_add_ch: true,
            view_modi_ch: false,
            view_ch_mon: false
        }
    },
    methods: {
        change_current_view(e) {
            console.log(e);
        }
    },
    components: {
        mainbutton,
        addcauhinh
    }
}

</script>
