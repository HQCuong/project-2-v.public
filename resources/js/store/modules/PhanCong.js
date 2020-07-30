import getCookie from "../../customfunc/getCookie.js";
import groupCollection from "../../customfunc/groupCollection.js";
import Vue from "vue";

export default {
    namespaced: true,
    state: {
        arr_phan_cong: [],
        de_xuat_phan_cong: [],
        arr_phan_cong_chi_tiet: [],
        arr_lop_by_phan_cong: [],
        // err res
        err_de_xuat: ""
    },
    mutations: {
        reset_err(state) {
            state.err_de_xuat = "";
        }
    },
    actions: {
        get_phan_cong({ state, commit, rootState }) {
            state.arr_phan_cong = [];
            axios
                .post(`api/phancong`, {
                    key: getCookie("key")
                })
                .then(res => {
                    state.arr_phan_cong = res.data.data;
                })
                .catch(err => {
                    console.error(err);
                });
        },

        get_phan_cong_chi_tiet({ state, commit, rootState }, ma_phan_cong) {
            state.arr_phan_cong_chi_tiet = [];
            axios
                .post(`api/phancongchitiet`, {
                    key: getCookie("key"),
                    ma_phan_cong: ma_phan_cong
                })
                .then(res => {
                    console.log(res);
                    if (res.data.message) {
                        state.arr_phan_cong_chi_tiet =
                            res.data.data.phan_cong_ct;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },

        get_de_xuat_phan_cong({ state, commit, rootState }, phan_cong_info) {
            state.de_xuat_phan_cong = [];
            axios
                .post(`api/phancongchitiet/dexuat`, {
                    key: getCookie("key"),
                    ...phan_cong_info
                })
                .then(res => {
                    if (res.data.success) {
                        res = groupCollection(res.data.data, "thu");
                        this.commit("phan_cong/reset_err");
                        state.de_xuat_phan_cong = res;
                    } else {
                        state.err_de_xuat = res.data.message;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },

        add_de_xuat_phan_cong({ state, commit, rootState }, phan_cong_ct) {
            axios
                .post(`api/phancongchitiet/tao`, {
                    key: getCookie("key"),
                    ...phan_cong_ct
                })
                .then(res => {
                    if (res.data.success) {
                        Vue.notify({
                            group: "add_phan_cong_ct_success",
                            title: "Thành công",
                            text: res.data.message,
                            duration: 2000
                        });
                    } else {
                        state.err_de_xuat = res.data.message;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },

        get_lop_by_phan_cong({ state, commit, rootState }, ma_giao_vien) {
            console.log(ma_giao_vien);
            state.arr_lop_by_phan_cong = [];
            axios
                .post(`api/phancong`, {
                    key: getCookie("key"),
                    ma_giao_vien: ma_giao_vien
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
