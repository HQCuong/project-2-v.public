import home from './components/home/HomeComponent.vue';

// general
import thong_tin_lab from './components/general/ShowLabComponent.vue';


// ky thuat
import lab from './components/kythuat/QuanLyLabComponent.vue';
import list_lab from './components/kythuat/modilabchild/ListLabComponent.vue';
import add_lab from './components/kythuat/modilabchild/AddLabComponent.vue';

import cau_hinh from './components/kythuat/CauHinhComponent.vue';
import add_ch from './components/kythuat/CauhinhChild/AddCauHinhComponent.vue';
import modi_ch from './components/kythuat/CauhinhChild/ModiCauHinhComponent.vue';
import ch_mon from './components/kythuat/CauhinhChild/CauHinhMonComponent.vue';

import thiet_bi from './components/kythuat/ThietBiComponent.vue';


// giao vien
import lich_gv from './components/giaovien/GiaoVienComponent.vue';


// giao vu
import quan_ly_lich from './components/giaovu/QuanLyLichComponent.vue';
import user from './components/giaovu/QuanLyUserComponent.vue';


// user
import user_info from './components/nguoidung/UserProfileComponent.vue';
import account_setting from './components/nguoidung/AccountSettingComponent.vue';


// error
import error_url from './components/error/CantDirectComponent.vue';


export default [
    // general
	{ path: '/home', component: home},

    { path: '/xem_thong_tin_lab', component: thong_tin_lab },

    // ky thuat
    { path: '/quan_ly_lab', component: lab, 
        children: [
            { path: 'danh_sach_lab', component: list_lab},
            { path: 'add_lab', component: add_lab}
        ]
    },
    { path: '/quan_ly_cau_hinh', component: cau_hinh, 
        children: [
            { path: 'them_cau_hinh', component: add_ch},
            { path: 'modi_cau_hinh', component: modi_ch},
            { path: 'cau_hinh_mon', component: ch_mon}
        ]
    },

    { path: '/quan_ly_thiet_bi', component: thiet_bi },

    // giao vu
    { path: '/xem_lich', component: lich_gv },

    // giao vu
    { path: '/quan_ly_lich', component: quan_ly_lich },
    { path: '/quan_ly_nguoi_dung', component: user },


    // user
    { path: '/profile', component: user_info }, 
    { path: '/account_setting', component: account_setting },

    // error
    { path: '*', component: error_url} 
]
