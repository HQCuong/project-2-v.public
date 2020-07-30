import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import ca from "./modules/Ca.js";
import cau_hinh from "./modules/CauHinh.js";
import content from "./modules/Content.js";
import lab from "./modules/Lab.js";
import mon from "./modules/Mon.js";
import ngay_nghi from "./modules/Ngaynghi.js";
import phan_cong from "./modules/PhanCong.js";
import tang from "./modules/Tang.js";
import toa from "./modules/Toa.js";
import user from "./modules/User.js";

export default new Vuex.Store({
    modules: {
        content: content,
        lab: lab,
        user: user,
        toa: toa,
        tang: tang,
        cau_hinh: cau_hinh,
        mon: mon,
        ca: ca,
        ngay_nghi: ngay_nghi,
        phan_cong: phan_cong
    }
});
