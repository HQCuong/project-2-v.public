import getCookie from "../../customfunc/getCookie.js";

export default {
    state: {},

    mutations: {},

    actions: {
        get_ca({ state, commit, rootState }) {
            axios
                .post("api/ca", {
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
