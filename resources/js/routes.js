import home from './components/HomeComponent.vue';

import thong_tin_lab from './components/general/ShowLabComponent.vue';

import quan_ly_lab from './components/kythuat/ModiLabComponent.vue';
import cau_hinh_mon from './components/kythuat/CauHinhMonComponent.vue';

import lich_gv from './components/giaovien/LichGiaoVienComponent.vue';

import ngay_nghi from './components/giaovu/NgayNghiComponent.vue';
import them_lich_hoc from './components/giaovu/ThemLichComponent.vue';

import user_info from './components/nguoidung/UserProfileComponent.vue';
import account_setting from './components/nguoidung/AccountSettingComponent.vue';


export default [
	{ path: '/', component: home},

    { path: '/xem_thong_tin_lab', component: thong_tin_lab },

    { path: '/quan_ly_lab', component: quan_ly_lab },
    { path: '/cau_hinh_mon', component: cau_hinh_mon },

    { path: '/xem_lich', component: lich_gv },

    { path: '/them_ngay_nghi', component: ngay_nghi },
    { path: '/them_lich_hoc', component: them_lich_hoc },

    { path: '/profile', component: user_info }, 
    { path: '/account_setting', component: account_setting } 
]