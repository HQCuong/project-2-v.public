import getCookie from "../../customfunc/getCookie";

export default {
    namespaced: true,
    state: {
        lich_su_dung: [],
        arr_lab: []
    },
    mutations: {
        reset_lich_su_dung(state) {
            state.lich_su_dung = [];
        },
        reset_arr_lab(state) {
            state.arr_lab = [];
        }
    },
    actions: {
        get_lab({ state, commit, rootState }, ma_tang) {
            state.arr_lab = [];
            state.arr_lab = [
                {
                    ma_phong: 1,
                    ten_phong: "lab 201",
                    cho_ngoi: 25,
                    may: 25,
                    cau_hinh: "cau_hinh 1",
                    tinh_trang: "Hoạt động"
                },
                {
                    ma_phong: 2,
                    ten_phong: "lab 202",
                    cho_ngoi: 25,
                    may: 25,
                    cau_hinh: "cau_hinh 2",
                    tinh_trang: "Hoạt động"
                },
                {
                    ma_phong: 3,
                    ten_phong: "lab 203",
                    cho_ngoi: 30,
                    may: 30,
                    cau_hinh: "cau_hinh 2",
                    tinh_trang: "Hoạt động"
                },
                {
                    ma_phong: 4,
                    ten_phong: "lab 204",
                    cho_ngoi: 20,
                    may: 15,
                    cau_hinh: "cau_hinh 2",
                    tinh_trang: "Bảo trì"
                }
            ];
            axios
                .post(`api/phong`, {
                    key: getCookie("key")
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        get_lich_su_dung({ state, commit, rootState }) {
            state.lich_su_dung = [];

            var ev1 = {
                title: "BKD01K10",
                start: "2020-08-03" + "T10:00:00",
                end: "2020-08-03" + "T12:00:00"
            };

            state.lich_su_dung.push(ev1);

            var ev2 = {
                title: "BKD01K10",
                start: "2020-08-15" + "T08:00:00",
                end: "2020-08-15" + "T12:00:00"
            };
            state.lich_su_dung.push(ev2);
        }
    }
};
