import getCookie from '../../customfunc/getCookie.js';

export default{
  namespaced: true,
  state: {
  	arr_mon: []
  },

  mutations:{
  	reset_arr_mon(state) {
  		state.arr_mon = [];
  	}
  },

  actions: {
  	get_mon({state, commit ,rootState}) {
  		state.arr_mon = [];
  		axios.post('http://localhost:8080/project-2/public/api/monhoc', {
  		  key: getCookie('key')
  		}).then((response) => {
  		  state.arr_mon = response.data.data;
  		}).catch((error) => {
  		  console.error(error);
  		});
  	}
  },

}
