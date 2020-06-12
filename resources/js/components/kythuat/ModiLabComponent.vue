<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton @change_current_view="change_current_view"></mainbutton>
                        <br>
                        <div v-if="current_view">
                            <span>Chọn tòa</span>
                            <multiselect v-model="value_toa" :options="toa" :close-on-select="true" :show-labels="true" placeholder="Tòa" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false"></multiselect>
                            <br>
                            <span>Chọn tầng</span>
                            <multiselect v-model="value_tang" :options="tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
                                <template slot="noOptions">Chưa chọn tòa</template>
                            </multiselect>
                            <br>
                            <span>Chọn lab</span>
                            <multiselect v-model="value_lab" :options="lab" :close-on-select="true" :show-labels="true" placeholder="Phòng" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
                                <template slot="noOptions">Chưa chọn tầng</template>
                            </multiselect>  
                            <br>
                            <!-- main view -->
                            <showmodilab v-if="show_main_view"></showmodilab>
                        </div> 
                        <keep-alive>
                            <addlab v-if="!current_view"></addlab>
                        </keep-alive>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import showmodilab from './ModiLabChild/ShowModiLabComponent.vue';
import addlab from './ModiLabChild/AddLabComponent.vue';
import mainbutton from './ModiLabChild/ButtonComponent.vue';

export default {
    created() {
        this.get_toa();
    },
    data() {
        return {
            show_main_view: false,
            current_view: true,
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
            this.show_main_view = false;
            // trong truong hop bo chon toa
            if (this.value_toa == "" || this.value_toa == null) {
                this.tang = [];
                this.show_main_view = false;
                return false;
            }
            // dung axios gui len lay so tang
            this.tang = ['tang 2', 'tang 5'];
        },

        value_tang() {
            this.value_lab = "";
            this.show_main_view = false;
            // trong truong hop bo chon tang 
            if (this.value_tang == "" || this.value_tang == null) {
                this.lab = [];
                this.show_main_view = false;
                return false
            }
            // dung axios gui len lay so lab
            this.lab = ['lab 1', 'lab 2', 'lab 3'];
        },

        value_lab() {
            // trong truong hop bo chon lab
            if (this.value_lab == "" || this.value_lab == null) {
                this.show_main_view = false;
            } else if (this.toa != "" || this.toa != null || this.tang != "" || this.tang != null) {
                this.show_main_view = true;
            }
        }
    },
    components: {
        showmodilab,
        addlab,
        mainbutton
    }
}

</script>

<style scoped>

</style>
