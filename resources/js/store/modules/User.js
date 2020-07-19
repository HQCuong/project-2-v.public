import getCookie from "../../customfunc/getCookie.js";

export default {
    namespaced: true,
    state: {
        is_giao_vien: false,
        arr_user: [],
        user_info: {},
        self_info: {},
        // validate err
        err_validate_detail: {},
        err_validate_global: ""
    },

    mutations: {
        reset_user_info(state) {
            state.user_info = {};
        }
    },

    actions: {
        get_user({ state, commit, rootState }) {
            state.user_info = {};
            state.arr_user = [];
            axios
                .post("api/nguoidung/danhsach", {
                    key: getCookie("key")
                })
                .then(res => {
                    state.arr_user = res.data.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },

        get_user_info({ state, commit, rootState }, ma_nguoi_dung) {
            state.user_info = {};
            axios
                .post("api/nguoidung/thongtin", {
                    key: getCookie("key"),
                    ma: ma_nguoi_dung
                })
                .then(res => {
                    state.user_info = res.data.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },

        modi_user_info({ state, commit, rootState }, user) {
            state.err_validate_global = "";
            state.err_validate_detail = {};

            for (var m in user) {
                if (!user[m]) {
                    delete user[m];
                }

                if (user[m] === state.user_info[m] && m !== "ma_nguoi_dung") {
                    delete user[m];
                }
            }

            axios
                .post(`api/nguoidung/capnhatthongtin/${user.ma_nguoi_dung}`, {
                    key: getCookie("key"),
                    ...user
                })
                .then(res => {
                    console.log(res);
                    if (res.data.success) {
                        state.err_validate_global = "";
                        state.err_validate_detail = {};
                        this.dispatch("user/get_user_info", user.ma_nguoi_dung);
                        user = { ma_nguoi_dung: user.ma_nguoi_dung };
                    } else {
                        state.user_info = Object.assign(state.user_info, user);
                        if (typeof res.data.message === "string") {
                            state.err_validate_global = res.data.message;
                        } else {
                            state.err_validate_detail = res.data.message;
                        }
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },

        get_self_info({ state, commit, rootState }) {
            state.self_user = {};
            axios
                .post("api/nguoidung/thongtin", {
                    key: getCookie("key")
                })
                .then(res => {
                    state.self_info = res.data.data;
                    console.log(state.self_info);
                })
                .catch(error => {
                    console.error(error);
                });
        },

        modi_self_info({ state, commit, rootState }, user) {
            state.err_validate_global = "";
            state.err_validate_detail = {};

            for (var m in user) {
                if (!user[m]) {
                    delete user[m];
                }

                if (user[m] === state.self_info[m] && m !== "ma_nguoi_dung") {
                    delete user[m];
                }
            }

            console.log(user);

            axios
                .post(`api/nguoidung/capnhatthongtin/${user.ma_nguoi_dung}`, {
                    key: getCookie("key"),
                    ...user
                })
                .then(res => {
                    if (res.data.success) {
                        state.err_validate_global = "";
                        state.err_validate_detail = {};
                        window.location.href = "logout";
                    } else {
                        state.self_info = Object.assign(state.self_info, user);
                        if (typeof res.data.message === "string") {
                            state.err_validate_global = res.data.message;
                        } else {
                            state.err_validate_detail = res.data.message;
                        }
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
