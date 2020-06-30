<template>
    <div>
        <label>Chọn cấu hình</label>
        <multiselect v-model="ma_ch" :options="arr_cau_hinh" :close-on-select="true" :show-labels="true" placeholder="Chọn cấu hình" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true"></multiselect>
        <br>
        <!-- form modi -->
		<formmodi v-if="show_form_modi"></formmodi>
    </div>
</template>

<script>
import formmodi from './modicauhinhchild/FormModiCauHinhComponent.vue';

export default {
    data() {
        return {
        	show_form_modi: false,
        	ma_ch: '',
        	arr_cau_hinh: [
        		'cau hinh 1',
        		'cau hinh 2',
        		'cau hinh 3',
        	]
        }
    },
    watch: {
    	ma_ch() {
    		if(this.ma_ch) {
    			this.show_form_modi = true;
    		} else {
    			this.show_form_modi = false;
    		}
    	}
    },
    components: {
    	formmodi
    }
}

</script>
<style lang="css" scoped>
</style>
