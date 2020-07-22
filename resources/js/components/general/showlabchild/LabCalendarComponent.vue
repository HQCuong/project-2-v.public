n<template>
    <div>
        <hardware></hardware>
        <FullCalendar :opstions="calendar_options" />
    </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import hardware from "./hardwareinfo/HardWareInfoComponent.vue";

export default {
    computed: {
        events() {
            return this.$store.state.lab.lich_lab;
        }
    },
    data() {
        return {
            calendar_options: {
                textcolor: "white",
                plugins: [dayGridPlugin, listPlugin],
                eventTimeFormat: {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                },
                initialView: this.modi_calendar_view(),
                headersToolbar: {
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
                return "dayGridMonth, listMonth";
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
