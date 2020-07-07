<template>
    <div>
        <hardware></hardware>
        <FullCalendar :defaultView="defaultView" :header="headers" :plugins="calendarPlugins" :events="events" :displayEventEnd="true" :eventTimeFormat="eventTimeFormat" :textColor="textcolor"/>
    </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import hardware from './hardwareinfo/HardWareInfoComponent.vue';

export default {
    created() {
        this.$store.dispatch('lab/get_lich_lab');
    },
    computed: {
        events() {
            return this.$store.state.lab.events;
        }
    },
    data() {
        return {
            textcolor: "white",
            calendarPlugins: [dayGridPlugin, listPlugin],
            eventTimeFormat: {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            },
            defaultView: this.modi_calendar_view(),
            eventLimit: true,
            headers: {
                left: 'prev,next today',
                center: 'title',
                right: this.modi_calendar_button()
            },
        }
    },
    methods: {
        modi_calendar_button() {
            if ($(window).width() < 960) {
                return 'listWeek';
            } else {
                return 'dayGridMonth, listMonth'
            }
        },
        modi_calendar_view() {
            if ($(window).width() < 960) {
                return "listWeek";
            } else {
                return "dayGridMonth";
            }
        }
    },
    components: {
        FullCalendar,
        hardware
    }
}

</script>
<style lang="css" scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/list/main.css';

</style>
