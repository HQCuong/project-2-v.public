<template>
    <div>
        <selectlab @show_table_lab="show_table_lab"></selectlab>
        <tablelab v-if="table_lab"></tablelab>
    </div>
</template>
<script>
import selectlab from './selectlab/SelectLabComponent.vue';
import tablelab from './tablelab/TableLabComponent.vue';

export default {
    mounted() {
        this.$store.commit('content/page_title', 'Danh sách phòng')
    },
    data() {
        return {
            table_lab: false
        }
    },
    methods: {
        show_table_lab(map_lab) {
            var isShowMap = map_lab == 1;
            if(isShowMap) {
                this.table_lab = true;
            } else {
                this.table_lab = false;
            }
        }
    },
    components: {
        selectlab,
        tablelab
    }
}

</script>
<style lang="css" scoped>
</style>
