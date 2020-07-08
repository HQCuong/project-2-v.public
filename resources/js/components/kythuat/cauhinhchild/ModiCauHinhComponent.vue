<template>
    <div>
        <label>Chọn cấu hình</label>
        <multiselect v-model="cau_hinh" :options="arr_cau_hinh" :close-on-select="true" :show-labels="true" placeholder="Chọn cấu hình" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="true" :custom-label="labelCauHinh">
        </multiselect>
        <br>
        <br>
        <!-- form modi -->
        <formmodi v-if="show_form_modi"></formmodi>
    </div>
</template>
<script>
import formmodi from './modicauhinhchild/FormModiCauHinhComponent.vue';

export default {
    created() {
        this.$store.dispatch('cau_hinh/get_cau_hinh');
    },
    mounted() {
        this.$store.commit('content/page_title', 'Tùy chỉnh cấu hình');
    },
    data() {
        return {
            show_form_modi: false,
            cau_hinh: '',
        }
    },
    computed: {
        arr_cau_hinh() {
            return this.$store.state.cau_hinh.arr_cau_hinh;
        }
    },
    methods: {
        labelCauHinh({mo_ta}) {
            return `${mo_ta}`
        }
    },
    watch: {
        cau_hinh() {
            if (this.cau_hinh) {
                this.show_form_modi = true;
                this.$store.dispatch('mon/get_mon');
            } else {
                this.$store.commit('mon/reset_mon');
                this.show_form_modi = false;
            }
        }
    },
    components: {
        formmodi
    }
}

</script>
<style lang="css" scoped>
</style>
