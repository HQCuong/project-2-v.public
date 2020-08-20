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
            :custom-label="toaLabel"
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
            :custom-label="tangLabel"
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
        this.$store.dispatch("toa/get_toa");
    },
    data() {
        return {
            toa: "",
            tang: "",
            lab: "",
            arr_lab: [],
        };
    },
    computed: {
        arr_toa() {
            return this.$store.state.toa.arr_toa;
        },
        arr_tang() {
            return this.$store.state.tang.arr_tang;
        },
    },
    methods: {
        toaLabel({ ten_toa, dia_chi }) {
            return `${ten_toa} - ${dia_chi}`;
        },
        tangLabel({ ten_tang }) {
            return `${ten_tang}`;
        },
    },
    watch: {
        toa() {
            this.tang = "";
            this.lab = "";
            this.$emit("show_table_device", 0);
            if (!this.toa) {
                this.$store.commit("tang/reset_arr_tang");
                this.$emit("show_table_device", 0);
                return false;
            }
            this.$store.dispatch("tang/get_tang", this.toa.ma_toa);
        },
        tang() {
            this.lab = "";
            this.$emit("show_table_device", 0);
            if (!this.tang) {
                this.arr_lab = [];
                this.$emit("show_table_device", 0);
                return false;
            }
            this.arr_lab = ["lab 1", "lab 2", "lab 3"];
        },
        lab() {
            if (!this.lab) {
                this.$emit("show_table_device", 0);
            } else if (this.toa && this.tang) {
                this.$emit("show_table_device", 1);
                this.$store.dispatch("lab/get_lich_lab");
            } else {
                this.$emit("show_table_device", 0);
            }
        },
        arr_toa() {
            if (this.arr_toa.length != 0) {
                this.toa = this.arr_toa[0];
            }
        },
    },
};
</script>
<style lang="css" scoped>
</style>
