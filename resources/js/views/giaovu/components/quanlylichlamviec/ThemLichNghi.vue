<template>
    <div>
        <p>Thêm lịch nghỉ</p>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.commit("content/page_title", "Thêm lịch nghỉ");
    },
};
</script>

<style>
</style>