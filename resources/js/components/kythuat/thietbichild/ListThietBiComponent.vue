<template>
    <div>
    	<selectlab @show_table_device="show_table_device"></selectlab>
    	<br>
        <tablethietbi v-if="show_table_tbi"></tablethietbi>
    </div>
</template>

<script>
import selectlab from './selectlab/SelectLabComponent.vue';
import tablethietbi from './tablethietbi/TableThietBiComponent.vue';

export default {
    mounted() {
        this.$store.commit('content/page_title', 'Danh sách thiết bị');
    },
    data() {
        return {
        	show_table_tbi: false
        }
    },
    methods: {
    	show_table_device(show) {
    		if (show == 0) {
    			this.show_table_tbi = false;
    		} else {
    			this.show_table_tbi = true;
    		}
    	}
    },
    components: {
        tablethietbi,
        selectlab
    }
}

</script>
<style lang="css" scoped>
</style>
