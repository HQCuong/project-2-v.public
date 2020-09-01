<template>
    <div>
        <selectLichBoSung @hide_table="hide_talbe" @show_table="show_talbe"></selectLichBoSung>
        <br />
        <tableLichBoSung v-if="show"></tableLichBoSung>
    </div>
</template>

<script>
import selectLichBoSung from "./select/SelectLichBoSung";
import tableLichBoSung from "./table/TableLichBoSung";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Xem lịch dạy bổ sung");
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        hide_talbe() {
            this.show = false;
        },
        show_talbe() {
            this.show = true;
        },
    },
    components: {
        selectLichBoSung,
        tableLichBoSung,
    },
};
</script>

<style>
</style>