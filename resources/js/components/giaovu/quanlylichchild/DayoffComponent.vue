<template>
    <div>
        <form>
            <label>Giáo viên</label>
            <multiselect v-model="giao_vien" placeholder="Chọn giáo viên / để trống nếu chọn tất cả" track-by="ma_nguoi_dung" :options="arr_giao_vien" :multiple="true" :taggable="true" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :custom-label="labelGiaoVien"></multiselect>
            <br>
            <div class="form-group row">
                <label>Chọn ngày</label>
                <div>
                    <input class="form-control" type="date" v-model="ngay" id="example-date-input">
                </div>
            </div>
            <br>
            <label>Chọn ca</label>
            <multiselect v-model="ca" placeholder="Chọn ca" :options="arr_ca" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn"></multiselect>
            <br>
            <div class="form-group">
                <label for="insert_note">Ghi chú</label>
                <input type="text" class="form-control" id="insert_note" placeholder="Ghi chú, có thể để trống">
            </div>
            <br>
            <button class="btn btn-info">Thêm</button>
        </form>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('user/get_user');
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
        
        this.$store.commit('content/page_title', 'Thêm ngày nghỉ');
    },
    data() {
        return {
            giao_vien: '',
            ngay: '',
            ca: '',
            arr_ca: ['ca 1', 'ca 2', 'ca 3', 'ca 4']
        }
    },
    computed: {
        arr_giao_vien() {
            return this.$store.state.user.arr_user;
        }
    },
    methods: {
        labelGiaoVien({ ho_ten }) {
            return `${ho_ten}`;
        }
    }
}

</script>
<style lang="css" scoped>
</style>
