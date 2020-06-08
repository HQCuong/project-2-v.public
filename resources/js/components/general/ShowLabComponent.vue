<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <span>Chọn tòa</span>
                        <multiselect v-model="value_toa" :options="toa" :close-on-select="true" :show-labels="false" placeholder="Tòa" open-direction="bottom"></multiselect>
                        <br>
                        <span>Chọn tầng</span>
                        <multiselect v-model="value_tang" :options="tang" :close-on-select="true" :show-labels="false" placeholder="Tầng" open-direction="bottom">
                            <template slot="noOptions">Chưa chọn tòa</template>
                        </multiselect>
                        <br>
                        <span>Chọn lab</span>
                        <multiselect v-model="value_lab" :options="lab" :close-on-select="true" :show-labels="false" placeholder="Phòng" open-direction="bottom">
                            <template slot="noOptions">Chưa chọn tầng</template>
                        </multiselect>
                        <br>
                        <div v-if="show">
                            <!-- button -->
                            <mainbutton @change_current_view="change_current_view"></mainbutton>
                            <!-- hard ware -->
                            <hardware></hardware>
                            <!-- show lab -->
                            <keep-alive>
                                <showlab v-if="current_view"></showlab>
                            </keep-alive>
                            <labcalendar v-if="!current_view"></labcalendar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import showlab from './LabChildComponent/DisplayLabComponent.vue';
import labcalendar from './LabChildComponent/LabCalendarComponent.vue';
import mainbutton from './LabChildComponent/ButtonComponent.vue';
import hardware from './LabChildComponent/HardWareInfoComponent.vue';

export default {
    components: {
        showlab,
        labcalendar,
        mainbutton,
        hardware
    },

    created() {
        this.get_toa();
    },
    data() {
        return {
            show: false,
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

    }
}

</script>
<style lang="css" scoped>
</style>
