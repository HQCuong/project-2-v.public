import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import content from './modules/Content.js';
import giao_vien from './modules/GiaoVien.js';
import lab from './modules/Lab.js';
import user from './modules/User.js';
import toa from './modules/Toa.js';
import tang from './modules/Tang.js';
import cau_hinh from './modules/CauHinh.js';
import mon from './modules/Mon.js';
import ca from './modules/Ca.js';

export default new Vuex.Store({
    modules: {
        content: content,
        giao_vien: giao_vien,
        lab: lab,
        user: user,
        toa: toa,
        tang: tang,
        cau_hinh: cau_hinh,
        mon: mon,
        ca: ca
    }
})
