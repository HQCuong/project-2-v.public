<template>
    <div>
        <form>
            <label>Giáo viên</label>
            <multiselect
                v-model="user"
                :options="arr_user"
                :close-on-select="true"
                :show-labels="true"
                placeholder="Chọn giáo viên (để trống nếu là lịch nghỉ chung)"
                deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
                selectLabel="Click hoặc nhấn Enter để chọn"
                :searchable="true"
                :custom-label="userLabel"
            ></multiselect>
            <br />
            <br />
            <label>Ngày nghỉ</label>
            <v-date-picker
                :min-date="new Date()"
                mode="multiple"
                v-model="ngay_nghi"
                :input-props="{placeholder: 'Chọn ngày nghỉ', class: 'form-control'}"
            />
            <br />
            <br />
            <label>Ca nghỉ</label>
            <multiselect
                v-model="ca"
                :options="arr_ca"
                :close-on-select="true"
                :show-labels="true"
                placeholder="Chọn ca"
                deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
                selectLabel="Click hoặc nhấn Enter để chọn"
                :searchable="true"
                :custom-label="caLabel"
            ></multiselect>
            <br />
            <br />
            <div class="form-group">
                <label for="insertNote">Ghi chú</label>
                <input
                    type="number"
                    class="form-control"
                    id="insertNote"
                    placeholder="Nhập ghi chú (có thể để trống)"
                    v-model="ghi_chu"
                />
            </div>
            <br />
            <button class="btn btn-info">Thêm</button>
        </form>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("user/get_all_user");
        this.$store.dispatch("ca/get_ca");
    },
    mounted() {
        // change label color
        $(".form-group").addClass("bmd-form-group");
        $("label").addClass("bmd-label-static");
        $(".form-group").on("click", function () {
            $(".form-group").removeClass("is-focused");
            $(this).addClass("is-focused");
        });

        // remove color while move out input
        $("input").blur(function () {
            $(".form-group").removeClass("is-focused");
        });
    },
    computed: {
        arr_user() {
            return this.$store.state.user.arr_user;
        },
        arr_ca() {
            return this.$store.state.ca.arr_ca;
        },
    },
    data() {
        return {
            ngay_nghi: "",
            user: "",
            ca: "",
            ghi_chu: "",
        };
    },
    methods: {
        userLabel({ ho_ten, email }) {
            return `${ho_ten} - ${email}`;
        },
        caLabel({ ma_ca, gio_bat_dau, gio_ket_thuc }) {
            return `${ma_ca} - ${gio_bat_dau} - ${gio_ket_thuc}`;
        },
    },
    watch: {
        ngay_nghi() {
            console.log(this.ngay_nghi[0]);
        },
    },
};
</script>

<style>
</style>