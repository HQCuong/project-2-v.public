import getCookie from "./customfunc/getCookie.js";

// import store
import store from "./store/store.js";

// home
import home from "./components/home/HomeComponent.vue";

// general
import thong_tin_lab from "./components/general/Lab.vue";

// ky thuat
import lab from "./components/kythuat/Lab.vue";
import danh_sach_lab from "./components/kythuat/components/lab/DanhSachLab.vue";
import them_lab from "./components/kythuat/components/lab/ThemLab.vue";
import update_lab from "./components/kythuat/components/lab/UpdateLab.vue";

import cau_hinh from "./components/kythuat/CauHinh.vue";
import danh_sach_cau_hinh from "./components/kythuat/components/cauhinh/DanhSachCauHinh.vue";
import them_cau_hinh from "./components/kythuat/components/cauhinh/ThemCauHinh.vue";
import update_cau_hinh from "./components/kythuat/components/cauhinh/UpdateCauHinh.vue";

import thiet_bi from "./components/kythuat/ThietBi.vue";
import danh_sach_thiet_bi from "./components/kythuat/components/thietbi/DanhSachThietBi.vue";
import them_thiet_bi from "./components/kythuat/components/thietbi/ThemThietBiComponent.vue";

// giao vien
import lich_gv from "./components/giaovien/GiaoVienComponent.vue";

// giao vu
import quan_ly_lich from "./components/giaovu/QuanLyLichComponent.vue";
import list_dayoff from "./components/giaovu/quanlylichchild/ListDayoffComponent.vue";
import adddayoff from "./components/giaovu/quanlylichchild/AddDayoffComponent.vue";
import add_work from "./components/giaovu/quanlylichchild/AddWorkComponent.vue";
import xem_phan_cong from "./components/giaovu/quanlylichchild/ListPhanCongComponent.vue";
import phan_cong from "./components/giaovu/quanlylichchild/PhanCongComponent.vue";

import user from "./components/giaovu/QuanLyUserComponent.vue";
import list_user from "./components/giaovu/userchild/ListUserComponent.vue";
import modi_user_info from "./components/giaovu/userchild/ModiInfoUserComponent.vue";

// user-general
import user_info from "./components/nguoidung/UserProfileComponent.vue";
import forgot_password from "./components/nguoidung/ForgotPassComponent.vue";

// error
import error_url from "./components/error/CantDirectComponent.vue";
import error_author from "./components/error/AuthorErrComponent.vue";

export default [
    // general
    { path: "/home", name: "home", component: home },

    { path: "/xem_thong_tin_lab", component: thong_tin_lab },

    // ky thuat
    {
        path: "/quan_ly_lab",
        component: lab,
        children: [
            { path: "danh_sach_lab", component: danh_sach_lab },
            { path: "them_lab", component: them_lab },
            { path: "update_lab", component: update_lab },
            { path: "modi_lab/:ma_lab", component: update_lab }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie("level") == 1 || getCookie("level") == 2) {
                next();
            } else {
                next("/err_author");
            }
        }
    },
    {
        path: "/quan_ly_cau_hinh",
        component: cau_hinh,
        children: [
            { path: "danh_sach_cau_hinh", component: danh_sach_cau_hinh },
            { path: "them_cau_hinh", component: them_cau_hinh },
            { path: "update_cau_hinh", component: update_cau_hinh }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie("level") == 1 || getCookie("level") == 2) {
                next();
            } else {
                next("/err_author");
            }
        }
    },
    {
        path: "/quan_ly_thiet_bi",
        component: thiet_bi,
        children: [
            { path: "danh_sach_thiet_bi", component: danh_sach_thiet_bi },
            { path: "them_thiet_bi", component: them_thiet_bi }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie("level") == 1 || getCookie("level") == 2) {
                next();
            } else {
                next("/err_author");
            }
        }
    },

    // giao vien
    {
        path: "/xem_lich",
        component: lich_gv,
        beforeEnter: (to, from, next) => {
            if (getCookie("level") == 1) {
                next();
            } else if (getCookie("level") == 3) {
                store.state.user.is_giao_vien = true;
                next();
            } else {
                next("/err_author");
            }
        }
    },

    // giao vu
    {
        path: "/quan_ly_lich",
        component: quan_ly_lich,
        children: [
            { path: "xem_lich_nghi", component: list_dayoff },
            { path: "add_dayoff", component: adddayoff },
            { path: "add_work", component: add_work },
            { path: "xem_phan_cong", component: xem_phan_cong },
            { path: "phan_cong", component: phan_cong }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie("level") == 1) {
                next();
            } else {
                next("/err_author");
            }
        }
    },
    {
        path: "/quan_ly_user",
        component: user,
        children: [
            { path: "list_user", component: list_user },
            { path: "modi_user_info", component: modi_user_info },
            { path: "modi_user_info/:ma_nguoi_dung", component: modi_user_info }
        ],
        beforeEnter: (to, from, next) => {
            if (getCookie("level") == 1) {
                next();
            } else {
                next("/err_author");
            }
        }
    },

    // user
    { path: "/profile", component: user_info },
    { path: "/forgot_password", component: forgot_password },

    // error
    { path: "/err_author", component: error_author },
    { path: "*", component: error_url }
];
