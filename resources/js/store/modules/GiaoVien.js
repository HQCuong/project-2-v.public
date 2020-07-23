export default {
    namespaced: true,
    state: {
        lich_giao_vien: []
    },
    getters: {
        get_lich_giao_vien(state) {
            return state.lich_giao_vien;
        }
    },
    mutations: {},
    actions: {
        get_lich_giao_vien({ state, commit, rootState }) {
            state.lich_giao_vien = [];

            var ev1 = {
                title: "BKD01K10" + " - " + "ten mon hoc",
                start: "2020-07-03" + "T10:00:00",
                end: "2020-07-03" + "T12:00:00"
            };

            state.lich_giao_vien.push(ev1);

            var ev2 = {
                title: "BKD01K10" + " - " + "ten mon hoc",
                start: "2020-07-15" + "T08:00:00",
                end: "2020-07-15" + "T12:00:00"
            };

            state.lich_giao_vien.push(ev2);
        }
    }
};
