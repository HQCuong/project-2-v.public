export default {
    namespaced: true,
    state: {
        events: []
    },
    mutations: {},
    actions: {
        get_lich_lab({ state, commit, rootState }) {
            state.events = [];

            var ev1 = {
                title: 'BKD01K10',
                start: '2020-06-03T10:00:00',
                end: '2020-06-03T12:00:00',
                textColor: 'white'
            }

            state.events.push(ev1);

            var ev2 = {
                title: 'BKD01K10',
                start: '2020-06-15T08:00:00',
                end: '2020-06-15T12:00:00',
                textColor: 'white'
            }
            state.events.push(ev2);
        },
    }
}
