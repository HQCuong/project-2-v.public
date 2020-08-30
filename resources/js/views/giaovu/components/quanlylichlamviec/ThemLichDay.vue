<template>
    <div>
        <formThemLichDay></formThemLichDay>
        <br />
        <tableDeXuat></tableDeXuat>
    </div>
</template>

<script>
import formThemLichDay from "./form/FormThemLichDay";
import tableDeXuat from "./table/TableDeXuatLichDay";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Thêm lịch làm việc");
    },
    components: {
        formThemLichDay,
        tableDeXuat,
    },
};
</script>

<style>
</style>