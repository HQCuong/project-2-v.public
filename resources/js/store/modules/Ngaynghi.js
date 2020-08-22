import getCookie from "../../customfunc/getCookie.js";
import formatNgayNghi from "../../customfunc/formatNgayNghi";

export default {
    namespaced: true,
    state: {
        arr_ngay_nghi: []
    },

    mutations: {
        reset_arr_ngay_nghi(state) {
            state.arr_ngay_nghi = [];
        }
    },

    actions: {
        get_ngay_nghi({ state, commit, rootState }) {
            axios
                .post(`api/ngaynghi`, {
                    key: getCookie("key")
                })
                .then(res => {
                    if (res.data.message) {
                        state.arr_ngay_nghi = formatNgayNghi(res.data.data);
                        console.log(state.arr_ngay_nghi);
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
