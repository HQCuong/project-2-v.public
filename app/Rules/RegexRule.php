<?php

namespace App\Rules;

class RegexRule {
    //Nguoi Dung
    const REGEX_EMAIL_RULE     = ['regex:/^[a-z][a-z0-9_\.]{5,32}@gmail\.com$/', 'unique:nguoi_dung,email'];
    const REGEX_SDT_RULE       = ['regex:/^(?:09|03|05|07|08|\+84)[0-9]{8}$/', 'unique:nguoi_dung,sdt'];
    const REGEX_USER_NAME_RULE = ['regex:/^[\w,\b]{4,20}$/', 'unique:nguoi_dung,tai_khoan'];
    const REGEX_PASSWORD_RULE  = ['regex:/^[a-f0-9]{32}$/'];
    //Toa
    const REGEX_TOA_NAME       = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,19}$/'];
    const REGEX_TOA_DIA_CHI    = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,99}$/'];
    const REGEX_TOA_TINH_TRANG = ['regex:/^[0,1]$/'];

    //Tầng
    const REGEX_TANG_NAME       = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,19}$/'];
    const REGEX_TANG_MA_TOA     = ['exists:toa,ma_toa'];
    const REGEX_TANG_MA_TANG    = ['exists:tang,ma_tang'];
    const REGEX_TANG_TINH_TRANG = ['regex:/^[0,1]$/'];

    const REGEX_PHONG_MA_PHONG    = ['exists:phong,ma_phong'];
    const REGEX_PHONG_TINH_TRANG  = ['exists:tinh_trang,ma_tinh_trang'];
    const REGEX_PHONG_NAME        = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,19}$/'];
    const REGEX_PHONG_SO_CHO_NGOI = ['regex:/^[1-9][0-9]?$/'];
    ///Loai
    const REGEX_LOAI_MA_LOAI  = ['exists:loai,ma_loai'];
    const REGEX_LOAI_TEN_LOAI = ['regex:/^[a-zA-z0-9\_]{5,100}$/', 'unique:loai,ten_loai'];
    const REGEX_LOAI_MO_TA    = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,500}$/'];

    ///Cấu Hình
    const REGEX_CAU_HINH_CPU         = ['regex:/^[a-zA-Z0-9\,\ \_\-\+\/]{5,40}$/'];
    const REGEX_CAU_HINH_RAM         = ['regex:/^[1-9][0-9]?$/'];
    const REGEX_CAU_HINH_MAIN        = ['regex:/^[a-zA-Z0-9\,\ \_\-\+\/]{5,40}$/'];
    const REGEX_CAU_HINH_O_CUNG      = ['regex:/^[a-zA-Z0-9\,\ \_\-\+\/]{5,40}$/'];
    const REGEX_CAU_HINH_MA_CAU_HINH = ['exists:cau_hinh,ma_cau_hinh'];
    const REGEX_CAU_HINH_MO_TA       = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,500}$/'];
    const REGEX_CAU_HINH_MA_LOAI     = ['exists:loai,ma_loai'];

    //Cấu Hình Môn

    const REGEX_CAU_HINH_MON_MA_MON_HOC = ['exists:mon_hoc,ma_mon_hoc'];
}
