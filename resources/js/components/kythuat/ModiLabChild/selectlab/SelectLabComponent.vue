<template>
    <div>
        <label>Chọn tòa</label>
        <multiselect v-model="ma_toa" :options="arr_toa" :close-on-select="true" :show-labels="true" placeholder="Tòa" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false"></multiselect>
        <br>
        <label>Chọn tầng</label>
        <multiselect v-model="ma_tang" :options="arr_tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('toa/get_toa');
    },
    data() {
        return {
            ma_tang: '',
            arr_tang: [],
        }
    },
    computed: {
        ma_toa() {
            if(this.$store.state.arr_toa.length == 1) {
                return this.$store.state.arr_toa.length[0];
            } else {
                return '';
            }
        },
        arr_toa() {
            return this.$store.state.arr_toa;
        }
    },
    methods: {
        get_toa() {
            this.arr_toa = ['A17'];
            if (this.arr_toa.length == 1) {
                this.ma_toa = this.arr_toa[0];
            } else {
                this.ma_toa = '';
            }
        }
    },
    watch: {
        ma_toa() {
            this.ma_tang = "";
            if (!this.ma_toa) {
                this.arr_tang = [];
                this.$emit('show_main_view', 0);
                return false;
            }
            this.arr_tang = ['tang 2', 'tang 5'];
        },

        ma_tang() {
            if (!this.ma_tang) {
                this.$emit('show_main_view', 0);
                return false
            }
            this.$emit('show_main_view', 1);
        },
    }
}

</script>
<style lang="css" scoped>
</style>
