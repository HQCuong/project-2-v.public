<template>
    <div>
        <label>Chọn phân công</label>
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
    data() {
        return {
            lop: "",
            giao_vien: "",
        };
    },
    computed: {
        arr_gv() {
            return this.$store.state.user.arr_user.filter((each) => {
                return each.ma_cap_do == 3;
            });
        },
        arr_lop() {
            if (this.giao_vien) {
                return this.$store.state.phan_cong.arr_phan_cong.filter(
                    (each) => {
                        return (
                            each.ma_nguoi_dung == this.giao_vien.ma_nguoi_dung
                        );
                    }
                );
            } else {
                return [];
            }
        },
    },
    watch: {
        giao_vien() {
            if (!this.giao_vien) {
                this.$emit("show_lich_lam_viec", 0);
                this.lop = "";
            }
        },
        lop() {
            if (this.lop) {
                this.$emit("show_lich_lam_viec", 1);
            } else {
                this.$emit("show_lich_lam_viec", 0);
            }
        },
    },
    methods: {
        labelUser({ ho_ten, email }) {
            return `${ho_ten} - ${email}`;
        },
        classLabel({ ma_lop }) {
            return `${ma_lop}`;
        },
    },
};
</script>
<style lang="css" scoped>
</style>
