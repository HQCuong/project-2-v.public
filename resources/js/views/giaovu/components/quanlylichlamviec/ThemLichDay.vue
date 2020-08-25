<template>
    <div>
        <formThemLichDay></formThemLichDay>
        <tableDeXuat></tableDeXuat>
    </div>
</template>

<script>
import formThemLichDay from "./form/FormThemLichDay";
import tableDeXuat from "./table/TableDeXuatLichDay";

export default {
    created() {
        this.$store.dispatch("phan_cong/get_phan_cong");
    },
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