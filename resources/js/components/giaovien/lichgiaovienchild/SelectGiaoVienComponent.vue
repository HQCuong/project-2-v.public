<template>
    <div>
        <div v-if="!is_giao_vien">
            <span>Giáo viên</span>
            <multiselect v-model="giao_vien" :options="arr_user" :close-on-select="true" :show-labels="true" placeholder="Chọn giáo viên" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true" :custom-label="labelGiaoVien"></multiselect>
        </div>
        <br>
        <div>
            <span>Lớp</span>
            <multiselect v-model="lop" :options="arr_lop" :close-on-select="true" :show-labels="true" placeholder="Chọn lớp" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true">
                <template v-if="!is_giao_vien" slot="noOptions">Chưa chọn giáo viên</template>
            </multiselect>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        if (this.$store.state.user.is_giao_vien) {
            this.arr_lop = ['BKD', 'BIT'];
        }

        if (!this.$store.state.user.is_giao_vien) {
            this.$store.dispatch('user/get_user');
        }
    },
    data() {
        return {
            giao_vien: '',
            lop: '',
            arr_lop: []
        }
    },
    computed: {
        is_giao_vien() {
            return this.$store.state.user.is_giao_vien;
        },
        arr_user() {
            return this.$store.state.user.arr_user;
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
            this.$store.dispatch('giao_vien/get_lich_giao_vien');
            this.$emit('show_calendar', 1);
            this.arr_lop = ['BKD', 'BIT'];
        },
        lop() {
            if (!this.lop) {
                this.$emit('show_main_info', 0);
                return false;
            }
            this.$emit('show_main_info', 1);
        }
    },
    methods: {
        labelGiaoVien({ ho_ten, email }) {
            if (!ho_ten) {
                return `demo user-${email}`;
            }
            return `${ho_ten}-${email}`;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
