<template>
    <div>
        <span>Chọn tòa</span>
        <multiselect v-model="value_toa" :options="toa" :close-on-select="true" :show-labels="false" placeholder="Tòa" open-direction="bottom"></multiselect deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
        <br>
        <span>Chọn tầng</span>
        <multiselect v-model="value_tang" :options="tang" :close-on-select="true" :show-labels="false" placeholder="Tầng" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
            <template slot="noOptions">Chưa chọn tòa</template>
        </multiselect>
        <br>
        <span>Chọn cấu hình</span>
        <multiselect v-model="value_cau_hinh" :options="cau_hinh" :close-on-select="true" :show-labels="false" placeholder="Chọn cấu hình" open-direction="bottom" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :searchable="false">
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
        })


        // remove color while move out input
        $("input").blur(function() {
            $(".form-group").removeClass("is-focused");
        });
    },
    data() {
        return {
            value_tang: '',
            value_toa: '',
            value_cau_hinh: '',
            toa: [],
            tang: [],
            cau_hinh: ['cau hinh 1', 'cau hinh 2', 'cau hinh 3']
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
            // trong truong hop bo chon toa
            if (this.value_toa == "" || this.value_toa == null) {
                this.tang = [];
                return false;
            }
            // dung axios gui len lay so tang
            this.tang = ['tang 2', 'tang 5'];
        },

        value_tang() {
            this.value_lab = "";
            // trong truong hop bo chon tang 
            if (this.value_tang == "" || this.value_tang == null) {
                this.lab = [];
                return false;
            }
            // dung axios gui len lay so lab
            this.lab = ['lab 1', 'lab 2', 'lab 3'];
        },
    }
}

</script>
<style scoped>
</style>
