<template>
    <FullCalendar
        defaultView="dayGridMonth"
        :header="headers"
        :plugins="calendarPlugins"
        :events="events"
        :displayEventEnd="true"
        :eventTimeFormat="eventTimeFormat"
    />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

export default {
    data() {
        return {
            calendarPlugins: [dayGridPlugin, listPlugin],
            eventTimeFormat: {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            },
            eventLimit: true,
            headers: {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth, listMonth"
            }
        };
    },
    computed: {
        events() {
            return this.$store.state.giao_vien.lich_gv;
        }
    },
    components: {
        FullCalendar
    }
};
</script>
<style lang="css" scoped>
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/list/main.css";

.title-font {
    font-size: 50px;
}
</style>
