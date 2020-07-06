define({ "api": [
  {
    "type": "POST",
    "url": "/nguoidung/clone",
    "title": "2.1. Clone User Từ DTB VỀ Local",
    "version": "0.1.0",
    "name": "CLone",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để lấy tài khoản cũng như cập nhật thông tin cho tài khoản<br> -Lưu ý: <br> +Chỉ chạy một lần<br> +Email thay đổi sẽ tạo user mới<br> +Lấy thông tin của chính mình không cần truyền ma<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/clone"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/clone\n{\n    \"key\": \"key\",\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Đã tạo mới 1 bản ghi và Cập nhật 1 bản ghi\",\n    \"data\": {\n        \"create\": [\n            {\n                \"ma_nguoi_dung\": 64,\n                \"ho_ten\": \"Đào Viết Phương\",\n                \"tai_khoan\": \"phuongdv\",\n                \"email\": \"phuongdv@bkacad.edu.vn\",\n                \"sdt\": \"0305476149\",\n                \"ma_cap_do\": 3,\n                \"ten_cap_do\": \"Giáo Viên\"\n            }\n        ],\n        \"update\": [\n            {\n                \"email\": \"yuki.lifdv@gmail.com\",\n                \"sdt\": \"0989154985\",\n                \"changer\": {\n                    \"old.ho_ten\": \"Lê Thị Hương Liên\",\n                    \"new.ho_ten\": \"Cô liên đề mô 2\"\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "\tHTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "nguoidung/reset",
    "title": "1.5. Khôi Phục Mật Khẩu",
    "version": "0.1.0",
    "name": "Khôi_Phục_Mật_Khẩu",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để khôi phục mật khẩu cho tài khoản</p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/reset"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/reset\n{\n    \"email\":\"demo@gmail.com\",\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Chức năng chưa phát triển\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Chức năng chưa phát triển\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/kiemtra",
    "title": "1.8. Kiểm Tra Quy Tắc",
    "version": "0.1.0",
    "name": "Kiểm_Tra_Quy_Tắc",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để kiểm tra quy tắc hợp lệ cũng như trong hệ thống đã có chưa: <br> -Các phương thức áp dụng Email,SDT,Tai_khoan<br> -Lưu ý: <br> +Chức năng dành cho tất cả user phục vụ cho việc đổi thông tin<br> +Phục vụ cho Giáo Vụ khi tạo tài khoản<br> +Cần kiểm tra dữ liệu nào thì truyền tương ứng<br> +Có thể truyền 1,2 hoặc tất cả các dữ liệu<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/kiemtra\n{\n    \"key\": \"Keyapi\",\n    \"email\" :\"cds@gmail.com\",\n    \"sdt\": \"1\",\n    \"tai_khoan\" : \"cd\",\n    \"mat_khau\":\"cd\",\n    \"mat_khau_moi\":\"d\"\n}",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mat_khau",
            "description": "<p>Dữ liệu cần kiểm tra.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mat_khau_moi",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "+ Có nhiều dạng trả về không thành công như email,mat_khau,sdt,tai_khoan bị trùng hoặc vi phạm quy tắc\n+ \"key\" không có quyền tạo người dùng\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n    HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": {\n        \"email\": \"Email không hợp lệ\",\n        \"sdt\": \"Số điện thoại không hợp lệ\",\n        \"tai_khoan\": \"Tài khoản cần từ 4-20 kí tự và không có kí tự đặc biệt\",\n        \"mat_khau\": \"Mật khẩu không hợp lệ\",\n        \"mat_khau_moi\": \"Mật khẩu mới không hợp lệ\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/kiemtrakey",
    "title": "1.9. Kiểm tra KEY của người dùng có hợp lệ không",
    "version": "0.1.0",
    "name": "Kiểm_tra_KEY",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để kiểm tra key của người dùng cung cấp</p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/kiemtrakey"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/kiemtrakey\n{\n    \"key\" => \"key\",\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": {\n        \"cap_do\": 3\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "\tHTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/danhsach",
    "title": "1.7. Hiển Thị Danh Sách Kĩ Thuật Và Giáo Viên Trong Hệ Thống",
    "version": "0.1.0",
    "name": "LIST_GV_KT",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để hiển thị danh sách Kĩ Thuật Và Giáo Viên<br> -Lưu ý: <br> +Chức năng dàng cho tất cả Người Dùng *Nếu là Giáo Vụ : trả về danh sách Giáo Viên và Kĩ Thuật *Nếu là GV hoặc KT:trả về thông tin của chính mình +Chưa có phân trang (sẽ update nếu cần)<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/danhsach"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/danhsach\n{\n    \"key\" => \"key\",\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_nguoi_dung\": 2,\n            \"ho_ten\": null,\n            \"tai_khoan\": \"user\",\n            \"email\": \"b@gmail.com\",\n            \"sdt\": \"1\",\n            \"ma_cap_do\": 2,\n            \"ten_cap_do\": \"Kĩ Thuật\"\n        },\n        {\n            \"ma_nguoi_dung\": 58,\n            \"ho_ten\": \"Nguyen Văn Nhất\",\n            \"tai_khoan\": \"changer\",\n            \"email\": \"vhfjvbfjh@gmail.com\",\n            \"sdt\": \"0854217842\",\n            \"ma_cap_do\": 3,\n            \"ten_cap_do\": \"Giáo Viên\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/thongtin",
    "title": "2.0. Lấy thông tin Người Dùng",
    "version": "0.1.0",
    "name": "Lấy_thông_tin",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để lấy thông tin người dùng<br> -Lưu ý: <br> +Chức năng dành cho tất cả user phục vụ cho việc lấy thông tin<br> +Giáo vụ lấy thông tin các người dùng khác và không lấy được thông tin của Giáo Vụ khác<br> +GV hoặc KT sẽ trả về thông tin của mình<br> +Lấy thông tin của chính mình không cần truyền ma<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/thongtin"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/thongtin\n{\n    \"key\": \"key\",\n    \"ma\" :\"58\"\n}",
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
            "field": "ma",
            "description": "<p>Mã của người dùng cần lấy.</p>"
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"ma_nguoi_dung\": 58,\n        \"ho_ten\": \"Nguyen Văn Nhất\",\n        \"tai_khoan\": \"changer\",\n        \"email\": \"vhfjvbfjh@gmail.com\",\n        \"sdt\": \"0854217842\",\n        \"ma_cap_do\": 3,\n        \"ten_cap_do\": \"Giáo Viên\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "\tHTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Lấy dữ liệu thất bại\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "nguoidung/capnhatthongtin/{id}",
    "title": "1.6. Thay Đổi Thông Tin Của Tài Khoản",
    "version": "0.1.0",
    "name": "Thay_Đổi_Thông_Tin_Của_Tài_Khoản",
    "group": "NguoiDung",
    "description": "<p>Sử dụng thay đổi thông tin tài khoản<br> -Lưu ý: <br> +Email,Sdt,mat_khau phải tuân thủ quy tắc như khi tạo tài khoản<br> +Có thể truyền yếu tố thay đổi không bắt buộc truyền tất cả<br> +Nếu là giáo vụ mới được phép thay đổi thông tin của Giáo Viên hoặc Kĩ Thuật<br> +Nếu là Giáo Viên hoặc Kĩ Thuật có thể để &quot;id&quot; ngẫu nhiên nhưng vẫn sẽ thay đổi thông tin tài khoản của chính họ<br> +Giáo Vụ không được đổi thông tin của giáo vụ khác<br> +Giáo Vụ có thể đổi mật khẩu của KT hoặc GV mà không cần biết mật khẩu cũ<br> +GV hoặc KT không thể đổi mật khẩu của mình bằng chức năng này <br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/capnhatthongtin/{id}"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/capnhatthongtin/58\n{\n    \"key\": \"keyapi\",\n    \"email\" : \"vhfjvbfjh@gmail.com\",\n    \"tai_khoan\" : \"changer\",\n    \"sdt\" : \"0854217842\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Thay đổi thông tin thành công\",\n    \"data\": {\n        \"ma_nguoi_dung\": 58,\n        \"ho_ten\": \"Nguyen Văn Nhất\",\n        \"tai_khoan\": \"changer\",\n        \"email\": \"vhfjvbfjh@gmail.com\",\n        \"sdt\": \"0854217842\",\n        \"ma_cap_do\": 3,\n        \"ten_cap_do\": \"Giáo Viên\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "+ Có nhiều dạng trả về không thành công như email,mat_khau,sdt,tai_khoan bị trùng hoặc vi phạm quy tắc\n+ \"key\" không hợp lệ\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n    HTTP/1.1 401 Unauthorized\n{\n    \"success\": false,\n    \"message\": {\n        \"email\": \"Email đã tồn tại\",\n        \"sdt\": \"Số điện thoại đã tồn tại\",\n        \"tai_khoan\": \"Tài khoản đã tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn chưa điền thay đổi gì \",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "dangnhap/{tai_khoan}/{mat_khau}",
    "title": "1.2. Đăng nhập",
    "version": "0.1.0",
    "name": "Đăng_Nhập",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để đăng nhập vào hệ thông với tài khoản và mật khẩu</p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/dangnhap"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/dangnhap/test/d3d9446802a44259755d38e6d163e820",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Đăng nhập thành công\",\n    \"data\": {\n        \"ma_nguoi_dung\": 58,\n        \"ho_ten\": \"Nguyen Văn Nhất\",\n        \"tai_khoan\": \"test\",\n        \"email\": \"vfbbttrtb@gmail.com\",\n        \"sdt\": \"0369633967\",\n        \"ma_cap_do\": 3,\n        \"ten_cap_do\": \"Giáo Viên\",\n        \"key\": \"keyuser\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Đăng nhập thất bại kiểm tra lại tài khoản hoặc mật khẩu\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/dangxuat",
    "title": "1.3. Đăng Xuất",
    "version": "0.1.0",
    "name": "Đăng_Xuất",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để đăng xuất cho tài khoản</p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/dangxuat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/dangxuat\n{\n    \"key\": \"KEYAPI\",\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Đăng xuất thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/tao",
    "title": "1.1. Tạo Người Dùng",
    "version": "0.1.0",
    "name": "Đăng_kí",
    "group": "NguoiDung",
    "description": "<p>Dùng để tạo người dùng là giáo viên<br> -Lưu ý: <br> +Chức năng chỉ dành cho Giáo Vụ<br> +Cần gửi đầy đủ các dữ liệu được yêu cầu.<br> +Nếu SDT,Họ Tên,Mật Khẩu trống hệ thống sẽ tự tạo ngẫu nhiên.<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/tao"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/tao\n{\n    \"key\": \"kdvkfJxgcd\",\n    \"tai_khoan\": \"demo\",\n    \"email\": \"hdgggvjhg@gmail.com\",\n    \"sdt\": \"0984578452\",\n    \"mat_khau\": \"c4ca4238a0b923820dcc509a6f75849b\",\n    \"ho_ten\" : \"Nguyen Văn Nhất\"\n}",
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
            "description": "<p>Tài khoản muốn tạo từ 4-30 kí tự chỉ bao gồm số và chữ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Từ 5-30(không tính @gmail.com).</p>"
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ho_ten",
            "description": "<p>Họ tên của Người Dùng từ 0-100 kí tự chỉ bao gồm tiếng việt có dấu không kí tự đặc biệt .</p>"
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tạo tài khoản thành công\",\n    \"data\": {\n        \"ma_nguoi_dung\": 56,\n        \"ho_ten\": \"Nguyen Văn Nhất\",\n        \"tai_khoan\": \"demo\",\n        \"email\": \"hdgggvjhg@gmail.com\",\n        \"sdt\": \"0984578452\",\n        \"ma_cap_do\": 3,\n        \"ten_cap_do\": \"Giáo Viên\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như email,mat_khau,sdt,tai_khoan bị trùng hoặc vi phạm quy tắc\n+ \"key\" không có quyền tạo người dùng\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"email\": \"Email không hợp lệ\",\n        \"sdt\": \"Số điện thoại không hợp lệ\",\n        \"tai_khoan\": \"Tài khoản cần từ 4-20 kí tự và không có kí tự đặc biệt\",\n        \"mat_khau\": \"Mật khẩu không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "/nguoidung/doimatkhau",
    "title": "1.4. Đổi Mật Khẩu",
    "version": "0.1.0",
    "name": "Đổi_Mật_Khẩu",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để đổi mật khẩu cho tài khoản -Lưu ý: <br> +Chức năng dành cho tất cả user<br> +Cần gửi đầy đủ các dữ liệu được yêu cầu.<br> +Nếu trùng mật khẩu mới và cũ sẽ không thực hiện đổi.<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/doimatkhau"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/nguoidung/doimatkhau\n{\n    \"key\": \"keyapi\",\n    \"mat_khau\" : \"d3d9446802a44259755d38e6d163e820\",\n    \"mat_khau_moi\" : \"d3d9446802a44259755d38e6d163e821\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Đổi mật khẩu thành công\",\n    \"data\": {\n        \"key\": \"newkey\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như mat_khau trùng,không hợp lệ\n+ \"key\" không có quyền tạo người dùng\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": {\n        \"mat_khau\": \"Mật khẩu không hợp lệ\",\n        \"mat_khau_moi\": \"Mật khẩu mới không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Đổi thất bại, mật khẩu mới phải khác mật khẩu hiện tại\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung.php",
    "groupTitle": "NguoiDung"
  },
  {
    "type": "POST",
    "url": "toa/kiemtra",
    "title": "1.3. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Check",
    "group": "Toa",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br> -Lưu ý : <br> +Có thể truyền 1 hay nhiều yếu tố +Sẽ chỉ trả về lỗi của yếu tố đầu tiên +Nếu trả về hợp lệ là tất cả đều hợp lệ</p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/toa/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/toa/kiemtra\n{\n    \"key\": \"1\",\n    \"ma_toa\":\"10\",\n    \"ten_toa\" : \"Ten\",\n    \"dia_chi\" : \"dia \",\n    \"ma_tinh_trang\": 0\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,dia_chi hay ten_toa không hợp lệ\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_toa\": \"Tòa không tồn tại\",\n        \"ten_toa\": \"Tên tòa chỉ từ 6-20 kí tự và không chứa kí tự đặc biệt\",\n        \"dia_chi\": \"Địa chỉ chỉ từ 6-100 kí tự và không chứa kí tự đặc biệt\",\n        \"ma_tinh_trang\": \"Tình trạng không tồn tại\"\n    },\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/toa.php",
    "groupTitle": "Toa"
  },
  {
    "type": "POST",
    "url": "toa/hienthicactoa",
    "title": "1.1. Hiển thị tông tin các tòa hoặc một tòa",
    "version": "0.1.0",
    "name": "Show",
    "group": "Toa",
    "description": "<p>Dùng để hiện thị thông tin tòa<br> -Lưu ý: <br> +Cần lấy thông tin tòa nào truyền thông tin mã tòa đó<br> +Nếu lấy tất cả thì không truyền gì cả<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/toa/hienthicactoa"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/toa/hienthicactoa\n{\n    \"key\": \"1\",\n    \"ma_toa\":\"2\"\n}",
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
            "field": "ma_toa",
            "description": "<p>mã của tòa cần lấy.</p>"
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_toa\": 2,\n            \"ten_toa\": \"Tòa 2\",\n            \"dia_chi\": \"D5 Trần Đại Nghĩa\",\n            \"ma_tinh_trang\": 1,\n            \"ten_tinh_trang\": \"Hoạt Động\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_toa\": \"Tòa không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/toa.php",
    "groupTitle": "Toa"
  },
  {
    "type": "POST",
    "url": "toa/capnhat",
    "title": "1.2. Cập nhật thông tin cho một tòa",
    "version": "0.1.0",
    "name": "Update",
    "group": "Toa",
    "description": "<p>Dùng để cập nhật thông tin cho các tòa<br></p>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/toa/capnhat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost/project-2/public/api/toa/capnhat\n{\n    \"key\": \"apikey\",\n    \"ma_toa\":\"2\",\n    \"ten_toa\" : \"Ten toa moi\",\n    \"dia_chi\" : \"dia chi moi\",\n    \"ma_tinh_trang\": 1\n}",
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
            "description": "<p>+Tình Trạng 1 hoặc 2.</p>"
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Cập nhật thành công\",\n    \"data\": {\n        \"ma_toa\": 2,\n        \"ten_toa\": \"Ten toa moi\",\n        \"dia_chi\": \"dia chi moi\",\n        \"ma_tinh_trang\": 1,\n        \"ten_tinh_trang\": \"Hoạt Động\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,dia_chi hay ten_toa không hợp lệ\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_toa\": \"Tòa không tồn tại\",\n        \"ten_toa\": \"Tên tòa chỉ từ 6-20 kí tự và không chứa kí tự đặc biệt\",\n        \"dia_chi\": \"Địa chỉ chỉ từ 6-100 kí tự và không chứa kí tự đặc biệt\",\n        \"ma_tinh_trang\": \"Tình trạng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Cập nhật dữ liệu thất bại\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/toa.php",
    "groupTitle": "Toa"
  }
] });
