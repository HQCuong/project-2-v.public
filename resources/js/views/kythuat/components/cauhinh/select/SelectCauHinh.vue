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
                this.$store.dispatch(
                    "cau_hinh/get_thong_tin_cau_hinh",
                    this.cau_hinh.ma_cau_hinh
                );
            } else {
                this.$store.commit("cau_hinh/reset_thong_tin_cau_hinh");
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