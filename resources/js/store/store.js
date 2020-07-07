import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import content from './modules/Content.js';
import giaovien from './modules/GiaoVien.js';
import general from './modules/General.js';
import user from './modules/User.js';

export default new Vuex.Store({
    modules: {
        content: content,
        giaovien: giaovien,
        general: general,
        user: user
    }
})
