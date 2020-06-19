<template>
    <div>
        <button class="btn btn-info" :disabled="is_add_ch" @click="change_current_view('add_ch')">Thêm cấu hình</button>
        <button class="btn btn-info" :disabled="is_modi_ch" @click="change_current_view('modi_ch')">Tùy chỉnh cấu hình</button>
        <button class="btn btn-info" :disabled="is_ch_mon" @click="change_current_view('ch_mon')">Tùy chỉnh cấu hình - môn</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            is_add_ch: true,
            is_modi_ch: false,
            is_ch_mon: false
        }
    },
    methods: {
        change_current_view(btn) {
        	this.$emit('change_current_view', btn);
            if (btn == 'add_ch') {
                this.$emit('change_main_view', 1);
                this.is_add_ch = true;
                this.is_modi_ch = false;
                this.is_ch_mon = false;
            } else if (btn == 'modi_ch') {
                this.$emit('change_main_view', 2);
                this.is_add_ch = false;
                this.is_modi_ch = true;
                this.is_ch_mon = false;
            } else {
                this.$emit('change_main_view', 3);
                this.is_add_ch = false;
                this.is_modi_ch = false;
                this.is_ch_mon = true;
            }
        }
    }
}

</script>
<style lang="css" scoped>
</style>
