import getCookie from "../../customfunc/getCookie";
import formatEventsLab from "../../customfunc/formatEventsLab";

export default {
    namespaced: true,
    state: {
        lich_su_dung: [],
        arr_lab: [],
        info_lab: {}
    },
    mutations: {
        reset_lich_su_dung(state) {
            state.lich_su_dung = [];
        },
        reset_arr_lab(state) {
            state.arr_lab = [];
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
                    state.arr_lab = res.data.data;
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
        }
    }
};
