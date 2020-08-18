<template>
    <div>
        <thongKe></thongKe>
        <FullCalendar :options="calendar_options" />
    </div>
</template>
<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import thongKe from "./thongke/ThongKe";

export default {
    created() {
        if (this.$store.state.user.is_giao_vien) {
            this.$store.dispatch("giao_vien/get_lich_giao_vien");
        }
    },
    data() {
        return {
            calendar_options: {
                plugins: [dayGridPlugin, listPlugin],
                eventTimeFormat: {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                },
                displayEventEnd: true,
                events: this.$store.getters["giao_vien/get_lich_giao_vien"],
                eventDisplay: "block",
                initialView: this.modi_calendar_view(),
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: this.modi_calendar_button(),
                },
            },
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
        },
    },
    computed: {
        events() {
            return this.$store.state.giao_vien.lich_giao_vien;
        },
    },
    components: {
        FullCalendar,
        thongKe,
    },
};
</script>
<style lang="css" scoped>
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/list/main.css";
</style>
