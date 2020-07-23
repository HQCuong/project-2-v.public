import getCookie from "../../customfunc/getCookie.js";

export default {
    namespaced: true,
    state: {
        arr_phan_cong: [],
        de_xuat_phan_cong: [],
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

        get_de_xuat_phan_cong({ state, commit, rootState }, phan_cong_info) {
            state.de_xuat_phan_cong = [];
            axios
                .post(`api/phancongchitiet/dexuat`, {
                    key: getCookie("key"),
                    ...phan_cong_info
                })
                .then(res => {
                    if (res.data.success) {
                        this.commit("phan_cong/reset_err");
                        state.de_xuat_phan_cong = res.data.data;
                    } else {
                        state.err_de_xuat = res.data.message;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
