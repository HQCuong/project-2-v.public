<template>
    <div>
        <label>Chọn cấu hình</label>
        <multiselect v-model="ma_ch" :options="arr_ch" :close-on-select="true" :show-labels="true" placeholder="Chọn môn" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true"></multiselect>
        <br>
        <label>Những môn có thể học</label>
        <multiselect v-model="arr_ma_mon" :options="arr_mon" :close-on-select="true" :show-labels="true" placeholder="Những môn học phù hợp" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false" :multiple="true"></multiselect>
        <br>
        <button class="btn btn-info">submit</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
        	arr_ch: ['ch1', 'ch2', 'ch3'],
        	ma_ch: '',
            arr_mon: [],
        	arr_ma_mon: '',
        }
    },
    watch: {
        ma_ch() {
            if(!this.ma_ch) {
                this.arr_mon = [];
            } else {
                this.arr_mon = ['mon1', 'mon2', 'mon3'];
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
