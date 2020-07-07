import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import content from './modules/Content.js';
import giaovien from './modules/GiaoVien.js';
import lab from './modules/Lab.js';
import user from './modules/User.js';
import toa from './modules/Toa.js';
import tang from './modules/Tang.js';

export default new Vuex.Store({
    modules: {
        content: content,
        giaovien: giaovien,
        lab: lab,
        user: user,
        toa: toa,
        tang: tang
    }
})
