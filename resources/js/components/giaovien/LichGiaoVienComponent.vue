<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Xem lich</div>
                    <div class="card-body">
                        <FullCalendar defaultView="dayGridMonth" :header="headers" :plugins="calendarPlugins" :events="events" :displayEventEnd="true" :eventTimeFormat="eventTimeFormat"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';

export default {
    created() {
        this.$store.dispatch('giaovien/get_lich_gv');
    },
    data() {
        return {
            // Setup fullcalendar
            calendarPlugins: [dayGridPlugin, listPlugin],
            eventTimeFormat: {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            },
            eventLimit: true,
            headers: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth, listMonth'
            },
        }
    },
    computed: {
        events() {
            return this.$store.state.lich_gv;
        }
    },
    components: {
        FullCalendar // make the <FullCalendar> tag available
    }
}

</script>
<style lang="css" scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/list/main.css';

.title-font {
    font-size: 50px;
}
</style>
