export default {
    namespaced: true,
    state: {
        // mon: 'abc',
        // lop: 'bbb',
        // phong: 123
        events: []
    },
    mutations: {},
    actions: {
        get_lich_gv({ state, commit, rootState }) {
            state.events = [];
            rootState.lich_gv = [];
            
            var ev1 = {
                title: 'phong: ' + 'Lab 1' + '\n' + ' mon: ' + 'PHP' + ' - ' + 'lop: ' + 'BKD01K10',
                start: '2020-06-03T10:00:00',
                end: '2020-06-03T12:00:00'
            }

            state.events.push(ev1);

            var ev2 = {
                title: 'phong: ' + 'Lab 1' + '\n' + ' mon: ' + 'PHP' + ' - ' + 'lop: ' + 'BKD01K10',
                start: '2020-06-15T08:00:00',
                end: '2020-06-15T12:00:00'
            }
            state.events.push(ev2);

            rootState.lich_gv = state.events;
        }
    }
}
