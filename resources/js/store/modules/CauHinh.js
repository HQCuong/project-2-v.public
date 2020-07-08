import getCookie from '../../customfunc/getCookie.js';

export default {
	namespaced: true,
    state: {
    	arr_cau_hinh: []
    },

    mutations: {

    },

    actions: {	
    	get_cau_hinh({state, commit, rootState}) {
    		state.arr_cau_hinh = [];
    		axios.post('http://localhost:8080/project-2/public/api/cauhinh', {
    		  key: getCookie('key'),
    		  ma_loai: 1
    		}).then((response) => {
    		 	state.arr_cau_hinh = response.data.data;
    		}).catch((error) => {
    		  console.error(error);
    		})
    	}
    },

}
