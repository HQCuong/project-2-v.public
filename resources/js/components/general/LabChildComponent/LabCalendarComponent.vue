<template>
    <div>
        <FullCalendar :defaultView="defaultView" :header="headers" :plugins="calendarPlugins" :events="events" :displayEventEnd="true" :eventTimeFormat="eventTimeFormat" />
    </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

export default {
    created() {
        this.$store.dispatch('general/get_lich_lab');
    },
    computed: {
        events() {
            return this.$store.state.general.events;
        }
    },
    data() {
        return {
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
        FullCalendar
    }
}

</script>
<style lang="css" scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/list/main.css';

</style>
