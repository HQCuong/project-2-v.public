<template>
    <div>
        <span>Chọn tòa</span>
        <multiselect v-model="value_toa" :options="toa" :close-on-select="true" :show-labels="false" placeholder="Tòa" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false"></multiselect>
        <br>
        <span>Chọn tầng</span>
        <multiselect v-model="value_tang" :options="tang" :close-on-select="true" :show-labels="false" placeholder="Tầng" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <span>Chọn lab</span>
        <multiselect v-model="value_lab" :options="lab" :close-on-select="true" :show-labels="false" placeholder="Phòng" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tầng</template>
        </multiselect>
        <br>
    </div>
</template>
<script>
export default {
    created() {
        // goi axios lay so toa
        this.get_toa();
    },
    data() {
        return {
            value_tang: '',
            value_lab: '',
            value_toa: '',
            toa: [],
            tang: [],
            lab: [],
        }
    },
    computed: {

    },
    methods: {
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
            this.$emit('change_main_view', 0);
            // trong truong hop bo chon toa
            if (this.value_toa == "" || this.value_toa == null) {
                this.tang = [];
                this.$emit('change_main_view', 0);
                return false;
            }
            // dung axios gui len lay so tang
            this.tang = ['tang 2', 'tang 5'];
        },

        value_tang() {
            this.value_lab = "";
            this.$emit('change_main_view', 0);
            // trong truong hop bo chon tang 
            if (this.value_tang == "" || this.value_tang == null) {
                this.lab = [];
                this.$emit('change_main_view', 0);
                return false
            }
            // dung axios gui len lay so lab
            this.lab = ['lab 1', 'lab 2', 'lab 3'];
        },

        value_lab() {
            // trong truong hop bo chon lab
            if (this.value_lab == "" || this.value_lab == null) {
                this.$emit('change_main_view', 0);
            } else if (this.toa != "" || this.toa != null || this.tang != "" || this.tang != null) {
                this.$emit('change_main_view', 1);
            }
        }

    }
}

</script>
<style lang="css" scoped>
</style>
