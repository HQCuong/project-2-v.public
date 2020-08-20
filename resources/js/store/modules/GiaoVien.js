import getCookie from "../../customfunc/getCookie.js";
import groupCollection from "../../customfunc/groupCollection.js";
import Vue from "vue";

export default {
    namespaced: true,
    state: {
        lich_lam_viec: []
    },
    mutations: {
        reset_lich_lam_viec(state) {
            state.lich_lam_viec = [];
        }
    },
    actions: {
        get_lich_lam_viec({ state, commit, rootState }, ma_giao_vien) {
            state.lich_lam_viec = [];

            var ev1 = {
                title: "WEB",
                start: "2020-08-03" + "T10:00:00",
                end: "2020-08-03" + "T12:00:00"
            };

            state.lich_lam_viec.push(ev1);

            var ev2 = {
                title: "SQL1",
                start: "2020-08-15" + "T08:00:00",
                end: "2020-08-15" + "T12:00:00"
            };
            state.lich_lam_viec.push(ev2);
        }
    }
};
