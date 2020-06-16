<template>
    <div>
        <span>Chọn tòa</span>
        <multiselect v-model="value_toa" :options="toa" :close-on-select="true" :show-labels="true" placeholder="Tòa" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false"></multiselect>
        <br>
        <span>Chọn tầng</span>
        <multiselect v-model="value_tang" :options="tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <span>Chọn lab</span>
        <multiselect v-model="value_lab" :options="lab" :close-on-select="true" :show-labels="true" placeholder="Phòng" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tầng</template>
        </multiselect>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
<style lang="css" scoped>
</style>
