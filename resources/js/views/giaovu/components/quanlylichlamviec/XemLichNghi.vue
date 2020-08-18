<template>
    <div>danh sach ngay nghi</div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit("content/page_title", "Xem lịch nghỉ");
    },
};
</script>

<style>
</style>