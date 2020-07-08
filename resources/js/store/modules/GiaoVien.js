export default {
    namespaced: true,
    state: {
        lich_giao_vien: []
    },
    mutations: {},
    actions: {
        get_lich_giao_vien({ state, commit, rootState }) {
            state.lich_giao_vien = [];
            
            var ev1 = {
                title: 'BKD01K10' + ' - ' + 'ten mon hoc',
                start: '2020-07-03T10:00:00',
                end: '2020-07-03T12:00:00',
                textColor: 'white'
            }

            state.lich_giao_vien.push(ev1);

            var ev2 = {
                title: 'BKD01K10' + ' - ' +'ten mon hoc',
                start: '2020-07-15T08:00:00',
                end: '2020-07-15T12:00:00',
                textColor: 'white'
            }
            state.lich_giao_vien.push(ev2);

        }
    }
}
