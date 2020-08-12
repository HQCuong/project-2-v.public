<template>
    <div>
        <selectCauHinh @show_form="show_form"></selectCauHinh>
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
    data() {
        return {
            show_form_modi: false,
        };
    },
    components: {
        formUpdate,
        selectCauHinh,
    },
    methods: {
        show_form(show) {
            if (show == 1) {
                this.show_form_modi = 1;
            } else {
                this.show_form_modi = 0;
            }
        },
    },
};
</script>
<style lang="css" scoped>
</style>
