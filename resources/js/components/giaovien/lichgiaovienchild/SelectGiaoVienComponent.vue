<template>
    <div>
        <label>Chọn phân công</label>
        <multiselect
            v-model="giao_vien"
            :options="arr_user"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn giáo viên"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="true"
            :custom-label="labelUser"
        ></multiselect>
        <br />
        <label>Chọn lớp</label>
        <multiselect
            v-model="lop"
            :options="arr_lop"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn lớp"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="true"
            :custom-label="labelLop"
        >
            <template slot="noOptions">Chưa chọn giáo viên</template>
        </multiselect>
    </div>
</template>
<script>
export default {
    created() {
        if (this.$store.state.user.is_giao_vien) {
            //dispatch get danh sach lop
        }

        if (!this.$store.state.user.is_giao_vien) {
            this.$store.dispatch("user/get_user");
        }
    },
    data() {
        return {
            phan_cong: "",
            lop: "",
            giao_vien: "",
        };
    },
    computed: {
        arr_user() {
            return this.$store.state.user.arr_user;
        },
        arr_lop() {
            return this.$store.state.phan_cong.arr_lop_by_phan_cong;
        },
    },
    watch: {
        giao_vien() {
            if (this.giao_vien) {
                this.$store.dispatch(
                    "phan_cong/get_lop_by_phan_cong",
                    this.giao_vien.ma_nguoi_dung
                );
            }
        },
    },
    methods: {
        labelUser({ ho_ten, email }) {
            return `${ho_ten} - ${email}`;
        },
        labelLop({ ten_lop }) {
            return `${ten_lop}`;
        },
    },
};
</script>
<style lang="css" scoped>
</style>
