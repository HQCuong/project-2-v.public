import getCookie from "../../customfunc/getCookie";
import formatEventsLab from "../../customfunc/formatEvents";
import Vue from "vue";

export default {
    namespaced: true,
    state: {
        lich_su_dung: [],
        arr_lab: [],
        info_lab: {},
        err: {}
    },
    mutations: {
        reset_lich_su_dung(state) {
            state.lich_su_dung = [];
        },
        reset_arr_lab(state) {
            state.arr_lab = [];
        },
        refresh_tinh_trang(state, data) {
            for (let i = 0; i < state.arr_lab.length; i++) {
                if (state.arr_lab[i].ma_phong == data) {
                    if (state.arr_lab[i].tinh_trang.ma_tinh_trang == 1) {
                        state.arr_lab[i].tinh_trang.ten_tinh_trang = "Đã Đóng";
                        state.arr_lab[i].tinh_trang.ma_tinh_trang = 2;
                    } else {
                        state.arr_lab[i].tinh_trang.ten_tinh_trang =
                            "Hoạt Động";
                        state.arr_lab[i].tinh_trang.ma_tinh_trang = 1;
                    }
                }
            }
        },
        reset_info_lab(state) {
            state.info_lab = {};
        },
        reset_err(state) {
            state.err = {};
        }
    },
    actions: {
        get_lab({ state, commit, rootState }, ma_tang) {
            state.arr_lab = [];
            axios
                .post(`api/phong`, {
                    key: getCookie("key"),
                    ma_tang: ma_tang
                })
                .then(res => {
                    state.arr_lab = res.data.data.filter(
                        each => each.ma_phong != 1
                    );
                })
                .catch(err => {
                    console.error(err);
                });
        },
        get_info_lab({ state, commit, rootState }, ma_phong) {
            state.info_lab = {};
            axios
                .post(`api/phong`, {
                    key: getCookie("key"),
                    ma_phong: ma_phong
                })
                .then(res => {
                    state.info_lab = res.data.data[0];
                })
                .catch(err => {
                    console.error(err);
                });
        },
        get_lich_su_dung({ state, commit, rootState }, ma_phong) {
            state.lich_su_dung = [];
            axios
                .post(`api/lichhoc/lichphong`, {
                    key: getCookie("key"),
                    ma_phong: ma_phong
                })
                .then(res => {
                    state.lich_su_dung = formatEventsLab(res.data.data);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        update_tinh_trang({ state, commit, rootState }, user_input) {
            axios
                .post(`api/phong/taohoaccapnhat`, {
                    key: getCookie("key"),
                    ...user_input
                })
                .then(res => {
                    if (res.data.success) {
                        Vue.notify({
                            group: "nofi",
                            title: "Thành công",
                            text: res.data.message
                        });
                    }
                })
                .catch(err => {
                    console.error(err);
                });
            commit("refresh_tinh_trang", user_input.ma_phong);
        },

        update_thong_tin({ state, commit, dispatch, rootState }, user_input) {
            axios
                .post(`api/phong/taohoaccapnhat`, {
                    key: getCookie("key"),
                    ...user_input[0]
                })
                .then(res => {
                    if (user_input[1]) {
                        dispatch("update_cau_hinh", {
                            ma_phong: user_input[0].ma_phong,
                            ma_cau_hinh: user_input[1].ma_cau_hinh
                        });
                    }
                    if (res.data.success) {
                        dispatch("get_info_lab", state.info_lab.ma_phong);
                        commit("reset_err");
                        Vue.notify({
                            group: "nofi",
                            title: "Thành công",
                            text: res.data.message
                        });
                    } else {
                        state.err = res.data.message;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },

        update_cau_hinh({ state, commit, rootState }, data) {
            axios
                .post(`api/thietbiphong/taohoacsua`, {
                    key: getCookie("key"),
                    ...data
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
