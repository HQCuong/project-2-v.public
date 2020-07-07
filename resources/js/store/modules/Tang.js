import getCookie from '../../customfunc/getCookie.js';

export default {
    namespaced: true,
    state: {
        arr_tang: []
    },
    mutations: {
        reset_arr_tang(state) {
            state.arr_tang = [];
        }
    },
    actions: {
        get_tang({state, commit, rootState}, ma_toa) {
            state.arr_tang = [];
        	axios.post('http://localhost:8080/project-2/public/api/tang', {
        	  key: getCookie('key'),
              ma_toa: ma_toa
        	}).then((response) => {
        		state.arr_tang = response.data.data;
        	}).catch((error) => {
        	  console.error(error);
        	});
        }
    }
}
