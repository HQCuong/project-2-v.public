<?php

namespace App\Rules;

class RegexRule {
	//Nguoi Dung
	const regex_email_rule = ['regex:/^[a-z][a-z0-9_\.]{5,32}@gmail\.com$/', 'unique:nguoi_dung,email'];
	const regex_sdt_rule = ['regex:/^(?:09|03|05|07|08|\+84)[0-9]{8}$/', 'unique:nguoi_dung,sdt'];
	const regex_user_name_rule = ['regex:/^[\w,\b]{4,20}$/', 'unique:nguoi_dung,tai_khoan'];
	const regex_password_rule = ['regex:/^[a-f0-9]{32}$/'];
	//Toa
	const regex_toa_name = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,19}$/'];
	const regex_toa_dia_chi = ['regex:/^\w[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]{5,99}$/'];
	const regex_toa_tinh_trang = ['regex:/^[0,1]$/'];
}
