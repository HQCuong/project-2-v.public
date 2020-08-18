<template>
    <div>
        <selectLab @show_table_device="show_table_device"></selectLab>
        <br />
        <tablethietbi v-if="show_table_tbi"></tablethietbi>
    </div>
</template>

<script>
import selectLab from "./select/SelectThietBi.vue";
import tablethietbi from "./table/TableThietBi.vue";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Danh sách thiết bị");
    },
    data() {
        return {
            show_table_tbi: false,
        };
    },
    methods: {
        show_table_device(show) {
            if (show == 0) {
                this.show_table_tbi = false;
            } else {
                this.show_table_tbi = true;
            }
        },
    },
    components: {
        tablethietbi,
        selectLab,
    },
};
</script>
<style lang="css" scoped>
</style>
