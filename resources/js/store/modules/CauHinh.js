import getCookie from "../../customfunc/getCookie.js";

export default {
    namespaced: true,
    state: {
        arr_cau_hinh: []
    },

    mutations: {},

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
        }
    }
};
