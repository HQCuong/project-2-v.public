import getCookie from "../../customfunc/getCookie.js";
import groupCollection from "../../customfunc/groupCollection.js";
import Vue from "vue";

export default {
    namespaced: true,
    state: {
        arr_phan_cong: [],
        arr_de_xuat_phan_cong_ct: [],
        arr_phan_cong_ct: [],
        // reset select
        reset_select: false,
        // err res
        err_de_xuat: ""
    },
    mutations: {
        reset_err(state) {
            state.err_de_xuat = "";
        },
        reset_arr_de_xuat_phan_cong_ct(state) {
            state.arr_de_xuat_phan_cong_ct = [];
        },
        reset_select(state) {
            state.reset_select = true;
        },
        set_select(state) {
            state.reset_select = false;
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
            state.arr_phan_cong_ct = [];
            axios
                .post(`api/phancongchitiet`, {
                    key: getCookie("key"),
                    ma_phan_cong: ma_phan_cong
                })
                .then(res => {
                    console.log(res);
                    if (res.data.message) {
                        state.arr_phan_cong_ct =
                            res.data.data.phan_cong_chi_tiet;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },

        get_de_xuat_phan_cong_ct({ state, commit, rootState }, phan_cong_info) {
            this.commit("phan_cong/set_select");
            state.arr_de_xuat_phan_cong_ct = [];
            axios
                .post(`api/phancongchitiet/dexuat`, {
                    key: getCookie("key"),
                    ...phan_cong_info
                })
                .then(res => {
                    if (res.data.success) {
                        res = groupCollection(res.data.data, "thu");
                        this.commit("phan_cong/reset_err");
                        state.arr_de_xuat_phan_cong_ct = res;
                    } else {
                        state.err_de_xuat = res.data.message;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },

        add_phan_cong_chi_tiet({ state, commit, rootState }, phan_cong_ct) {
            axios
                .post(`api/phancongchitiet/tao`, {
                    key: getCookie("key"),
                    ...phan_cong_ct
                })
                .then(res => {
                    if (res.data.success) {
                        Vue.notify({
                            group: "add_phan_cong_ct",
                            type: "success",
                            title: "Thành công",
                            text: res.data.message,
                            duration: 1500
                        });
                        this.commit(
                            "phan_cong/reset_arr_de_xuat_phan_cong_ct"
                        ).then(this.commit("phan_cong/reset_select"));
                    } else {
                        state.err_de_xuat = res.data.message
                            ? res.data.message.phan_cong_chi_tiet
                            : res.data.message;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
