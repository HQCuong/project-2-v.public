<template>
    <div>
        <label>Tòa</label>
        <multiselect v-model="toa" :options="arr_toa" :close-on-select="true" :show-labels="true" placeholder="Tòa" :custom-label="labelToa" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false"></multiselect>
        <br>
        <label>Tầng</label>
        <multiselect v-model="tang" :options="arr_tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false" :custom-label="labelTang">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <br>
        <div class="form-group">
            <label for="insertName">Tên phòng</label>
            <input type="text" class="form-control" id="insertName" placeholder="Nhập tên phòng" v-model="ten_lab">
        </div>
        <br>
        <div class="form-group">
            <label for="insertSeats">Số chỗ ngồi</label>
            <input type="number" class="form-control" id="insertSeats" placeholder="Nhập số chõ ngồi" v-model="so_cho_ngoi">
        </div>
        <br>
        <div class="form-group">
            <label for="insertCpts">Số máy</label>
            <input type="number" class="form-control" id="insertCpts" placeholder="Nhập số máy" v-model="so_may">
        </div>
        <br>
        <label>Cấu hình</label>
        <multiselect v-model="cau_hinh" :options="arr_cau_hinh" :close-on-select="true" :show-labels="true" placeholder="Chọn cấu hình" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false" :custom-label="labelCauHinh">
        </multiselect>
        <br>
        <br>
        <button type="submit" class="btn btn-info">Submit</button>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('toa/get_toa');
        this.$store.dispatch('cau_hinh/get_cau_hinh');
    },
    mounted() {
        // change label color
        $(".form-group").addClass("bmd-form-group");
        $("label").addClass("bmd-label-static");
        $(".form-group").on("click", function() {
            $(".form-group").removeClass("is-focused");
            $(this).addClass("is-focused");
        });

        // remove color while move out input
        $("input").blur(function() {
            $(".form-group").removeClass("is-focused");
        });

        this.$store.commit('content/page_title', 'Thêm lab');
    },
    data() {
        return {
            tang: '',
            toa: '',
            cau_hinh: '',
            ten_lab: '',
            so_may: 20,
            so_cho_ngoi: 20
        }
    },
    computed: {
        arr_toa() {
            return this.$store.state.toa.arr_toa;
        },
        arr_tang() {
            return this.$store.state.tang.arr_tang;
        },
        arr_cau_hinh() {
            return this.$store.state.cau_hinh.arr_cau_hinh;
        },
    },
    methods: {
        labelToa({ ten_toa, dia_chi }) {
            return `${ten_toa} - ${dia_chi}`;
        },
        labelTang({ ten_tang }) {
            return `${ten_tang}`;
        },
        labelCauHinh({ mo_ta }) {
            return `${mo_ta}`;
        }
    },
    watch: {
        toa() {
            this.tang = "";
            if (!this.toa) {
                this.$store.commit('tang/reset_arr_tang');
                return false;
            }
            this.$store.dispatch('tang/get_tang', this.toa.ma_toa);
        },
        arr_toa() {
            if (this.arr_toa.length != 0) {
                this.toa = this.arr_toa[0];
            }
        }
    }
}

</script>
<style scoped>
</style>
