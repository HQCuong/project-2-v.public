import getCookie from "../../customfunc/getCookie.js";
import Vue from "vue";
import formatEvents from "../../customfunc/formatEvents";

export default {
    namespaced: true,
    state: {
        lich_lam_viec: [],
        lich_ket_thuc: ""
    },
    mutations: {
        reset_lich_lam_viec(state) {
            state.lich_lam_viec = [];
        }
    },
    actions: {
        get_lich_lam_viec({ state, commit, rootState }, ma_giao_vien) {
            state.lich_lam_viec = [];
            state.lich_ket_thuc = "";
            var obj = {
                key: getCookie("key")
            };
            if (ma_giao_vien) {
                obj.ma_giao_vien = ma_giao_vien;
            }
            axios
                .post(`api/lichhoc/giaovien`, obj)
                .then(res => {
                    state.lich_lam_viec = formatEvents(res.data.data);
                })
                .catch(err => {
                    console.error(err);
                });
        },
        get_lich_lam_viec_by_phan_cong(
            { state, commit, rootState },
            ma_phan_cong
        ) {
            state.lich_lam_viec = [];
            state.lich_ket_thuc = "";
            axios
                .post(`api/lichhoc/dukienketthuc`, {
                    key: getCookie("key"),
                    ma_phan_cong: ma_phan_cong
                })
                .then(res => {
                    state.lich_ket_thuc = res.data.message;
                    state.lich_lam_viec = formatEvents(
                        res.data.data.lich_day,
                        true
                    );
                })
                .catch(err => {
                    console.error(err);
                });
        }
    }
};
