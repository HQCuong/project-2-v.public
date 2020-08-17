<template>
    <div>
        <p>Thêm lịch làm việc</p>
        <maintable></maintable>
    </div>
</template>

<script>
import maintable from "./addworkchild/AddWorkTableComponent";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Thêm lịch làm việc");
    },
    components: {
        maintable,
    },
};
</script>

<style>
</style>