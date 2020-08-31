import getCookie from "../../customfunc/getCookie.js";

export default {
    namespaced: true,

    state: {},

    mutations: {},

    actions: {
        get_de_xuat({ state, commit, rootState }, user_input) {
            console.log(user_input);
            axios
                .post(`api/lichdaybosung/dexuat`, {
                    key: getCookie("key")
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
