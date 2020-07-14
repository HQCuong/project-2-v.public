import getCookie from '../../customfunc/getCookie.js';


export default {
    namespaced: true,
    state: {
        is_giao_vien: false,
        arr_user: [],
        user_info: {}
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
            var body_obj = {
                key: getCookie('key'),
                email: user.email,
                tai_khoan: user.tai_khoan,
                sdt: user.sdt,
                password: user.password
            }

            var x = Object.keys(body_obj);

            for(var each of x) {
                console.log(body_obj.each);
            }

            // axios.post(`http://localhost:8080/project-2/public/api/nguoidung/capnhatthongtin/${user.ma_nguoi_dung}`, {
            //   body_obj
            // }).then((response) => {
            //     console.log(response);
            // }).catch((error) => {
            //   console.error(error);
            // })
        }
    },

}
