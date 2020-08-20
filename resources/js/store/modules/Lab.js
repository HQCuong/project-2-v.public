import { cloneDeep } from "lodash";

export default {
    namespaced: true,
    state: {
        lich_su_dung: [],
        arr_lab: []
    },
    getters: {
        get_lich_su_dung_lab(state) {
            return state.lich_su_dung;
        }
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
            state.arr_lab = ["lab 1", "lab 2", "lab 3"];
        },
        get_lich_su_dung({ state, commit, rootState }) {
            state.lich_su_dung = [];

            var ev1 = {
                title: "BKD01K10",
                start: "2020-08-03" + "T10:00:00",
                end: "2020-08-03" + "T12:00:00"
            };

            state.lich_su_dung.push(ev1);

            var ev2 = {
                title: "BKD01K10",
                start: "2020-08-15" + "T08:00:00",
                end: "2020-08-15" + "T12:00:00"
            };
            state.lich_su_dung.push(ev2);
        }
    }
};
