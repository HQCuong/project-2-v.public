<template>
    <div>
        <hardware></hardware>
        <FullCalendar :options="calendar_options" />
    </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import hardware from "./hardwareinfo/HardWareInfoComponent.vue";

export default {
    data() {
        return {
            calendar_options: {
                plugins: [dayGridPlugin, listPlugin],
                eventTimeFormat: {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                },
                displayEventEnd: true,
                events: this.$store.getters["lab/get_lich_lab"],
                eventDisplay: "block",
                initialView: this.modi_calendar_view(),
                initialView: "dayGridMonth",
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: this.modi_calendar_button()
                }
            }
        };
    },
    methods: {
        modi_calendar_button() {
            if ($(window).width() < 770) {
                return "listWeek";
            } else {
                return "dayGridMonth,listMonth";
            }
        },
        modi_calendar_view() {
            if ($(window).width() < 770) {
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
};
</script>
<style lang="css" scoped>
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/list/main.css";
</style>
