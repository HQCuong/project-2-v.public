<template>
    <div>
        <label>Chọn tòa</label>
        <multiselect v-model="ma_toa" :options="arr_toa" :close-on-select="true" :show-labels="true" placeholder="Tòa"></multiselect deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
        <br>
        <label>Chọn tầng</label>
        <multiselect v-model="ma_tang" :options="arr_tang" :close-on-select="true" :show-labels="true" placeholder="Tầng" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <label>Chọn cấu hình</label>
        <multiselect v-model="ma_cau_hinh" :options="arr_cau_hinh" :close-on-select="true" :show-labels="true" placeholder="Chọn cấu hình" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <br>
        <form>
            <div class="form-group">
                <label for="insertSeats">Số chỗ ngồi</label>
                <input type="number" class="form-control" id="insertSeats" aria-describedby="emailHelp" placeholder="Nhập số chõ ngồi">
            </div>
            <br>
            <div class="form-group">
                <label for="insertCpts">Số máy</label>
                <input type="number" class="form-control" id="insertCpts" aria-describedby="emailHelp" placeholder="Nhập số máy">
            </div>
            <br>
            <button type="submit" class="btn btn-info">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    created() {
        this.get_toa();
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
            ma_tang: '',
            ma_toa: '',
            ma_cau_hinh: '',
            arr_toa: [],
            arr_tang: [],
            arr_cau_hinh: ['cau hinh 1', 'cau hinh 2', 'cau hinh 3']
        }
    },
    methods: {
        change_current_view() {
            this.current_view = !this.current_view;
        },
        get_toa() {
            this.arr_toa = ['A17'];
            if (this.arr_toa.length == 1) {
                this.ma_toa = this.arr_toa[0];
            } else {
                this.ma_toa = '';
            }
        }
    },
    watch: {
        ma_toa() {
            this.ma_tang = "";
            if (!this.ma_toa) {
                this.arr_tang = [];
                return false;
            }
            this.arr_tang = ['tang 2', 'tang 5'];
        },
    }
}

</script>
<style scoped>
</style>
