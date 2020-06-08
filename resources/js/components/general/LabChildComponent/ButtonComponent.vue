<template>
    <div>
        <button class="btn btn-info" :disabled="is_map" @click="change_current_view">Xem sơ đồ</button>
        <button class="btn btn-info" :disabled="is_calendar" @click="change_current_view">Xem lịch hoạt động</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_map: true,
            is_calendar: false
        }
    },
    methods: {
        change_current_view() {
            this.$emit('change_current_view');
            this.is_map = !this.is_map;
            this.is_calendar = !this.is_calendar;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
