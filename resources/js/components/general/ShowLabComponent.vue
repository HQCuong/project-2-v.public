<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <maininfo></maininfo>
                        <mainselect @show_lab_info="show_lab_info"></mainselect>
                        <div v-if="show_lab_calendar">
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
import maininfo from './showlabchild/MainInfoComponent.vue';

export default {
    mounted() {
        this.$store.commit('content/page_title', 'Xem thông tin lab');  
    },
    data() {
        return {
            show_lab_calendar: false
        }
    },
    methods: {
        show_lab_info(show_lab_calendar) {
            if (show_lab_calendar == 0) {
                this.show_lab_calendar = false;
            } else {
                this.show_lab_calendar = true;
            }
        }
    },
    components: {
        labcalendar,
        mainselect,
        maininfo
    },
}

</script>
<style lang="css" scoped>
</style>
