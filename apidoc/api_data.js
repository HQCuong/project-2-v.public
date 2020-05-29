define({ "api": [
  {
    "type": "POST",
    "url": "/nguoidung/check/key",
    "title": "9. Kiểm tra KEY của người dùng có hợp lệ không",
    "version": "0.1.0",
    "name": "Check_KEY",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để kiểm tra key của người dùng cung cấp</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/nguoidung/check/key"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/check/key\n{\n\t\"key\" => \"key\",\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của người dùng.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Báo kết quả xử lý.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/create",
    "title": "1. Tạo Người Dùng",
    "version": "0.1.0",
    "name": "Create",
    "group": "NguoiDung",
    "description": "<p>Dùng để tạo người dùng là giáo viên<br> -Lưu ý: <br> +Chức năng chỉ dảnh cho Giáo Vụ<br> +Cần gửi đầy đủ các dữ liệu được yêu cầu.<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/nguoidung/create"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/create\n{\n    \"key\": \"1\",\n    \"tai_khoan\": \"demo\",\n    \"email\": \"hdgggvjhg@gmail.com\",\n    \"sdt\": \"0984578452\",\n    \"mat_khau\": \"c4ca4238a0b923820dcc509a6f75849b\"\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Giáo Vụ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tai_khoan",
            "description": "<p>Tài khoản muốn tạo từ 4-20 kí tự chỉ bao gồm số và chữ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Từ 5-32(không tính @gmail.com) kí tự chỉ hỗ trợ @gmail.com.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sdt",
            "description": "<p>Số điện thoại thật.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mat_khau",
            "description": "<p>Mã Has MD5.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu của tài khoản mới.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"Tạo tài khoản thành công\",\n    \"data\": {\n        \"ma_nguoi_dung\": 6,\n        \"tai_khoan\": \"demo1\",\n        \"email\": \"hdgggvjdhg@gmail.com\",\n        \"sdt\": \"0984578453\",\n        \"ten_cap_do\": \"Giáo Viên\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n+ Có nhiều dạng trả về không thành công như email,mat_khau,sdt,tai_khoan bị trùng hoặc vi phạm quy tắc\n+ \"key\" không có quyền tạo người dùng\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Email hoặc SĐT có thể đã bị trùng hoặc không hợp lệ\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/resetpassword",
    "title": "5. Khôi Phục Mật Khẩu",
    "version": "0.1.0",
    "name": "Khôi_Phục_Mật_Khẩu",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để khôi phục mật khẩu cho tài khoản</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/nguoidung/resetpassword"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/resetpassword\n{\n\t\"email\" => \"demo@gmail.com\",\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email của người dùng.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Báo kết quả xử lý.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu sau khi xử lý.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Chức năng chưa phát triển\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Chức năng chưa phát triển\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/check/duplicate",
    "title": "8. Kiểm Tra Quy Tắc",
    "version": "0.1.0",
    "name": "Kiểm_Tra_Quy_Tắc",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để kiểm tra quy tắc hợp lệ cũng như trong hệ thống đã có chưa: <br> -Các phương thức áp dụng Email,SDT,Tai_khoan<br> -Lưu ý: <br> +Chức năng dành cho tất cả user phục vụ cho việc đổi thông tin<br> +Phục vụ cho Giáo Vụ khi tạo tài khoản<br> +Cần kiểm tra dữ liệu nào thì truyền tương ứng<br> +Có thể truyền 1,2 hoặc tất cả các dữ liệu<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/nguoidung/check/duplicate"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/check/duplicate\n{\n\t\"key\" => \"key\",\n\t\"email\" => \"demo@gmail.com\",\n\t\"sdt\" => \"0847512965\",\n\t\"tai_khoan\" => \"newuser\",\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của người dùng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tai_khoan",
            "description": "<p>Dữ liệu cần kiểm tra.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Dữ liệu cần kiểm tra.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sdt",
            "description": "<p>Dữ liệu cần kiểm tra.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Báo kết quả xử lý.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu sau khi xử lý.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "+ Có nhiều dạng trả về không thành công như email,mat_khau,sdt,tai_khoan bị trùng hoặc vi phạm quy tắc\n+ \"key\" không có quyền tạo người dùng\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n    HTTP/1.1 401 Unauthorized\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Email có thể đã bị trùng hoặc không hợp lệ\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/view/list",
    "title": "7. Hiển Thị Danh Sách Kĩ Thuật Và Giáo Viên Trong Hệ Thống",
    "version": "0.1.0",
    "name": "LIST_GV_KT",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để hiển thị danh sách Kĩ Thuật Và Giáo Viên<br> -Lưu ý: <br> +Chức năng chỉ dảnh cho Giáo Vụ<br> +Chưa có phân trang (sẽ update nếu cần)<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/nguoidung/view/list"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/view/list\n{\n\t\"key\" => \"key\",\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Giáo Vụ.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Báo kết quả xử lý.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu sau khi xử lý.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"ma_nguoi_dung\": 2,\n            \"tai_khoan\": \"user\",\n            \"email\": \"dsjsvkh@gmail.com\",\n            \"sdt\": \"0847512965\",\n            \"ten_cap_do\": \"Kĩ Thuật\"\n        },\n        {\n            \"ma_nguoi_dung\": 4,\n            \"tai_khoan\": \"cuong\",\n            \"email\": \"d@gmail.com\",\n            \"sdt\": \"4\",\n            \"ten_cap_do\": \"Giáo Viên\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/login/{tai_khoan}/{mat_khau}",
    "title": "2. Đăng nhập",
    "version": "0.1.0",
    "name": "Login",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để đăng nhập vào hệ thông với tài khoản và mật khẩu</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/login"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/login/admin/1",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tai_khoan",
            "description": "<p>Email hoặc Username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mat_khau",
            "description": "<p>Mật khẩu của người dùng.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã đại diện được cấp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"ma_nguoi_dung\": 3,\n        \"tai_khoan\": \"duong\",\n        \"email\": \"c@gmail.com\",\n        \"sdt\": \"2\",\n        \"ma_cap_do\": 0,\n        \"ten_cap_do\": \"Giáo Vụ\",\n        \"key\": \"user_key\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Đăng nhập thất bại kiểm tra lại tài khoản hoặc mật khẩu\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/update/info/{id}",
    "title": "6. Thay Đổi Thông Tin Của Tài Khoản",
    "version": "0.1.0",
    "name": "Thay_Đổi_Thông_Tin_Của_Tài_Khoản",
    "group": "NguoiDung",
    "description": "<p>Sử dụng thay đổi thông tin tài khoản<br> -Lưu ý: <br> +Email,Sdt,mat_khau phải tuân thủ quy tắc như khi tạo tài khoản<br> +Có thể truyền yếu tố thay đổi không bắt buộc truyền tất cả<br> +Nếu là giáo vụ mới được phép thay đổi thông tin của Giáo Viên hoặc Kĩ Thuật<br> +Nếu là Giáo Viên hoặc Kĩ Thuật có thể để &quot;id&quot; ngẫu nhiên nhưng vẫn sẽ thay đổi thông tin tài khoản của chính họ<br> +Giáo Vụ không được đổi thông tin của giáo vụ khác<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/nguoidung/update/info"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/update/info/2\n{\n\t\"key\" => \"key\",\n\t\"email\" => \"demo@gmail.com\",\n\t\"sdt\" => \"0847512965\",\n\t\"mat_khau\" => \"c4ca4238a0b923820dcc509a6f75849b\",\n\t\"tai_khoan\" => \"newuser\",\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Giáo Vụ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tai_khoan",
            "description": "<p>Tài khoản muốn tạo từ 4-20 kí tự chỉ bao gồm số và chữ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Từ 5-32(không tính @gmail.com) kí tự chỉ hỗ trợ @gmail.com.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sdt",
            "description": "<p>Số điện thoại thật.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mat_khau",
            "description": "<p>Mã Has MD5.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Báo kết quả xử lý.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu sau khi xử lý.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"Thay đổi thông tin thành công\",\n    \"data\": {\n        \"ma_nguoi_dung\": 4,\n        \"tai_khoan\": \"duong\",\n        \"email\": \"dsjsvkh@gmail.com\",\n        \"sdt\": \"0847512965\",\n        \"ma_cap_do\": 1,\n        \"ten_cap_do\": \"Kĩ Thuật\",\n        \"key\": \"new_key\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "+ Có nhiều dạng trả về không thành công như email,mat_khau,sdt,tai_khoan bị trùng hoặc vi phạm quy tắc\n+ \"key\" không có quyền tạo người dùng\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n    HTTP/1.1 401 Unauthorized\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Chức năng chưa phát triển\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/logout:key",
    "title": "3. Đăng Xuất",
    "version": "0.1.0",
    "name": "Đăng_Xuất",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để đăng xuất cho tài khoản</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/logout"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/logout\n{\n    \"key\": \"1\",\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Người Dùng.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Báo kết quả xử lý.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"Đăng xuất thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/changepassword",
    "title": "4. Đổi Mật Khẩu",
    "version": "0.1.0",
    "name": "Đổi_Mật_Khẩu",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để đổi mật khẩu cho tài khoản</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/nguoidung/changepassword"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/changepassword\n{\n\t\"key\" => \"0\",\n\t\"mat_khau\" => \"c4ca4238a0b923820dcc509a6f75849b\",\n\t\"mat_khau_moi\" => \"c81e728d9d4c2f636f067f89cc14862c\"\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Người Dùng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mat_khau",
            "description": "<p>Mật khẩu hiện tại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mat_khau_moi",
            "description": "<p>Mật khẩu mới cho tài khoản.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Báo kết quả xử lý.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu tài khoản sau khi đổi mật khẩu.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"Đổi mật khẩu thành công\",\n    \"data\": {\n        \"ma_nguoi_dung\": 1,\n        \"tai_khoan\": \"admin\",\n        \"email\": \"a@gmail.com\",\n        \"sdt\": \"0\",\n        \"ma_cap_do\": 0,\n        \"ten_cap_do\": \"Giáo Vụ\",\n        \"key\": \"new_key\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "toa/check/info",
    "title": "3. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Check",
    "group": "Toa",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br> -Lưu ý : <br> +Có thể truyền 1 hay nhiều yếu tố +Sẽ chỉ trả về lỗi của yếu tố đầu tiên +Nếu trả về hợp lệ là tất cả đều hợp lệ</p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/toa/check/info"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/toa/check/info\n{\n\t\"key\" => \"1\"\n\t\"ten_toa\" => \"fff\"\n\t\"dia_chi\" => \"Địa chỉ mới\"\n\t\"tinh_trang\" => \"0\"\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Giáo Vụ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_toa",
            "description": "<p>từ 6-20 kí tự,kí tự bắt đầu phải là chữ (VD nếu Ă thì tính là 2 kí tự).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dia_chi",
            "description": "<p>từ 6-100 kí tự,kí tự bắt đầu phải là chữ (VD nếu Ă thì tính là 2 kí tự).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>+Tình Trạng 0 hoặc 1.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu của Tòa sau khi chỉnh sửa.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n+ Có nhiều dạng trả về không thành công như key sai,dia_chi hay ten_toa không hợp lệ\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Tên tòa không hợp lệ (từ 6-20 kí tự)\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/toa.php",
    "groupTitle": "Toa"
  },
  {
    "type": "POST",
    "url": "toa/show/{ma_toa}",
    "title": "1. Hiển thị tông tin các tòa hoặc một tòa",
    "version": "0.1.0",
    "name": "Show",
    "group": "Toa",
    "description": "<p>Dùng để hiện thị thông tin tòa<br> -Lưu ý: <br> +Chức năng chỉ dảnh cho Giáo Vụ<br> +Cần lấy thông tin tòa nào hãy thay thế đó vào chỗ &quot;ma_toa&quot;<br> +Cần trả về danh sách thông tin tất cả các tòa thì &quot;ma_toa&quot; thay bằng &quot;all&quot;<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/toa/show/all"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/toa/show/all\n{\n    \"key\": \"1\",\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Giáo Vụ.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu của Tòa.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"ma_toa\": 1,\n            \"ten_toa\": \"Tòa 1\",\n            \"dia_chi\": \"A17 Tạ Quang Bửu\",\n            \"tinh_trang\": 1,\n            \"ten_tinh_trang\": \"Hoạt Động\"\n        },\n        {\n            \"ma_toa\": 2,\n            \"ten_toa\": \"Thu Nghiem 1\",\n            \"dia_chi\": \"svkshv sdjkvksjdh dsjkvhs\",\n            \"tinh_trang\": 1,\n            \"ten_tinh_trang\": \"Hoạt Động\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/toa.php",
    "groupTitle": "Toa"
  },
  {
    "type": "POST",
    "url": "toa/update/{ma_toa}",
    "title": "2. Cập nhật thông tin cho một tòa",
    "version": "0.1.0",
    "name": "Update",
    "group": "Toa",
    "description": "<p>Dùng để cập nhật thông tin cho các tòa<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/github/pri/public/api/toa/update/2"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/toa/update/2\n{\n\t\"key\" => \"1\"\n\t\"ten_toa\" => \"Tên Mới\"\n\t\"dia_chi\" => \"Địa chỉ mới\"\n\t\"tinh_trang\" => \"0\"\n}",
        "type": "php"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Mã Key của Giáo Vụ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_toa",
            "description": "<p>từ 6-20 kí tự,kí tự bắt đầu phải là chữ (VD nếu Ă thì tính là 2 kí tự).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dia_chi",
            "description": "<p>từ 6-100 kí tự,kí tự bắt đầu phải là chữ (VD nếu Ă thì tính là 2 kí tự).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>+Tình Trạng 0 hoặc 1.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Dữ liệu của Tòa sau khi chỉnh sửa.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"ma_toa\": 2,\n        \"ten_toa\": \"Tên Mới\",\n        \"dia_chi\": \"Địa chỉ mới\",\n        \"tinh_trang\": 0,\n        \"ten_tinh_trang\": \"Đã Đóng\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 401 Unauthorized\n+ Có nhiều dạng trả về không thành công như key sai,dia_chi hay ten_toa không hợp lệ\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"headers\": {},\n    \"original\": \"\",\n    \"exception\": null,\n    \"success\": false,\n    \"message\": \"Địa chỉ không hợp lệ (từ 6-100 kí tự)\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/toa.php",
    "groupTitle": "Toa"
  }
] });
