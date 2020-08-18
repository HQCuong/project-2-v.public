<template>
    <div>
        <label>Tòa</label>
        <multiselect
            v-model="toa"
            :options="arr_toa"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn tòa"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="false"
        ></multiselect>
        <br />
        <label>Tầng</label>
        <multiselect
            v-model="tang"
            :options="arr_tang"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn tầng"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="false"
        >
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br />
        <label>Lab</label>
        <multiselect
            v-model="lab"
            :options="arr_lab"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn phòng"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="false"
        >
            <template slot="noOptions">Chưa chọn tầng</template>
        </multiselect>
        <br />
    </div>
</template>
<script>
export default {
    created() {
        this.get_toa();
    },
    data() {
        return {
            toa: "",
            tang: "",
            lab: "",
            arr_toa: [],
            arr_tang: [],
            arr_lab: [],
        };
    },
    computed: {},
    methods: {
        get_toa() {
            this.arr_toa = ["A17"];
            if (this.arr_toa.length == 1) {
                this.toa = this.arr_toa[0];
            } else {
                this.toa = "";
            }
        },
    },
    watch: {
        ma_toa() {
            this.tang = "";
            this.lab = "";
            this.$emit("show_table_device", 0);
            if (!this.toa) {
                this.tang = [];
                this.$emit("show_table_device", 0);
                return false;
            }
            this.tang = ["tang 2", "tang 5"];
        },

        ma_tang() {
            this.lab = "";
            this.$emit("show_table_device", 0);
            if (!this.tang) {
                this.arr_lab = [];
                this.$emit("show_table_device", 0);
                return false;
            }
            this.arr_lab = ["lab 1", "lab 2", "lab 3"];
        },

        ma_lab() {
            if (!this.lab) {
                this.$emit("show_table_device", 0);
            } else if (this.toa && this.tang) {
                this.$emit("show_table_device", 1);
            } else {
                this.$emit("show_table_device", 0);
            }
        },
    },
};
</script>
<style lang="css" scoped>
</style>
