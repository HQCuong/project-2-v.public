<template>
    <div>
        <label>Cấu hình</label>
        <multiselect
            v-model="cau_hinh"
            :options="arr_cau_hinh"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn cấu hình"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="true"
            :custom-label="labelCauHinh"
        ></multiselect>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("cau_hinh/get_cau_hinh");
    },
    computed: {
        arr_cau_hinh() {
            return this.$store.state.cau_hinh.arr_cau_hinh;
        },
    },
    data() {
        return {
            cau_hinh: "",
        };
    },
    watch: {
        cau_hinh() {
            if (this.cau_hinh) {
                this.$emit("show_form", 1);
                this.$store.dispatch("mon/get_mon");
            } else {
                this.$emit("show_form", 0);
                this.$store.commit("mon/reset_mon");
                this.show_form_modi = false;
            }
        },
    },
    methods: {
        labelCauHinh({ mo_ta }) {
            return `${mo_ta}`;
        },
    },
};
</script>

<style>
</style>