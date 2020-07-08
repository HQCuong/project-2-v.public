<template>
    <div>
        <form @submit="preventLoad">
            <label>Giáo viên</label>
            <multiselect v-model="giao_vien" placeholder="Chọn giáo viên" :options="arr_giao_vien" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn" :custom-label="labelGiaoVien"></multiselect>
            <br>
            <label>Lớp</label>
            <multiselect v-model="lop" placeholder="Chọn lớp" track-by="ma_lop" :options="arr_lop" :multiple="true" :taggable="true" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn">
                <template slot="noOptions">Chưa chọn giáo viên</template>
            </multiselect>
            <br>
            <label>Môn</label>
            <multiselect v-model="mon" placeholder="Chọn môn" :options="arr_mon" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn">
                <template slot="noOptions">Chưa chọn lớp</template>
            </multiselect>
            <br>
            <br>
            <div class="form-group row">
                <label>Chọn mốc thời gian (tính từ ngày hôm nay)</label>
                <div>
                    <input class="form-control" type="date" v-model="ngay" id="example-date-input">
                </div>
            </div>
            <br>
            <label>Số giờ dạy</label>
            <multiselect v-model="time" placeholder="Chọn thời gian dạy" :options="arr_time" deselectLabel="Click hoặc nhấn Enter để bỏ chọn" selectLabel="Click hoặc nhấn Enter để chọn"></multiselect>
            <br>
            <button class="btn btn-info">Thêm</button>
        </form>
        <br>
        <maincalendar v-if="show_calendar"></maincalendar>
    </div>
</template>
<script>
import maincalendar from './addworkchild/GvCalendarComponent.vue';

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
            show_calendar: false,
            giao_vien: '',
            ngay: '',
            lop: '',
            mon: '',
            time: '',
            arr_lop: [],
            arr_mon: [],
            arr_time: ['2 tiếng', '4 tiếng']
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
        },
        preventLoad(e) {
            e.preventDefault();
        }
    },
    watch: {
        giao_vien() {
            console.log(1);
            this.lop = "";
            this.mon = "";
            if (!this.giao_vien) {
                this.arr_lop = [];
                return false;
            }
            this.$store.dispatch('giao_vien/get_lich_giao_vien');
            this.show_calendar = true;
            this.arr_lop = ['BKD01K10', 'BIT01K10'];
        },

        lop() {
            this.mon = "";
            if (!this.lop) {
                this.arr_mon = [];
                return false;
            }
            this.arr_mon = ['PHP', 'WEB', 'CSDL'];
        }
    },
    components: {
        maincalendar
    }
}

</script>
<style lang="css" scoped>
</style>
