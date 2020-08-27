import getCookie from "../../customfunc/getCookie.js";
import Vue from "vue";

export default {
    namespaced: true,
    state: {
        arr_cau_hinh: [],
        thong_tin_cau_hinh: {},
        err_form: {},
        reset_form: false
    },

    mutations: {
        reset_thong_tin_cau_hinh(state) {
            state.thong_tin_cau_hinh = {};
        }
    },

    actions: {
        get_cau_hinh({ state, commit, rootState }, user_input) {
            console.log(user_input);
            state.arr_cau_hinh = [];
            axios
                .post("api/cauhinh", {
                    key: getCookie("key"),
                    ma_loai: 1
                })
                .then(res => {
                    state.arr_cau_hinh = res.data.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        add_cau_hinh({ state, commit, rootState }, user_input) {
            state.err_form = [];
            axios
                .post(`api/cauhinh/them`, {
                    key: getCookie("key"),
                    ...user_input
                })
                .then(res => {
                    console.log(res);
                    if (res.data.success) {
                        Vue.notify({
                            group: "nofi",
                            title: "Thành công",
                            text: res.data.message
                        });
                        state.reset_form = true;
                    } else {
                        state.err_form = res.data.message;
                        state.reset_form = false;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },
        get_thong_tin_cau_hinh({ state, commit, rootState }) {
            state.thong_tin_cau_hinh = {};
        },
        update_thong_tin_cau_hinh({ state, commit, rootState }) {}
    }
};
