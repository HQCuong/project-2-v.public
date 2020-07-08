<template>
    <div>
        <div v-if="!is_giao_vien">
            <span>Giáo viên</span>
            <multiselect v-model="giao_vien" :options="arr_giao_vien" :close-on-select="true" :show-labels="true" placeholder="Chọn giáo viên" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true"></multiselect>
        </div>
        <br>
        <div>
            <span>Chọn lớp</span>
            <multiselect v-model="lop" :options="arr_lop" :close-on-select="true" :show-labels="true" placeholder="Chọn lớp" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true">
                <template v-if="!is_giao_vien" slot="noOptions">Chưa chọn giáo viên</template>
            </multiselect>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            giao_vien: '',
            lop: '',
            arr_giao_vien: [
                'giao vien 1',
                'giao vien 2',
                'giao vien 3',
                'giao vien 4'
            ],
            arr_lop: []
        }
    },
    computed: {
        is_giao_vien() {
            return this.$store.state.user.is_giao_vien;
        }
    },
    watch: {
        giao_vien() {
            this.lop = '';
            if (!this.giao_vien) {
                 this.$emit('show_calendar', 0);
                this.arr_lop = [];
                return false;
            }
            this.$emit('show_calendar', 1);
            this.$store.dispatch('giao_vien/get_lich_giao_vien');
            this.arr_lop = ['BKD', 'BIT'];
        },
        lop() {
            if (!this.lop) {
                this.$emit('show_main_info', 0);
                return false;
            }
            this.$emit('show_main_info', 1);
        }
    }
}

</script>
<style lang="css" scoped>
</style>
