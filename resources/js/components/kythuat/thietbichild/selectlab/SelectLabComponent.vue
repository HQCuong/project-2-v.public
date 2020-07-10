<template>
    <div>
        <label>Tòa</label>
        <multiselect v-model="ma_toa" :options="arr_toa" :close-on-select="true" :show-labels="true" placeholder="Tòa" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false"></multiselect>
        <br>
        <label>Tầng</label>
        <multiselect v-model="ma_tang" :options="arr_tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <label>Lab</label>
        <multiselect v-model="ma_lab" :options="arr_lab" :close-on-select="true" :show-labels="true" placeholder="Phòng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tầng</template>
        </multiselect>
        <br>
    </div>
</template>
<script>
export default {
    created() {
        this.get_toa();
    },
    data() {
        return {
            ma_toa: '',
            ma_tang: '',
            ma_lab: '',
            arr_toa: [],
            arr_tang: [],
            arr_lab: [],
        }
    },
    computed: {

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
            this.ma_lab = "";
            this.$emit('show_table_device', 0);
            if (!this.ma_toa) {
                this.arr_tang = [];
                this.$emit('show_table_device', 0);
                return false;
            }
            this.arr_tang = ['tang 2', 'tang 5'];
        },

        ma_tang() {
            this.ma_lab = "";
            this.$emit('show_table_device', 0);
            if (!this.ma_tang) {
                this.arr_lab = [];
                this.$emit('show_table_device', 0);
                return false
            }
            this.arr_lab = ['lab 1', 'lab 2', 'lab 3'];
        },

        ma_lab() {
            if (!this.ma_lab) {
                this.$emit('show_table_device', 0);
            } else if (this.ma_toa && this.ma_tang) {
                this.$emit('show_table_device', 1);
            } else {
                this.$emit('show_table_device', 0);
            }
        }

    }
}

</script>
<style lang="css" scoped>
</style>
