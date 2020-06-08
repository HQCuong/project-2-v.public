<template>
    <div>
        <button :disabled="is_modi" class="btn btn-info" @click="change_current_view">Tùy chỉnh lab</button>
        <button :disabled="is_add" class="btn btn-info" @click="change_current_view">Thêm lab</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_modi: true,
            is_add: false
        }
    },
    methods: {
    	change_current_view() {
    		this.$emit('change_current_view');
    		this.is_modi = !this.is_modi;
    		this.is_add = !this.is_add;
    	}
    }
}

</script>
<style lang="css" scoped>
</style>
