import getCookie from './customfunc/getCookie.js';

// import store
import store from './store/store.js';

// home
import home from './components/home/HomeComponent.vue';

// general
import thong_tin_lab from './components/general/ShowLabComponent.vue';


// ky thuat
import lab from './components/kythuat/QuanLyLabComponent.vue';
import list_lab from './components/kythuat/modilabchild/ListLabComponent.vue';
import add_lab from './components/kythuat/modilabchild/AddLabComponent.vue';
import modi_lab from './components/kythuat/modilabchild/ModiLabComponent.vue';

import cau_hinh from './components/kythuat/CauHinhComponent.vue';
import list_ch from './components/kythuat/cauhinhchild/ListCauHinhComponent.vue';
import add_ch from './components/kythuat/cauhinhchild/AddCauHinhComponent.vue';
import modi_ch from './components/kythuat/cauhinhchild/ModiCauHinhComponent.vue';

import thiet_bi from './components/kythuat/ThietBiComponent.vue';
import list_thiet_bi from './components/kythuat/thietbichild/ListThietBiComponent.vue';
import add_thiet_bi from './components/kythuat/thietbichild/AddThietBiComponent.vue';


// giao vien
import lich_gv from './components/giaovien/GiaoVienComponent.vue';


// giao vu
import quan_ly_lich from './components/giaovu/QuanLyLichComponent.vue';
import dayoff from './components/giaovu/quanlylichchild/DayoffComponent.vue';
import add_work from './components/giaovu/quanlylichchild/AddWorkComponent.vue';

import user from './components/giaovu/QuanLyUserComponent.vue';
import list_user from './components/giaovu/userchild/ListUserComponent.vue';
import modi_user_info from './components/giaovu/userchild/ModiInfoUserComponent.vue';


// user-general
import user_info from './components/nguoidung/UserProfileComponent.vue';
import forgot_password from './components/nguoidung/ForgotPassComponent.vue';


// error
import error_url from './components/error/CantDirectComponent.vue';
import error_author from './components/error/AuthorErrComponent.vue';


export default [
    // general
    { path: '/home', name: 'home', component: home },

    { path: '/xem_thong_tin_lab', component: thong_tin_lab },

    // ky thuat
    {
        path: '/quan_ly_lab',
        component: lab,
        children: [
            { path: 'danh_sach_lab', component: list_lab },
            { path: 'add_lab', component: add_lab },
            { path: 'modi_lab', component: modi_lab },
            { path: 'modi_lab/:ma_lab', component: modi_lab }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie('level') == 1 || getCookie('level') == 2) {
                next();
            } else {
                next('/err_author');
            }
        }
    },
    {
        path: '/quan_ly_cau_hinh',
        component: cau_hinh,
        children: [
            { path: 'list_cau_hinh', component: list_ch },
            { path: 'them_cau_hinh', component: add_ch },
            { path: 'modi_cau_hinh', component: modi_ch }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie('level') == 1 || getCookie('level') == 2) {
                next();
            } else {
                next('/err_author');
            }
        }
    },
    {
        path: '/quan_ly_thiet_bi',
        component: thiet_bi,
        children: [
            { path: 'danh_sach_thiet_bi', component: list_thiet_bi },
            { path: 'add_thiet_bi', component: add_thiet_bi }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie('level') == 1 || getCookie('level') == 2) {
                next();
            } else {
                next('/err_author');
            }
        }
    },

    // giao vu
    {
        path: '/xem_lich',
        component: lich_gv,
        beforeEnter: (to, from, next) => {
            if (getCookie('level') == 1) {
                next();
            } else if (getCookie('level') == 3) {
                store.state.user.is_giao_vien = true;
                next();
            } else {
                next('/err_author');
            }
        }
    },

    // giao vu
    {
        path: '/quan_ly_lich',
        component: quan_ly_lich,
        children: [
            { path: 'add_dayoff', component: dayoff },
            { path: 'add_work', component: add_work }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie('level') == 1) {
                next();
            } else {
                next('/err_author');
            }
        }
    },
    {
        path: '/quan_ly_user',
        component: user,
        children: [
            { path: 'list_user', component: list_user },
            { path: 'modi_user_info', component: modi_user_info },
            { path: 'modi_user_info/:ma_nguoi_dung', component: modi_user_info }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie('level') == 1) {
                next();
            } else {
                next('/err_author');
            }
        }
    },


    // user
    { path: '/profile', component: user_info },
    { path: '/forgot_password', component: forgot_password },

    // error
    { path: '/err_author', component: error_author },
    { path: '*', component: error_url }
]
