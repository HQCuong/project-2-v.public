import getCookie from "../../customfunc/getCookie.js";

export default {
    namespaced: true,
    state: {
        arr_cau_hinh: [],
        thong_tin_cau_hinh: {}
    },

    mutations: {
        reset_thong_tin_cau_hinh(state) {
            state.thong_tin_cau_hinh = {};
        }
    },

    actions: {
        get_cau_hinh({ state, commit, rootState }) {
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
        get_thong_tin_cau_hinh({ state, commit, rootState }) {
            state.thong_tin_cau_hinh = {};

            state.thong_tin_cau_hinh = { data: 1 };
        }
    }
};
