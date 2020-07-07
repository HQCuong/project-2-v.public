<template>
    <div>
    	<span>Chọn giáo viên</span>
        <multiselect v-model="ma_giao_vien" :options="giao_vien" :close-on-select="true" :show-labels="true" placeholder="Chọn giáo viên" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true"></multiselect>
    </div>
</template>
<script>
export default {
    data() {
        return {
        	ma_giao_vien: '',
        	giao_vien: [
        		'giao vien 1',
        		'giao vien 2',
        		'giao vien 3',
        		'giao vien 4'
        	]
        }
    }
}

</script>
<style lang="css" scoped>
</style>
