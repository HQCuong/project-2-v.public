<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <mainselect @show_main_view="show_main_view"></mainselect>
                        <div v-if="main_view">
                            <labcalendar></labcalendar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import mainselect from './showlabchild/SelectLabComponent.vue';
import labcalendar from './showlabchild/LabCalendarComponent.vue';

export default {
    data() {
        return {
            main_view: false
        }
    },
    methods: {
        show_main_view(main_view) {
            if (main_view == 0) {
                this.main_view = false;
            } else {
                this.main_view = true;
            }
        },
        change_current_view() {
            this.current_view = !this.current_view;
        }
    },
    components: {
        labcalendar,
        mainselect
    },
}

</script>
<style lang="css" scoped>
</style>
