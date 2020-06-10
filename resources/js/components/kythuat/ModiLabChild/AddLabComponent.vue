<template>
    <div>
        <span>Chọn tòa</span>
        <multiselect v-model="value_toa" :options="toa" :close-on-select="true" :show-labels="false" placeholder="Tòa" open-direction="bottom"></multiselect>
        <br>
        <span>Chọn tầng</span>
        <multiselect v-model="value_tang" :options="tang" :close-on-select="true" :show-labels="false" placeholder="Tầng" open-direction="bottom">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <!-- form insert -->
        <mainform></mainform>
    </div>
</template>
<script>
import mainform from './formaddlab/FormAddLab.vue';

export default {
    created() {
        this.get_toa();
    },
    data() {
        return {
            value_tang: '',
            value_toa: '',
            toa: [],
            tang: [],
            lab: [],
        }
    },
    computed: {

    },
    methods: {
        change_current_view() {
            this.current_view = !this.current_view;
        },
        get_toa() {
            this.toa = ['A17'];
            if (this.toa.length == 1) {
                this.value_toa = this.toa[0];
            } else {
                this.value_toa = '';
            }
        }
    },
    watch: {
        value_toa() {
            this.value_tang = "";
            this.value_lab = "";
            this.show = false;
            // trong truong hop bo chon toa
            if (this.value_toa == "" || this.value_toa == null) {
                this.tang = [];
                this.show = false;
                return false;
            }
            // dung axios gui len lay so tang
            this.tang = ['tang 2', 'tang 5'];
        },

        value_tang() {
            this.value_lab = "";
            this.show = false;
            // trong truong hop bo chon tang 
            if (this.value_tang == "" || this.value_tang == null) {
                this.lab = [];
                this.show = false;
                return false
            }
            // dung axios gui len lay so lab
            this.lab = ['lab 1', 'lab 2', 'lab 3'];
        },

        value_lab() {
            // trong truong hop bo chon lab
            if (this.value_lab == "" || this.value_lab == null) {
                this.show = false;
            } else if (this.toa != "" || this.toa != null || this.tang != "" || this.tang != null) {
                this.show = true;
            }
        }
    },
    components: {
        mainform
    }
}

</script>
<style scoped>
</style>
