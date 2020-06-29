import home from './components/home/HomeComponent.vue';

// general
import thong_tin_lab from './components/general/ShowLabComponent.vue';


// ky thuat
import lab from './components/kythuat/QuanLyLabComponent.vue';
import list_lab from './components/kythuat/modilabchild/ListLabComponent.vue';
import add_lab from './components/kythuat/modilabchild/AddLabComponent.vue';

import cau_hinh from './components/kythuat/CauHinhComponent.vue';
import thiet_bi from './components/kythuat/ThietBiComponent.vue';


// giao vien
import lich_gv from './components/giaovien/GiaoVienComponent.vue';


// giao vu
import lich_day from './components/giaovu/QuanLyLichComponent.vue';
import user from './components/giaovu/QuanLyUserComponent.vue';


// user
import user_info from './components/nguoidung/UserProfileComponent.vue';
import account_setting from './components/nguoidung/AccountSettingComponent.vue';


// error
import error_url from './components/error/CantDirectComponent.vue';


export default [
	{ path: '/home', component: home},

    { path: '/xem_thong_tin_lab', component: thong_tin_lab },

    { path: '/quan_ly_lab', component: lab, 
        children: [
            { path: 'danh_sach_lab', component: list_lab},
            { path: 'add_lab', component: add_lab}
        ]
    },
    { path: '/quan_ly_cau_hinh', component: cau_hinh },
    { path: '/quan_ly_thiet_bi', component: thiet_bi },

    { path: '/xem_lich', component: lich_gv },

    { path: '/quan_ly_lich', component: lich_gv },
    { path: '/quan_ly_nguoi_dung', component: user },

    { path: '/profile', component: user_info }, 
    { path: '/account_setting', component: account_setting },

    { path: '*', component: error_url} 
]
