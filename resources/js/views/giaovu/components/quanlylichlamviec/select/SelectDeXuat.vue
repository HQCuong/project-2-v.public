<template>
    <div>
        <div>
            <label>Chọn giáo viên</label>
            <multiselect
                v-model="giao_vien"
                :options="arr_gv"
                :close-on-select="true"
                :show-labels="true"
                placeholder="Chọn giáo viên"
                deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
                selectLabel="Click hoặc nhấn Enter để chọn"
                :searchable="true"
                :custom-label="labelUser"
            ></multiselect>
        </div>
        <br />
        <label>Chọn phân công</label>
        <multiselect
            v-model="phan_cong"
            :options="arr_phan_cong"
            :close-on-select="true"
            :show-labels="true"
            placeholder="Chọn phân công"
            deselectLabel="Click hoặc nhấn Enter để bỏ chọn"
            selectLabel="Click hoặc nhấn Enter để chọn"
            :searchable="true"
            :custom-label="classLabel"
        >
            <template
                slot="noOptions"
            >Chưa chọn giáo viên hoặc giáo viên đã chọn chưa được phân công</template>
        </multiselect>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch("user/get_all_user");
    },
    data() {
        return {
            phan_cong: "",
            giao_vien: "",
        };
    },
    computed: {
        arr_gv() {
            return this.$store.state.user.arr_user.filter((each) => {
                return each.ma_cap_do == 3;
            });
        },
        arr_phan_cong() {
            return this.$store.state.phan_cong.arr_phan_cong.filter((each) => {
                return (
                    each.nguoidung &&
                    each.nguoidung.ma_nguoi_dung == this.giao_vien.ma_nguoi_dung
                );
            });
        },
    },
    watch: {
        giao_vien() {
            console.log(this.giao_vien);
            if (!this.giao_vien) {
                this.phan_cong = "";
                this.$store.commit("phan_cong/reset_arr_phan_cong");
            } else {
                this.$store.dispatch(
                    "phan_cong/get_phan_cong",
                    this.giao_vien.ma_nguoi_dung
                );
            }
        },
    },
    methods: {
        labelUser({ ho_ten, email }) {
            return `${ho_ten} - ${email}`;
        },
        classLabel({ ma_lop, ma_mon_hoc }) {
            return `${ma_lop} - ${ma_mon_hoc}`;
        },
    },
};
</script>
<style lang="css" scoped>
</style>
