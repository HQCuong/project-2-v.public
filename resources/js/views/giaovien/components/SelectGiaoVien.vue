<template>
    <div>
        <div v-if="!is_giao_vien">
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
    props: ["is_giao_vien"],
    data() {
        return {
            lop: "",
            giao_vien: "",
        };
    },
    computed: {
        arr_gv() {
            if (!this.is_giao_vien) {
                return this.$store.state.user.arr_user.filter((each) => {
                    return each.ma_cap_do == 3;
                });
            } else {
                return [this.$store.state.user.self_info];
            }
        },
        arr_lop() {
            if (this.giao_vien) {
                return this.$store.state.phan_cong.arr_phan_cong.filter(
                    (each) => {
                        return (
                            each.nguoidung &&
                            each.nguoidung.ma_nguoi_dung ==
                                this.giao_vien.ma_nguoi_dung
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
                this.$store.commit("giao_vien/reset_lich_lam_viec");
                this.lop = "";
            }
        },
        lop() {
            if (this.lop) {
                this.$store.dispatch(
                    "giao_vien/get_lich_lam_viec",
                    this.giao_vien.ma_nguoi_dung
                );
            } else {
                this.$store.commit("giao_vien/reset_lich_lam_viec");
            }
        },
        arr_gv() {
            if (this.arr_gv.length == 1) {
                this.giao_vien = this.arr_gv;
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
