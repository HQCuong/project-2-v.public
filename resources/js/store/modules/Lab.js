export default {
    namespaced: true,
    state: {
        lich_lab: []
    },
    getters: {
        get_lich_lab(state) {
            return state.lich_lab;
        }
    },
    mutations: {},
    actions: {
        get_lich_lab({ state, commit, rootState }) {
            state.lich_lab = [];

            var ev1 = {
                title: "BKD01K10",
                start: "2020-07-03" + "T10:00:00",
                end: "2020-07-03T12:00:00"
            };

            state.lich_lab.push(ev1);

            var ev2 = {
                title: "BKD01K10",
                start: "2020-07-15T08:00:00",
                end: "2020-07-15T12:00:00"
            };
            state.lich_lab.push(ev2);
        }
    }
};
