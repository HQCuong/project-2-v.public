<template>
    <div>
        <selectCauHinh></selectCauHinh>
        <br />
        <br />
        <!-- form modi -->
        <formUpdate v-if="show_form_modi"></formUpdate>
    </div>
</template>
<script>
import selectCauHinh from "./select/SelectCauHinh";
import formUpdate from "./form/FormUpdateCauHinh";

export default {
    mounted() {
        this.$store.commit("content/page_title", "Tùy chỉnh cấu hình");
    },
    computed: {
        thong_tin_cau_hinh() {
            return this.$store.state.cau_hinh.thong_tin_cau_hinh;
        },
    },
    data() {
        return {
            show_form_modi: false,
        };
    },
    components: {
        formUpdate,
        selectCauHinh,
    },
    watch: {
        thong_tin_cau_hinh() {
            if (this.thong_tin_cau_hinh.data) {
                this.show_form_modi = true;
            } else {
                this.show_form_modi = false;
            }
        },
    },
};
</script>
<style lang="css" scoped>
</style>
