import getCookie from '../../customfunc/getCookie.js';


export default {
    namespaced: true,
    state: {
        is_giao_vien: false,
        arr_user: []
    },

    mutations: {

    },

    actions: {
    	get_user({state, commit ,rootState}) {
    		state.arr_user = [];
    		axios.post('http://localhost:8080/project-2/public/api/nguoidung/danhsach', {
    		  key: getCookie('key')
    		}).then((response) => {
    		  state.arr_user = response.data.data;
    		}).catch((error) => {
    		  console.error(error);
    		})
    	}
    },

}
