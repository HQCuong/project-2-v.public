<template>
    <div>
        <selectLab @show_table_view="show_table_lab"></selectLab>
        <labTable v-if="table_lab"></labTable>
    </div>
</template>
<script>
import selectLab from "./select/SelectLab.vue";
import labTable from "./table/LabTable";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Danh sách phòng");
    },
    data() {
        return {
            table_lab: false,
        };
    },
    methods: {
        show_table_lab(map_lab) {
            var isShowMap = map_lab == 1;
            if (isShowMap) {
                this.table_lab = true;
            } else {
                this.table_lab = false;
            }
        },
    },
    components: {
        selectLab,
        labTable,
    },
};
</script>
<style lang="css" scoped>
</style>
