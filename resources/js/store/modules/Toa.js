import getCookie from "../../customfunc/getCookie.js";

export default {
    namespaced: true,
    state: {
        arr_toa: []
    },
    mutations: {
        reset_arr_toa(state) {
            state.arr_toa = [];
        }
    },
    actions: {
        get_toa({ state, commit, rootState }, ma_toa) {
            state.arr_toa = [];
            axios
                .post("api/toa/hienthicactoa", {
                    key: getCookie("key")
                })
                .then(res => {
                    state.arr_toa = res.data.data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
