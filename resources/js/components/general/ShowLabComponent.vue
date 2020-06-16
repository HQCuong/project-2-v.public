<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <mainselect @change_main_view="change_main_view"></mainselect>
                        <div v-if="show_main_view">
                            <!-- button -->
                            <mainbutton @change_current_view="change_current_view"></mainbutton>
                            <!-- show lab -->
                            <showlab v-if="current_view"></showlab>
                            <labcalendar v-if="!current_view"></labcalendar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mainselect from './showlabchild/SelectLabComponent.vue';
import mainbutton from './showlabchild/ButtonComponent.vue';
import showlab from './showlabchild/MapLabComponent.vue';
import labcalendar from './showlabchild/LabCalendarComponent.vue';

export default {
    components: {
        showlab,
        labcalendar,
        mainbutton,
        mainselect
    },
    data() {
        return {
            show_main_view: false,
            current_view: true,
        }
    },
    methods: {
        change_main_view(main_view) {
            if (main_view == 0) {
                this.show_main_view = false;
            } else {
                this.show_main_view = true;
            }
        },
        change_current_view() {
            this.current_view = !this.current_view;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
