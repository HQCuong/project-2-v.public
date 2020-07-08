<template>
    <div>
        <label>Chọn tòa</label>
        <multiselect v-model="toa" :options="arr_toa" :close-on-select="true" :show-labels="true" placeholder="Tòa" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false" :custom-label="toaLabel"></multiselect>
        <br>
        <label>Chọn tầng</label>
        <multiselect v-model="tang" :options="arr_tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false" :custom-label="tangLabel">
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
            toa: '',
            tang: ''
        }
    },
    computed: {
        arr_toa() {
            return this.$store.state.toa.arr_toa;
        },
        arr_tang() {
            return this.$store.state.tang.arr_tang;
        }
    },
    methods: {
        toaLabel({ten_toa, dia_chi}) {
            return `${ten_toa} - ${dia_chi}`;
        },
        tangLabel({ten_tang}) {
            return `${ten_tang}`;
        }
    },
    watch: {
        toa() {
            this.tang = "";
            if (!this.toa) {
                this.$store.commit('tang/reset_arr_tang');
                this.$emit('show_main_view', 0);
                return false;
            }
            this.$store.dispatch('tang/get_tang', this.toa.ma_toa);
        },

        tang() {
            if (!this.tang) {
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
