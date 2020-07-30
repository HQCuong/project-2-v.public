export default {
    namespaced: true,
    state: {
        arr_giao_vien: ""
    },
    getters: {
        get_lich_giao_vien(state) {
            return state.lich_giao_vien;
        }
    },
    mutations: {},
    actions: {
        get_giao_vien({ state, commit, rootState }) {
            state.arr_giao_vien = [];
            axios
                .post(`url`, params)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
