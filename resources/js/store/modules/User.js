import getCookie from '../../customfunc/getCookie.js';


export default {
    namespaced: true,
    state: {
        is_giao_vien: false,
        arr_user: [],
        user_info: {},

        // validate err
        err_validate_detail: {},
        err_validate_global: ''
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
            axios.post('http://localhost:8080/project-2/public/api/nguoidung/danhsach', {
                key: getCookie('key')
            }).then((response) => {
                state.arr_user = response.data.data;
            }).catch((error) => {
                console.error(error);
            })
        },
        get_user_info({ state, commit, rootState }, ma_nguoi_dung) {
            state.user_info = {};
            axios.post('http://localhost:8080/project-2/public/api/nguoidung/thongtin', {
                key: getCookie('key'),
                ma: ma_nguoi_dung
            }).then((response) => {
                state.user_info = response.data.data;
            }).catch((error) => {
                console.error(error);
            })
        },
        modi_user_info({ state, commit, rootState }, user) {
            state.err_validate_global = '';
            state.err_validate_detail = {};

            for (var m in user) {
                if (!user[m]) {
                    delete user[m];
                }

                if (user[m] === state.user_info[m] && m !== 'ma_nguoi_dung') {
                    delete user[m];
                }
            }
            
            axios.post(`http://localhost:8080/project-2/public/api/nguoidung/capnhatthongtin/${user.ma_nguoi_dung}`, {
                key: getCookie('key'),
                ...user
            }).then((response) => {
                console.log(response);
                if (response.data.success) {
                    state.err_validate_global = '';
                    state.err_validate_detail = {};
                    this.dispatch('user/get_user_info', user.ma_nguoi_dung);
                    user = { ma_nguoi_dung: user.ma_nguoi_dung };
                } else {
                    state.user_info = Object.assign(state.user_info, user);
                    if (typeof response.data.message === 'string') {
                        state.err_validate_global = response.data.message
                    } else {
                        state.err_validate_detail = response.data.message;
                    }
                }
            }).catch((error) => {
                console.error(error);
            })
        }
    },

}
