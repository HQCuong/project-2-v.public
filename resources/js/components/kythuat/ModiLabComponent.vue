<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <!-- button -->
                        <mainbutton @change_current_view="change_current_view"></mainbutton>
                        <br>
                        <!-- main view -->
                        <showmodilab v-if="current_view"></showmodilab>
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
import showmodilab from './modilabchild/ShowModiLabComponent.vue';
import addlab from './modilabchild/AddLabComponent.vue';
import mainbutton from './modilabchild/ButtonComponent.vue';

export default {
    created() {
        this.get_toa();
    },
    data() {
        return {
            show_map_lab: false,
            current_view: true,
            value_tang: '',
            value_lab: '',
            value_toa: '',
            toa: [],
            tang: [],
            lab: [],
        }
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
