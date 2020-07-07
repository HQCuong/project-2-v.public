// get cookie function
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export default {
    namespaced: true,
    state: {
        arr_toa: []
    },
    mutations: {},
    actions: {
        get_toa({state, commit, rootState}) {
        	axios.post('http://localhost:8080/project-2/public/api/tang', {
        	  key: getCookie('key')
        	}).then((response) => {
        		console.log(response.data.data);
        	}).catch((error) => {
        	  console.error(error);
        	});
        }
    }
}
