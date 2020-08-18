<template>
    <div>
        <p>Thêm lịch làm việc</p>
        <tableDeXuat></tableDeXuat>
    </div>
</template>

<script>
import tableDeXuat from "./table/TableDeXuatLichDay";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Thêm lịch làm việc");
    },
    components: {
        tableDeXuat,
    },
};
</script>

<style>
</style>