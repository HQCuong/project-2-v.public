define({ "api": [
  {
    "type": "POST",
    "url": "ca",
    "title": "1.1. Hiển thị tất cả các Ca",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Ca",
    "group": "Ca",
    "description": "<p>Dùng để hiện thị thông tin Ca<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần lấy thông tin ca nào truyền thông tin mã ca đó<br>     +Nếu lấy tất cả thì không truyền gì cả<br>",
    "sampleRequest": [
      {
        "url": "ca"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ma_ca\" : \"1\"\n}",
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
            "field": "ma_ca",
            "description": "<p>mã của Loại.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_ca\": 1,\n            \"gio_bat_dau\": \"08:00:00\",\n            \"gio_ket_thuc\": \"17:30:00\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_ca\": \"Ca không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/ca.php",
    "groupTitle": "Ca"
  },
  {
    "type": "POST",
    "url": "cauhinh/sua",
    "title": "1.3 . Cập Nhật Thông Tin Của Một Cấu Hình",
    "version": "0.1.0",
    "name": "Cập_Nhật_Cấu_Hình",
    "group": "Cấu_Hình",
    "description": "<p>Dùng để cập nhật thông tin Cấu Hình <br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <!--<button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>--> </div><br> +Nếu loại case cần truyền thêm mã loại +Nếu cập nhật loại Case thì có thể truyền các yếu tố ['cpu', 'ram', 'main', 'o_cung', 'vga'] <br> +Các loại khác chỉ cần truyền mo_ta,ma_loại <br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh/sua"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\":\"1\",\n    \"ma_cau_hinh\":\"4\",\n    \"mo_ta\":\"Mo ta da sưa\"\n}\n{\n    \"key\":\"1\",\n    \"ma_cau_hinh\":\"2\",\n    \"ma_loai\":\"1\",\n    \"cpu\":\"G-9000K\",\n    \"main\":\"Z100X\",\n    \"ram\":\"16\",\n    \"o_cung\":\"250GB HDD 120GB SSD\",\n    \"vga\":\"1000XXXXX\"\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>mã của Cấu hình.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_loai",
            "description": "<p>Mã loại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpu",
            "description": "<p>CPU.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "main",
            "description": "<p>Main.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ram",
            "description": "<p>RAM.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "o_cung",
            "description": "<p>Ổ Cứng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vga",
            "description": "<p>VGA.</p>"
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
            "description": "<p>Dữ liệu trả về.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\":true,\n    \"message\":\"Cập nhật thành công\",\n    \"data\":{\n        \"ma_cau_hinh\":4,\n        \"mo_ta\":\"Mo ta da sưa\",\n        \"ma_loai\":3,\n        \"ten_loai\":\"chuot\",\n        \"mo_ta_loai\":\"Chuột\"\n    }\n}\n{\n    \"success\":true,\n    \"message\":\"Cập nhật thành công\",\n    \"data\":{\n        \"ma_cau_hinh\":2,\n        \"mo_ta\":\"CPU:G-9000K RAM:16 MAIN:Z100X O_CUNG:250GB HDD 120GB SSD VGA:1000XXXXX\",\n        \"ma_loai\":\"1\",\n        \"ten_loai\":\"case\",\n        \"mo_ta_loai\":\"case\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n {\n    \"success\":false,\n    \"message\":{\n        \"cpu\":\"CPU không hợp lệ\",\n        \"ram\":\"RAM không hợp lệ\",\n        \"main\":\"Main không hợp lệ\",\n        \"o_cung\":\"Ổ Cứng không hợp lệ\"\n    },\n    \"data\":[]\n}\n{\n    \"success\":false,\n    \"message\":\"Bạn không có quyền truy cập\",\n    \"data\":[]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cauhinh.php",
    "groupTitle": "Cấu_Hình"
  },
  {
    "type": "POST",
    "url": "cauhinh/case",
    "title": "1.2. Hiển thị tất cả Cấu Hình dạng Case",
    "version": "0.1.0",
    "name": "Hiện_thị_Case",
    "group": "Cấu_Hình",
    "description": "<p>Dùng để hiện thị thông tin Cấu Hình CASE<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <!--<button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>--> </div><br> +Cần lấy thông tin Cấu Hình nào truyền thông tin mã Cấu Hình đó<br> +Chỉ hỗ trợ lấy một cấu hình theo ma_cau_hinh<br> +Chỉ lấy loại case",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh/case"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"1\",\n    \"ma_cau_hinh\":\"1\"\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>mã của Cấu hình của loại CASE.</p>"
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
            "description": "<p>Dữ liệu của Cấu Hình Case.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"ma_cau_hinh\": 1,\n        \"ma_loai\": 1,\n        \"cpu\": \"I9-9900XE\",\n        \"main\": \"Z350\",\n        \"ram\": \"8Gb\",\n        \"o_cung\": \"\",\n        \"vga\": \"\",\n        \"ten_loai\": \"case\",\n        \"mo_ta_loai\": \"case\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": \"Cấu hình bạn chọn không phải Case\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_cau_hinh\": \"Cấu hình không tồn tại\"\n    },\n    \"data\": []\n}\n{\n\t\"success\": false,\n\t\"message\": \"Bạn không có quyền truy cập\",\n\t\"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cauhinh.php",
    "groupTitle": "Cấu_Hình"
  },
  {
    "type": "POST",
    "url": "cauhinh",
    "title": "1.1. Hiển thị tất cả các Loại",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Loại",
    "group": "Cấu_Hình",
    "description": "<p>Dùng để hiện thị thông tin Cấu Hình<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <!--<button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>--> </div><br> +Cần lấy thông tin Cấu Hình nào truyền thông tin mã Cấu Hình đó<br> +Nếu lấy tất cả thì không truyền gì cả<br> +Nếu lấy theo Loại thì không truyền ma_loai<br> +Có cả ma_loai và ma_cau_hinh sẽ ưu tiên ma_loai<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n\t\"key\" : \"1\",\n\t\"ma_cau_hinh\" : \"2\",\n\t\"ma_loai\":\"2\"\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>mã của Cấu hình.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_loai",
            "description": "<p>mã loại.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"success\": true,\n\t\"message\": \"\",\n\t\"data\": [\n\t\t{\n\t\t\"ma_cau_hinh\": 3,\n\t\t\"mo_ta\": \"DELL U2417H\",\n\t\t\"ma_loai\": 2,\n\t\t\"ten_loai\": \"update_ten_loai\",\n\t\t\"mo_ta_loai\": \"Update cho loại\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n\t\"success\": false,\n\t\"message\": {\n\t\t\"ma_cau_hinh\": \"Cấu hình không tồn tại\",\n\t\t\"ma_loai\": \"Loại không tồn tại\"\n\t},\n\t\"data\": []\n}\n{\n\t\"success\": false,\n\t\"message\": \"Bạn không có quyền truy cập\",\n\t\"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cauhinh.php",
    "groupTitle": "Cấu_Hình"
  },
  {
    "type": "POST",
    "url": "cauhinh/kiemtra",
    "title": "1.5. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Cấu_Hình",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ma_loai\": 1,\n    \"cpu\": \"I9-9900XE\",\n    \"main\": \"Z350_A\",\n    \"ram\": \"8\",\n    \"o_cung\": \"10000HDD 1520SSF\",\n    \"vga\": \"GTX 1660\"\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>mã của Cấu hình.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_loai",
            "description": "<p>Mã loại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpu",
            "description": "<p>CPU.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "main",
            "description": "<p>Main.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ram",
            "description": "<p>RAM.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "o_cung",
            "description": "<p>Ổ Cứng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vga",
            "description": "<p>VGA. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"cpu\": \"CPU không hợp lệ\",\n        \"ram\": \"RAM không hợp lệ\",\n        \"main\": \"Main không hợp lệ\",\n        \"o_cung\": \"Ổ Cứng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cauhinh.php",
    "groupTitle": "Cấu_Hình"
  },
  {
    "type": "POST",
    "url": "cauhinh/them",
    "title": "1.4. Tạo ra một Cấu Hình Mới",
    "version": "0.1.0",
    "name": "Tạo_Cấu_Hình",
    "group": "Cấu_Hình",
    "description": "<p>Dùng để tạo ra một Cấu Hình<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <!--<button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>-->  </div><br>     +Cần gửi đủ ma_loai,mo_ta.<br>     +Nếu mô tả là loại case thì truyền thêm các thông tin của case ['cpu', 'ram', 'main', 'o_cung', 'vga']     có thể bỏ trống hoặc không truyền bất cứ yếu tố nào.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh/them"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ma_loai\": 1,\n    \"cpu\": \"I9-9900XE\",\n    \"main\": \"Z350_A\",\n    \"ram\": \"8\",\n    \"o_cung\": \"10000HDD 1520SSF\",\n    \"vga\": \"GTX 1660\"\n}\n{\n    \"key\" :\"1\",\n    \"ma_loai\": 2,\n    \"mo_ta\" : \"Tao loai 2\"\n}",
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
            "field": "ten_loai",
            "description": "<p>Tên Loại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mo_ta",
            "description": "<p>mô tả của Loại. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tạo thành công\",\n    \"data\": {\n        \"ma_cau_hinh\": 5,\n        \"mo_ta\": \"CPU:I9-9900XE RAM:8 MAIN:Z350_A O_CUNG:10000HDD 1520SSF VGA:GTX 1660\",\n        \"ma_loai\": 1,\n        \"ten_loai\": \"case\",\n        \"mo_ta_loai\": \"case\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"cpu\": \"CPU không hợp lệ\",\n        \"ram\": \"RAM không hợp lệ\",\n        \"main\": \"Main không hợp lệ\",\n        \"o_cung\": \"Ổ Cứng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cauhinh.php",
    "groupTitle": "Cấu_Hình"
  },
  {
    "type": "POST",
    "url": "cauhinhmon",
    "title": "1.1. Hiển thị tất cả các Cấu Hình Đã Có Môn",
    "version": "0.1.0",
    "name": "Cấu_Hình_Đã_Có_Môn",
    "group": "Cấu_Hình_Môn",
    "description": "<p>Dùng để hiện thị Cấu Hình có Môn<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinhmon"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"keyapi\"\n}",
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
            "field": "data",
            "description": "<p>Dữ liệu Cấu Hình.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_cau_hinh\": 1,\n            \"mo_ta\": \"CPU:I9-9900XEMain:Z350Ram:8Gb\"\n        },\n        {\n            \"ma_cau_hinh\": 2,\n            \"mo_ta\": \"CPU:G-9000K RAM:16 MAIN:Z100X O_CUNG:250GB HDD 120GB SSD VGA:1000XXXXX\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cau_hinh_mon.php",
    "groupTitle": "Cấu_Hình_Môn"
  },
  {
    "type": "POST",
    "url": "cauhinhmon/capnhat",
    "title": "1.3. Thêm Cấu Hình Và Môn Học Được Mới Hoặc Cập Nhật",
    "version": "0.1.0",
    "name": "Cập_Nhật_Hoặc_Thêm",
    "group": "Cấu_Hình_Môn",
    "description": "<p>Dùng để Thêm Cấu Hình Môn Mới<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> --> </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinhmon/capnhat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"apikey\",\n    \"ma_cau_hinh\": \"2\",\n    \"ma_mon_hoc\": [\"BIT_ACC\",\"BIT_AP\",\"BIT_CMS\"]\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>Mã cấu hình.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Là mã môn truyền dạng mảng nếu truyền thường chỉ thu một môn.</p>"
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
            "description": "<p>Dữ liệu Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Cập nhật thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_mon_hoc\": \"Môn học không tồn tại\",\n        \"ma_cau_hinh\": \"Cấu hình không phải là Case\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Chưa có môn học được cho cấu hình bạn chọn\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cau_hinh_mon.php",
    "groupTitle": "Cấu_Hình_Môn"
  },
  {
    "type": "POST",
    "url": "cauhinhmon/kiemtra",
    "title": "1.4. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Cấu_Hình_Môn",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ma_cau_hinh\": \"6\",\n    \"ma_mon_hoc\": [\"BIT_AClC\"]\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>Mã cấu hình.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Là mã môn truyền dạng mảng nếu truyền thường chỉ thu một môn. .</p>"
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
            "description": "<p>Kết quả.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_mon_hoc\": \"Môn học không tồn tại\",\n        \"ma_cau_hinh\": \"Cấu hình không phải là Case\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cau_hinh_mon.php",
    "groupTitle": "Cấu_Hình_Môn"
  },
  {
    "type": "POST",
    "url": "cauhinhmon/mon",
    "title": "1.2. Hiển thị các môn có thể học được theo cấu hình",
    "version": "0.1.0",
    "name": "Môn_của_cấu_hình",
    "group": "Cấu_Hình_Môn",
    "description": "<p>Dùng để trả về môn của Cấu Hình<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinhmon/mon"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\",\n    \"ma_cau_hinh\" : \"1\"\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>Mã cấu hình cần lấy danh sách môn.</p>"
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
            "description": "<p>Dữ liệu Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"cau_hinh\": {\n            \"ma_cau_hinh\": 2,\n            \"mo_ta\": \"CPU:G-9000K RAM:16 MAIN:Z100X O_CUNG:250GB HDD 120GB SSD VGA:1000XXXXX\",\n            \"ma_loai\": 1,\n            \"ten_loai\": \"case\",\n            \"mo_ta_loai\": \"case\"\n        },\n        \"list_mon\": [\n            {\n                \"ma_cau_hinh\": 2,\n                \"ma_mon_hoc\": \"BIT_AP\",\n                \"ten_mon_tieng_viet\": \"Lập trình nâng cao\",\n                \"ten_mon_tieng_anh\": \"Advanced Programming\"\n            },\n            {\n                \"ma_cau_hinh\": 2,\n                \"ma_mon_hoc\": \"BIT_DB2\",\n                \"ten_mon_tieng_viet\": \"Nguyên lý cơ sở dữ liệu nâng cao\",\n                \"ten_mon_tieng_anh\": \"Advanced Database Principle\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_cau_hinh\": \"Cấu hình không phải là Case\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Chưa có môn học được cho cấu hình bạn chọn\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/cau_hinh_mon.php",
    "groupTitle": "Cấu_Hình_Môn"
  },
  {
    "type": "POST",
    "url": "loai/sua",
    "title": "1.2. Cập Nhật Thông Tin Của Một Loại",
    "version": "0.1.0",
    "name": "Cập_Nhật_Loại",
    "group": "Loai",
    "description": "<p>Dùng để cập nhật thông tin Loại<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Cần có mã loại<br>     +Chỉnh sửa thông tin nào truyền thông tin đó<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/loai/sua"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"keyapi\",\n    \"ma_loai\" : \"2\",\n    \"ten_loai\" :\"update_ten_loai\",\n    \"mo_ta\":\"Update cho loại\"\n}",
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
            "field": "ma_loai",
            "description": "<p>mã của Loại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_loai",
            "description": "<p>Tên Loại thay đổi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mo_ta",
            "description": "<p>mô tả của Loại thay đổi. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Cập nhật thành công\",\n    \"data\": {\n        \"ma_loai\": 2,\n        \"ten_loai\": \"update_ten_loai\",\n        \"mo_ta\": \"Update cho loại\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"mo_ta\": \"Mô tả loại không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/loai.php",
    "groupTitle": "Loai"
  },
  {
    "type": "POST",
    "url": "loai",
    "title": "1.1. Hiển thị tất cả các Loại",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Loại",
    "group": "Loai",
    "description": "<p>Dùng để hiện thị thông tin Loại<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần lấy thông tin Loại nào truyền thông tin mã loại đó<br>     +Nếu lấy tất cả thì không truyền gì cả<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/loai"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"1\",\n    \"ma_loai\" : \"2\"\n}",
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
            "field": "ma_loai",
            "description": "<p>mã của Loại.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"ma_loai\": 2,\n            \"ten_loai\": \"ma_hinh\",\n            \"mo_ta\": \"Màn Hình\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_loai\": \"Loại không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/loai.php",
    "groupTitle": "Loai"
  },
  {
    "type": "POST",
    "url": "loai/kiemtra",
    "title": "1.4. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Loai",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/loai/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"1\",\n    \"ten_loai\" :\"demo_create_loaic\",\n    \"mo_ta\":\"mo ta loai\",\n    \"ma_loai\" : \"20\"\n}",
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
            "description": "<p>Mã Key .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_loai",
            "description": "<p>mã của loại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_loai",
            "description": "<p>Tên Loại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mo_ta",
            "description": "<p>mô tả của Loại. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_loai\": \"Loại không tồn tại\",\n        \"ten_loai\": \"Tên loại đã tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/loai.php",
    "groupTitle": "Loai"
  },
  {
    "type": "POST",
    "url": "loai/them",
    "title": "1.3. Tạo ra một Loại mới",
    "version": "0.1.0",
    "name": "Tạo_Loại",
    "group": "Loai",
    "description": "<p>Dùng để tạo ra một Loại<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Cần gửi đủ tên loại,mô tả.<br>     +Nếu mo_ta không tồn tại sẽ auto null<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/loai/them"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"1\",\n    \"ten_loai\" :\"demo_create_loaic\",\n    \"mo_ta\":\"mo ta loai\"\n}",
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
            "field": "ten_loai",
            "description": "<p>Tên Loại.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mo_ta",
            "description": "<p>mô tả của Loại. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tạo thành công\",\n    \"data\": {\n        \"ma_loai\": 6,\n        \"ten_loai\": \"demo_create_loaic\",\n        \"mo_ta\": \"mo ta loai\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"mo_ta\": \"Mô tả loại không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/loai.php",
    "groupTitle": "Loai"
  },
  {
    "type": "POST",
    "url": "lichdaybosung",
    "title": "1.1. Hiển thị tất cả các Lịch Dạy Bổ Sung",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Lịch_Dạy_Bổ_Sung",
    "group": "Lịch_Dạy_Bổ_Sung",
    "description": "<p>Dùng để hiện thị thông tin Lịch Dạy Bổ Sung<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Chỉ giáo vụ mới được phép xem lịch của bất cứ giáo viên nào.<br>     +Nếu là giáo viên sẽ tự đồng lấy theo Giáo Viên đó.<br>     +Có thể truyền vào tình trạng nếu không truyền sẽ tự lấy tình trang = 1.<br>     +Sẽ lấy ra Lịch từ >= ngày hôm nay, nếu truyền vào ngày sẽ lấy lịch của ngày đó.<br>     +Có thể truyền vào mã lịch dạy bổ sung sẽ lấy theo mã đó.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichdaybosung"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": 6\n}",
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
            "field": "ma_lich_day_bo_sung",
            "description": "<p>Mã lịch dạy bổ sung.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Tình Trạng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_giao_vien",
            "description": "<p>Mã Giáo Viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngay",
            "description": "<p>Ngày cần lấy.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_lich_day_bo_sung\": 2,\n            \"ngay\": \"2020-08-25\",\n            \"ma_lop\": \"BIT01K10\",\n            \"nguoi_dung\": {\n                \"ma_nguoi_dung\": 6,\n                \"ho_ten\": \"Lê Thị Hương Liên\",\n                \"tai_khoan\": \"yuki.lien85\",\n                \"email\": \"yuki.lien85@gmail.com\",\n                \"sdt\": \"0989186985\"\n            },\n            \"ma_mon_hoc\": \"BIT_ECOM1\",\n            \"ca\": {\n                \"ma_ca\": 2,\n                \"gio_bat_dau\": \"08:00:00\",\n                \"gio_ket_thuc\": \"10:00:00\"\n            },\n            \"phong\": {\n                \"ma_phong\": 5,\n                \"ten_phong\": \"Lab 5\",\n                \"so_cho_ngoi\": 35,\n                \"ma_tang\": 4,\n                \"ma_tinh_trang\": 1,\n                \"ghi_chu\": \"\"\n            },\n            \"ghi_chu\": \"\",\n            \"tinh_trang\": 1,\n            \"ten_tinh_trang\": \"Hoạt Động\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\",\n        \"tinh_trang\": \"Tình trạng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_day_bo_sung.php",
    "groupTitle": "Lịch_Dạy_Bổ_Sung"
  },
  {
    "type": "POST",
    "url": "lichdaybosung/kiemtra",
    "title": "1.4. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Lịch_Dạy_Bổ_Sung",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichdaybosung/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": \"y\",\n    \"ma_lop\": \"BKdD01K10\",\n    \"ma_mon_hoc\": \"BKA_dESE\",\n    \"ngay\": \"22-08-20d20\",\n    \"ma_phong\": \"d\",\n    \"ma_ca\": \"d\"\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã Giáo Viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lop",
            "description": "<p>Mã Lớp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Mã Môn Học.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngay",
            "description": "<p>Ngày Lịch Học Bổ Sung.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phong",
            "description": "<p>Mã Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_ca",
            "description": "<p>Mã Ca.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ghi_chu",
            "description": "<p>Ghi Chú.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Tình Trạng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lich_day_bo_sung",
            "description": "<p>Mã Lịch Dạy Bổ Sung.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_gio",
            "description": "<p>Số Giờ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_ngay",
            "description": "<p>Số Ngày.</p>"
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
            "description": "<p>Kết quả.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ngay\": \"Ngày không hợp lệ (ngày/tháng/năm)\",\n        \"ma_ca\": \"Ca không tồn tại\",\n        \"ma_phong\": \"Phòng không tồn tại\",\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\",\n        \"ma_lop\": \"Lớp không tồn tại\",\n        \"ma_mon_hoc\": \"Môn học không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_day_bo_sung.php",
    "groupTitle": "Lịch_Dạy_Bổ_Sung"
  },
  {
    "type": "POST",
    "url": "lichdaybosung/them",
    "title": "1.3. Thêm Lịch Dạy Bổ Sung",
    "version": "0.1.0",
    "name": "Thêm_Lịch_Dạy_Bổ_Sung",
    "group": "Lịch_Dạy_Bổ_Sung",
    "description": "<p>Dùng để thêm Lịch Dạy Bổ Sung<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> --> <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> --> </div><br> +<br> +Cần truyển đủ các yếu tố để có thể thêm Lịch Dạy Bổ Sung.<br> +Ghi chú có thể truyền hoặc không.<br> +Tình trạng tự lấy = 1.<br> +Nếu thêm lịch nhưng lịch đã tồn tại nhưng tình trạng khác thì sẽ được cập nhật lại thay vì tạo mới.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichdaybosung/them"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": 6,\n    \"ma_lop\": \"BKD01K10\",\n    \"ma_mon_hoc\": \"BKA_ESE\",\n    \"ngay\": \"22-08-2020\",\n    \"ma_phong\": 3,\n    \"ma_ca\": 4\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã Giáo Viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lop",
            "description": "<p>Mã Lớp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Mã Môn Học.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngay",
            "description": "<p>Ngày Lịch Học Bổ Sung.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phong",
            "description": "<p>Mã Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_ca",
            "description": "<p>Mã Ca.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ghi_chu",
            "description": "<p>Ghi Chú.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Tình Trạng.</p>"
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
            "description": "<p>Dữ liệu Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tạo thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ngay\": \"Ngày không hợp lệ (ngày/tháng/năm)\",\n        \"ma_lop\": \"Lớp không tồn tại\",\n        \"ma_mon_hoc\": \"Môn học không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Dữ liệu bạn nhập không hợp lệ,không có bất kì đề xuất nào cả\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_day_bo_sung.php",
    "groupTitle": "Lịch_Dạy_Bổ_Sung"
  },
  {
    "type": "POST",
    "url": "lichdaybosung/xoa",
    "title": "1.3. Xóa Lịch Dạy Bổ Sung",
    "version": "0.1.0",
    "name": "Xóa_Lịch_Dạy_Bổ_Sung",
    "group": "Lịch_Dạy_Bổ_Sung",
    "description": "<p>Dùng để Xóa Lịch Dạy Bổ Sung<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> --> <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> --> </div><br> +Chỉ xóa được lịch ở hôm nay hoặc tương lai.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichdaybosung/xoa"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_lich_day_bo_sung\": 6\n}",
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
            "field": "ma_lich_day_bo_sung",
            "description": "<p>Mã Lịch Dạy Bổ Sung.</p>"
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
            "description": "<p>Dữ liệu Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Xóa thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_lich_day_bo_sung\": \"Lịch dạy bổ sung không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không thể xóa lịch dạy bổ sung trong quá khứ\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_day_bo_sung.php",
    "groupTitle": "Lịch_Dạy_Bổ_Sung"
  },
  {
    "type": "POST",
    "url": "lichdaybosung/dexuat",
    "title": "1.2. Đề Xuất Lịch Dạy Bổ Sung",
    "version": "0.1.0",
    "name": "Đề_Xuất_Lịch_Dạy_Bổ_Sung",
    "group": "Lịch_Dạy_Bổ_Sung",
    "description": "<p>Dùng để đề xuất Lịch Dạy Bổ Sung<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> --> <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> </div><br> +Mã giáo viên,mã lớp,mã môn học là nhưng yếu tố bắt buộc phải có.<br> +Ngày truyền vào chỉ có thể truyền ngày hôm nay đến tương lai.<br> +Có thể không truyền số giờ sẽ tự lấy = 2.<br> +Có thể không truyền số ngày sẽ tự lấy = 7.<br> +Có thể không truyền ngày sẽ tự lấy ngày hôm nay.<br> +Nếu người đó là giáo viên sẽ tự lấy mã giáo viên của người dùng đó.<br> +Giáo vụ mới có thể xem đề xuất của tất cả giáo viên.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichdaybosung/dexuat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": 6,\n    \"so_gio\": 4,\n    \"ma_lop\": \"BKD01K10\",\n    \"so_ngay\": 1,\n    \"ma_mon_hoc\": \"BKA_ESE\"\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã Giáo Viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_gio",
            "description": "<p>Số giờ kiểm tra 2 hoặc 4.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lop",
            "description": "<p>Mã Lớp .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_ngay",
            "description": "<p>Số ngày kiểm tra.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Mã môn học cần kiểm tra.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngay",
            "description": "<p>Ngày bắt đầu kiểm tra.</p>"
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
            "description": "<p>Dữ liệu Lịch Dạy Bổ Sung.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"2020-08-22\": [\n            {\n                \"thu\": 7,\n                \"ma_phong\": \"3\",\n                \"ma_ca\": 4,\n                \"gio_bat_dau\": \"08:00:00\",\n                \"gio_ket_thuc\": \"12:00:00\",\n                \"ten_phong\": \"Lab 202\",\n                \"so_cho_ngoi\": 40\n            },\n            {\n                \"thu\": 7,\n                \"ma_phong\": \"3\",\n                \"ma_ca\": 7,\n                \"gio_bat_dau\": \"13:30:00\",\n                \"gio_ket_thuc\": \"17:30:00\",\n                \"ten_phong\": \"Lab 202\",\n                \"so_cho_ngoi\": 40\n            },\n            {\n                \"thu\": 7,\n                \"ma_phong\": \"4\",\n                \"ma_ca\": 4,\n                \"gio_bat_dau\": \"08:00:00\",\n                \"gio_ket_thuc\": \"12:00:00\",\n                \"ten_phong\": \"Lab 203\",\n                \"so_cho_ngoi\": 50\n            },\n            {\n                \"thu\": 7,\n                \"ma_phong\": \"4\",\n                \"ma_ca\": 7,\n                \"gio_bat_dau\": \"13:30:00\",\n                \"gio_ket_thuc\": \"17:30:00\",\n                \"ten_phong\": \"Lab 203\",\n                \"so_cho_ngoi\": 50\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_lop\": \"Lớp không tồn tại\",\n        \"ma_mon_hoc\": \"Môn học không tồn tại\",\n        \"so_gio\": \"Số giờ học chỉ có thể là 2 hoặc 4\",\n        \"so_ngay\": \"Số ngày chỉ từ 1 đến 29\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_day_bo_sung.php",
    "groupTitle": "Lịch_Dạy_Bổ_Sung"
  },
  {
    "type": "POST",
    "url": "lichhoc/dukienketthuc",
    "title": "1.2. Dự kiến kết thúc một Phân Công",
    "version": "0.1.0",
    "name": "Dự_Kiến_Kết_Thúc",
    "group": "Lịch_Học",
    "description": "<p>Dự kiến kết thúc một Phân Công<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Nếu giáo vụ được kiểm tra ở tất cả các phân công chưa kết thúc<br>     +Nếu giáo viên chỉ xem được phân công của chính mình<br>     +ngay_nghi = true là nghỉ = false là lịch <br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichhoc/dukienketthuc"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"1\",\n    \"ma_phan_cong\": 426\n}",
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
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
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
          "content": "    HTTP/1.1 200 OK\ncó nhiều messgae : Đã hoàn thành lịch dạy vào ngày 20-08-2020 hoặc Dự kiến kết thúc vào ngày 01-09-2020 còn cả các message khác nữa\n{\n    \"success\": true,\n    \"message\": \"Dự kiến kết thúc vào ngày 01-09-2020\",\n    \"data\": {\n        \"ma_lop\": \"BKD01K10\",\n        \"ma_mon_hoc\": \"BKA_WEB\",\n        \"giao_vien\": {\n            \"ma_nguoi_dung\": 32,\n            \"ho_ten\": \"Nguyễn Nam Long\",\n            \"tai_khoan\": \"long.nn\",\n            \"email\": \"long.nn@bkacad.edu.vn\",\n            \"sdt\": \"0378050602\"\n        },\n        \"lich_day\": [\n            {\n                \"ngay\": \"2020-07-10\",\n                \"gio_bat_dau\": \"13:30:00\",\n                \"gio_ket_thuc\": \"15:30:00\",\n                \"phong\": null\n            },\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Người dùng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_hoc.php",
    "groupTitle": "Lịch_Học"
  },
  {
    "type": "POST",
    "url": "lichhoc/giaovien",
    "title": "1.1. Lịch Dạy Của Giáo Viên",
    "version": "0.1.0",
    "name": "Hiện_thị_lịch_dạy_của_Giáo_Viên",
    "group": "Lịch_Học",
    "description": "<p>Hiện thị lịch dạy của Giáo Viên<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần lấy thôn tin của mã giáo viên nào truyền vào mã giáo viên đó.<br>     +Có thể không truyền gì nếu lấy thông tin của chính mình<br>     +ngay_nghi = true là nghỉ = false là lịch <br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichhoc/giaovien"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"1\",\n    \"ma_giao_vien\": 6\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>mã của Giáo Viên.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"2020-07-11\": [\n            {\n                \"ngay\": \"2020-07-11\",\n                \"gio_bat_dau\": \"13:30:00\",\n                \"gio_ket_thuc\": \"15:30:00\",\n                \"phong\": null,\n                \"ma_lop\": \"BKD01K10\",\n                \"ma_mon_hoc\": \"BKA_ESE\",\n                \"so_gio\": \"2.0000\",\n                \"nghi\": false\n            }\n        ],\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Người dùng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_hoc.php",
    "groupTitle": "Lịch_Học"
  },
  {
    "type": "POST",
    "url": "lichhoc/lichtrong",
    "title": "1.4. Lấy Phòng Còn Trống",
    "version": "0.1.0",
    "name": "Lấy_Phòng_Còn_Trốngg",
    "group": "Lịch_Học",
    "description": "<p>Lấy Phòng Còn Trống<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> -->  </div><br>         +Truyền vào số ngày xử lý,không truyền sẽ tự lấy = 7<br>         +Truyền vào số giờ 2 hoặc 4 giờ<br>         +Mã phòng không tìm kiếm <br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichhoc/lichtrong"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"1\",\n    \"ma_phong\": [5,3],\n    \"so_ngay\":1,\n    \"so_gio\":4\n}",
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
            "field": "ma_phong",
            "description": "<p>Ma Phòng.</p>"
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
            "description": "<p>Kết quả.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"2020-08-31\": [\n            {\n                \"ngay\": \"2020-08-31\",\n                \"ma_phong\": 1,\n                \"ten_phong\": \"Kho\",\n                \"ma_ca\": 7,\n                \"gio_bat_dau\": \"13:30:00\",\n                \"gio_ket_thuc\": \"17:30:00\"\n            },\n            {\n                \"ngay\": \"2020-08-31\",\n                \"ma_phong\": 4,\n                \"ten_phong\": \"Lab 203\",\n                \"ma_ca\": 7,\n                \"gio_bat_dau\": \"13:30:00\",\n                \"gio_ket_thuc\": \"17:30:00\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_phong\": \"Phòng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_hoc.php",
    "groupTitle": "Lịch_Học"
  },
  {
    "type": "POST",
    "url": "lichhoc/lichphong",
    "title": "1.3. Lấy ra lịch hoạt động của một phòng nào đó",
    "version": "0.1.0",
    "name": "Lịch_Hoạt_Động_Phòng",
    "group": "Lịch_Học",
    "description": "<p>Lịch Hoạt Động Phòng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> -->  </div><br>         +Cần truyền vào mã phòng<br>         +Sẽ trả thêm ngày nghỉ nếu ngày đó cả trường nghỉ<br>         +ngay_nghi = true là nghỉ = false là lịch <br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/lichhoc/lichphong"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"1\",\n    \"ma_phong\": 2\n}",
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
            "field": "ma_phong",
            "description": "<p>Ma Phòng.</p>"
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
            "description": "<p>Kết quả.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"2020-08-29\": [\n            {\n                \"ngay\": \"2020-08-29\",\n                \"gio_bat_dau\": \"08:00:00\",\n                \"gio_ket_thuc\": \"10:00:00\",\n                \"ma_lop\": \"BIT01K10\",\n                \"ma_mon_hoc\": \"BIT_ECOM1\",\n                \"ma_nguoi_dung\": 6,\n                \"ho_ten\": \"Lê Thị Hương Liên\",\n                \"so_gio\": \"2.0000\",\n                \"hoat_dong\": \"Bất Thường\",\n                \"nghi\": false\n            }\n        ],\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_phong\": \"Phòng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/lich_hoc.php",
    "groupTitle": "Lịch_Học"
  },
  {
    "type": "POST",
    "url": "monhoc/clone",
    "title": "1.2. Clone Mon Từ DTB VỀ Local",
    "version": "0.1.0",
    "name": "CLone",
    "group": "Môn_Học",
    "description": "<p>Sử dụng để clone môn học<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Chỉ chạy một lần<br>     +Clone môn dựa vào mã môn nếu không có sẽ được tạo ra<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/monhoc/clone"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"key\",\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Đã tạo mới 2 bản ghi và Cập nhật 1 bản ghi\",\n    \"data\": {\n        \"create\": [\n            {\n                \"ten_mon_tieng_anh\": \"Digital Businesss and E-Commerce Management\",\n                \"ten_mon_tieng_viet\": \"Quản trị thương mại điện tử\",\n                \"so_gio\": 45,\n                \"ma_kieu_thi\": 3,\n                \"ma_mon_hoc\": \"0\"\n            },\n            {\n                \"ten_mon_tieng_anh\": \"Graduation Dissertation\",\n                \"ten_mon_tieng_viet\": \"Luận văn tốt nghiệp\",\n                \"so_gio\": 100,\n                \"ma_kieu_thi\": 3,\n                \"ma_mon_hoc\": \"0\"\n            }\n        ],\n        \"update\": [\n            {\n                \"ma_mon_hoc\": \"BIT_LAW\",\n                \"changer\": {\n                    \"ten_mon_tieng_anh\": \"Business Law\",\n                    \"ten_mon_tieng_viet\": \"Luật kinh tế\"\n                }\n            }\n        ]\n    }\n}",
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
    "filename": "duong_doc/mon_hoc.php",
    "groupTitle": "Môn_Học"
  },
  {
    "type": "POST",
    "url": "monhoc",
    "title": "1.1. Hiển thị tất cả các Môn Học",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Môn_Học",
    "group": "Môn_Học",
    "description": "<p>Dùng để hiện thị thông tin Môn Học<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần lấy thông tin ca nào truyền thông tin mã Môn Học đó<br>     +Nếu lấy tất cả thì không truyền gì cả<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/monhoc"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\"\n}",
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
            "field": "ma_mon_hoc",
            "description": "<p>mã của Môn học.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_mon_hoc\": \"BIT_ACC\",\n            \"ten_mon_tieng_viet\": \"Kế toán doanh nghiệp\",\n            \"ten_mon_tieng_anh\": \"Business Accounting\"\n        },\n        {\n            \"ma_mon_hoc\": \"BIT_AP\",\n            \"ten_mon_tieng_viet\": \"Lập trình nâng cao\",\n            \"ten_mon_tieng_anh\": \"Advanced Programming\"\n        }\n    ]\n}\n\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"ma_mon_hoc\": \"BIT_ACC\",\n        \"ten_mon_tieng_viet\": \"Kế toán doanh nghiệp\",\n        \"ten_mon_tieng_anh\": \"Business Accounting\",\n        \"so_gio\": \"45\",\n        \"ma_kieu_thi\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_mon_hoc\": \"Môn học không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/mon_hoc.php",
    "groupTitle": "Môn_Học"
  },
  {
    "type": "POST",
    "url": "monhoc/kiemtra",
    "title": "1.3. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Môn_Học",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ma_mon_hoc\": \"BIT_AClC\"\n}",
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
            "field": "ma_mon_hoc",
            "description": "<p>Ma mon. .</p>"
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
            "description": "<p>Kết quả.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_mon_hoc\": \"Môn học không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/mon_hoc.php",
    "groupTitle": "Môn_Học"
  },
  {
    "type": "POST",
    "url": "nguoidung/clone",
    "title": "2.1. Clone User Từ DTB VỀ Local",
    "version": "0.1.0",
    "name": "CLone",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để lấy tài khoản cũng như cập nhật thông tin cho tài khoản<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Chỉ chạy một lần<br>     +Email thay đổi sẽ tạo user mới<br>     +Lấy thông tin của chính mình không cần truyền ma<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/clone"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"key\",\n}",
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
    "url": "nguoidung/reset",
    "title": "1.5. Khôi Phục Mật Khẩu",
    "version": "0.1.0",
    "name": "Khôi_Phục_Mật_Khẩu",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để khôi phục mật khẩu cho tài khoản</p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/reset"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"email\":\"demo@gmail.com\",\n}",
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
    "url": "nguoidung/kiemtra",
    "title": "1.8. Kiểm Tra Quy Tắc",
    "version": "0.1.0",
    "name": "Kiểm_Tra_Quy_Tắc",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để kiểm tra quy tắc hợp lệ cũng như trong hệ thống đã có chưa: <br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Chức năng dành cho tất cả user phục vụ cho việc đổi thông tin<br>     +Phục vụ cho Giáo Vụ khi tạo tài khoản<br>     +Cần kiểm tra dữ liệu nào thì truyền tương ứng<br>     +Có thể truyền 1,2 hoặc tất cả các dữ liệu<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"Keyapi\",\n    \"email\" :\"cds@gmail.com\",\n    \"sdt\": \"1\",\n    \"tai_khoan\" : \"cd\",\n    \"mat_khau\":\"cd\",\n    \"mat_khau_moi\":\"d\"\n}",
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
    "url": "nguoidung/kiemtrakey",
    "title": "1.9. Kiểm tra KEY của người dùng có hợp lệ không",
    "version": "0.1.0",
    "name": "Kiểm_tra_KEY",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để kiểm tra key của người dùng cung cấp</p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/kiemtrakey"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" => \"key\",\n}",
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
    "url": "nguoidung/danhsach",
    "title": "1.7. Hiển Thị Danh Sách Kĩ Thuật Và Giáo Viên Trong Hệ Thống",
    "version": "0.1.0",
    "name": "LIST_GV_KT",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để hiển thị danh sách Kĩ Thuật Và Giáo Viên<br> -Lưu ý: <br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         *Nếu là Giáo Vụ : trả về danh sách Giáo Viên và Kĩ Thuật         *Nếu là GV hoặc KT:trả về thông tin của chính mình     +Chưa có phân trang (sẽ update nếu cần)<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/danhsach"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" => \"key\",\n}",
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
    "url": "nguoidung/thongtin",
    "title": "2.0. Lấy thông tin Người Dùng",
    "version": "0.1.0",
    "name": "Lấy_thông_tin",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để lấy thông tin người dùng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Chức năng dành cho tất cả user phục vụ cho việc lấy thông tin<br>     +Giáo vụ lấy thông tin các người dùng khác và không lấy được thông tin của Giáo Vụ khác<br>     +GV hoặc KT sẽ trả về thông tin của mình<br>     +Lấy thông tin của chính mình không cần truyền ma<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/thongtin"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"key\",\n    \"ma\" :\"58\"\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": false,\n    \"message\": \"Lấy dữ liệu thất bại\",\n    \"data\": []\n}",
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
    "description": "<p>Sử dụng thay đổi thông tin tài khoản<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Email,Sdt,mat_khau phải tuân thủ quy tắc như khi tạo tài khoản<br>     +Có thể truyền yếu tố thay đổi không bắt buộc truyền tất cả<br>     +Nếu là giáo vụ mới được phép thay đổi thông tin của Giáo Viên hoặc Kĩ Thuật<br>     +Nếu là Giáo Viên hoặc Kĩ Thuật có thể để \"id\" ngẫu nhiên nhưng vẫn sẽ thay đổi thông tin tài khoản của chính họ<br>     +Giáo Vụ không được đổi thông tin của giáo vụ khác<br>     +Giáo Vụ có thể đổi mật khẩu của KT hoặc GV mà không cần biết mật khẩu cũ<br>     +GV hoặc KT không thể đổi mật khẩu của mình bằng chức năng này <br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/capnhatthongtin/{id}"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/nguoidung/capnhatthongtin/58\n{\n    \"key\": \"keyapi\",\n    \"email\" : \"vhfjvbfjh@gmail.com\",\n    \"tai_khoan\" : \"changer\",\n    \"sdt\" : \"0854217842\"\n}",
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
    "description": "<p>Sử dụng để đăng nhập vào hệ thông với tài khoản và mật khẩu</p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/dangnhap"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "http://localhost:8080/github/pri/public/api/dangnhap/test/d3d9446802a44259755d38e6d163e820",
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
    "url": "dangxuat",
    "title": "1.3. Đăng Xuất",
    "version": "0.1.0",
    "name": "Đăng_Xuất",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để đăng xuất cho tài khoản</p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/dangxuat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"KEYAPI\",\n}",
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
    "url": "nguoidung/tao",
    "title": "1.1. Tạo Người Dùng",
    "version": "0.1.0",
    "name": "Đăng_kí",
    "group": "NguoiDung",
    "description": "<p>Dùng để tạo người dùng là giáo viên<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Cần gửi đầy đủ các dữ liệu được yêu cầu.<br>     +Nếu SDT,Họ Tên,Mật Khẩu trống hệ thống sẽ tự tạo ngẫu nhiên.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/tao"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"kdvkfJxgcd\",\n    \"tai_khoan\": \"demo\",\n    \"email\": \"hdgggvjhg@gmail.com\",\n    \"sdt\": \"0984578452\",\n    \"mat_khau\": \"c4ca4238a0b923820dcc509a6f75849b\",\n    \"ho_ten\" : \"Nguyen Văn Nhất\"\n}",
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
    "description": "<p>Sử dụng để đổi mật khẩu cho tài khoản</p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần gửi đầy đủ các dữ liệu được yêu cầu.<br>     +Nếu trùng mật khẩu mới và cũ sẽ không thực hiện đổi.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidung/doimatkhau"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"keyapi\",\n    \"mat_khau\" : \"d3d9446802a44259755d38e6d163e820\",\n    \"mat_khau_moi\" : \"d3d9446802a44259755d38e6d163e821\"\n}",
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
    "url": "ngaynghi/kiemtra",
    "title": "1.5. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Ngày_Nghỉ",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/cauhinh/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ngay_cu\" : \"01-07-202đ0\",\n    \"ma_giao_vien_cu\" : \"1d0\",\n    \"ma_ca_cu\" : \"d3\",\n    \"tinh_trang\" :\"2d\"\n}",
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
            "field": "ngay_cu",
            "description": "<p>Ngày cũ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_giao_vien_cu",
            "description": "<p>Giáo Viên cũ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngay",
            "description": "<p>Ngày mới.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_ca",
            "description": "<p>Ca mới.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Tình trạng mới.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_giao_vien",
            "description": "<p>Giáo Viên Mới. .</p>"
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
            "description": "<p>Kết quả.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ngay_cu\": \"Ngày cũ không hợp lệ\",\n        \"ma_ca_cu\": \"Ca cũ không tồn tại\",\n        \"tinh_trang\": \"Tình trạng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/ngay_nghi.php",
    "groupTitle": "Ngày_Nghỉ"
  },
  {
    "type": "POST",
    "url": "ngaynghi/sua",
    "title": "1.4. Sửa Ngày Nghỉ",
    "version": "0.1.0",
    "name": "Sửa_Ngày_Nghỉ",
    "group": "Ngày_Nghỉ",
    "description": "<p>Dùng để Sửa Ngày Nghỉ Mới<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> --> <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> --> </div><br> +Cần truyền đầy đủ các dữ liệu cũ<br> +Hiện chưa hỗ trợ cập nhật tình trạng khi tình trang = 2<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/ngaynghi/them"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ngay_cu\" : \"01-07-2020\",\n    \"ma_giao_vien_cu\" : \"10\",\n    \"ma_ca_cu\" : \"3\",\n    \"tinh_trang\" :\"2\"\n}",
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
            "field": "ngay_cu",
            "description": "<p>Ngày cũ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_giao_vien_cu",
            "description": "<p>Giáo Viên cũ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngay",
            "description": "<p>Ngày mới.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_ca",
            "description": "<p>Ca mới.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Tình trạng mới.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_giao_vien",
            "description": "<p>Giáo Viên Mới.</p>"
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
            "description": "<p>Dữ liệu Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Cập nhật thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ngay\": \"Ngày không hợp lệ (ngày/tháng/năm)\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/ngay_nghi.php",
    "groupTitle": "Ngày_Nghỉ"
  },
  {
    "type": "POST",
    "url": "ngaynghi/them",
    "title": "1.3. Thêm Ngày Nghỉ",
    "version": "0.1.0",
    "name": "Thêm_Ngày_Nghỉ",
    "group": "Ngày_Nghỉ",
    "description": "<p>Dùng để Thêm Ngày Nghỉ Mới<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> --> <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> --> </div><br> +Có thể truyền mảng ma_giao_vien với tất cả những giáo viên này nghỉ cũng ngày cùng ghi chú.<br> +Truyền thường thì chỉ giáo viên đó.<br> +Có tình trạng sẽ lấy tình trạng nếu không auto tinh_trang = 1. <br> +Có ghi_chu sẽ lấy ghi_chu nếu không auto ghi_chu = null. <br> +Nếu ngày nghỉ đó tồn tại lịch dạy bổ sung sẽ tự hủy lịch dạy bổ sung đó.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/ngaynghi/them"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ngay\": \"29-08-2020\",\n    \"ma_giao_vien\" : [0],\n    \"ma_ca\":[2,5]\n}",
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
            "field": "ma_cau_hinh",
            "description": "<p>Mã cấu hình.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Là mã môn truyền dạng mảng nếu truyền thường chỉ thu một môn.</p>"
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
            "description": "<p>Dữ liệu Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tồn tại 2 ngày nghỉ, Đã cập nhật hủy bỏ 1 Lịch Dạy Bổ Sung\",\n    \"data\": {\n        \"create\": [],\n        \"exists\": [],\n        \"update\": [],\n        \"lich_day_bo_sung\": [\n            {\n                \"ma_lich_day_bo_sung\": 2,\n                \"ngay\": \"2020-08-29\",\n                \"ma_lop\": \"BIT01K10\",\n                \"nguoi_dung\": {\n                    \"ma_nguoi_dung\": 6,\n                    \"ho_ten\": \"Lê Thị Hương Liên\",\n                    \"tai_khoan\": \"yuki.lien85\",\n                    \"email\": \"yuki.lien85@gmail.com\",\n                    \"sdt\": \"0989186985\"\n                },\n                \"ma_mon_hoc\": \"BIT_ECOM1\",\n                \"ca\": {\n                    \"ma_ca\": 2,\n                    \"gio_bat_dau\": \"08:00:00\",\n                    \"gio_ket_thuc\": \"10:00:00\"\n                },\n                \"phong\": {\n                    \"ma_phong\": 5,\n                    \"ten_phong\": \"Lab 5\",\n                    \"so_cho_ngoi\": 35,\n                    \"ma_tang\": 4,\n                    \"ma_tinh_trang\": 1,\n                    \"ghi_chu\": \"\"\n                },\n                \"ghi_chu\": \"\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ngay\": \"Ngày không hợp lệ (ngày/tháng/năm)\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/ngay_nghi.php",
    "groupTitle": "Ngày_Nghỉ"
  },
  {
    "type": "POST",
    "url": "ngaynghi/giaovien",
    "title": "1.2. Thống kê ngày nghỉ",
    "version": "0.1.0",
    "name": "Thống_kê_số_buổi_nghỉ_của_tất_cả_Người_Dùng",
    "group": "Ngày_Nghỉ",
    "description": "<p>Dùng để trả về Số Ngày Nghỉ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> </div><br> +Nếu là Giáo Vụ sẽ lấy đếm được ngày nghỉ của tất cả Người Dùng.<br> +Nếu là GV hoặc KT chỉ đếm được ngày nghỉ của chính mình.<br> +Giáo Vụ có thể truyền thêm ma_giao_vien thì sẽ chỉ lấy theo ma_giao_vien đó.<br> +Chỉ đếm tinh_trang = 1.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/ngaynghi/giaovien"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\"\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã của giáo viên hoặc KT.</p>"
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
            "description": "<p>Dữ liệu Ngày Nghỉ.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_nguoi_dung\": 10,\n            \"ho_ten\": \"Trần Thị Dung\",\n            \"ma_cap_do\": 3,\n            \"ten_cap_do\": \"Giáo Viên\",\n            \"ngay_nghi_count\": 2,\n            \"ngay_nghi\": [\n                {\n                    \"ngay\": \"2020-07-10\",\n                    \"ma_giao_vien\": 10,\n                    \"ma_ca\": 1,\n                    \"ghi_chu\": \"Đi chơi\",\n                    \"tinh_trang\": 1\n                },\n                {\n                    \"ngay\": \"2020-07-17\",\n                    \"ma_giao_vien\": 10,\n                    \"ma_ca\": 6,\n                    \"ghi_chu\": null,\n                    \"tinh_trang\": 1\n                }\n            ]\n        },\n        {\n            \"ma_nguoi_dung\": 1,\n            \"ho_ten\": null,\n            \"ma_cap_do\": 1,\n            \"ten_cap_do\": \"Giáo Vụ\",\n            \"ngay_nghi_count\": 1,\n            \"ngay_nghi\": [\n                {\n                    \"ngay\": \"2020-07-09\",\n                    \"ma_giao_vien\": 1,\n                    \"ma_ca\": 3,\n                    \"ghi_chu\": null,\n                    \"tinh_trang\": 1\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/ngay_nghi.php",
    "groupTitle": "Ngày_Nghỉ"
  },
  {
    "type": "POST",
    "url": "ngaynghi",
    "title": "1.1. Hiển thị tất cả Ngày Nghỉ",
    "version": "0.1.0",
    "name": "Tất_cả_Ngày_Nghỉ",
    "group": "Ngày_Nghỉ",
    "description": "<p>Dùng để trả về ngày nào có những ai nghỉ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> </div><br> +Nếu không truyền ngày sẽ lấy tất cả các dữ liệu.<br> +Nếu có truyền ngày sẽ lấy dữ liệu ngày đó.<br> +Nếu truyền thêm tuong_lai (có biến là được) sẽ lấy dữ liệu >= hôm nay.<br> +Nếu giáo vụ được phép lấy về ngày nghỉ của tất cả Người Dùng.<br> +Nếu Giáo Vụ truyền vào ma_giao_vien sẽ lấy theo mã Giáo Viên đó không truyền sẽ lấy tất cả.<br> +Nếu GV hoặc KT chỉ lấy về được ngày nghỉ của chính mình với nhưng tiêu chí như bên trên.<br> +Tự động lấy các ngày nghỉ có tinh_trang  = 1, nếu truyền tinh_trang sẽ lấy theo tinh_trang được truyền .<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/ngaynghi"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"keyapi\"\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã của giáo viên hoặc KT.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Tình trạng của ngày nghỉ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tuong_lai",
            "description": "<p>Chỉ cần có không cần Value.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ngay",
            "description": "<p>Ngày cần lấy dữ liệu.</p>"
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
            "description": "<p>Dữ liệu Ngày Nghỉ.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": {\n        \"2020-08-29\": [\n            {\n                \"tinh_trang\": 1,\n                \"nguoidung\": {\n                    \"ma_nguoi_dung\": 5,\n                    \"ho_ten\": null,\n                    \"tai_khoan\": \"kithuat\",\n                    \"email\": \"kithuat@gmail.com\",\n                    \"sdt\": \"6\"\n                },\n                \"ca\": [\n                    {\n                        \"ma_ca\": 3,\n                        \"gio_bat_dau\": \"10:00:00\",\n                        \"gio_ket_thuc\": \"12:00:00\",\n                        \"ngay_nghi\": [\n                            {\n                                \"ma_ca\": 3,\n                                \"ghi_chu\": \"thích nghỉ\"\n                            }\n                        ]\n                    },\n                    {\n                        \"ma_ca\": 5,\n                        \"gio_bat_dau\": \"13:30:00\",\n                        \"gio_ket_thuc\": \"15:30:00\",\n                        \"ngay_nghi\": [\n                            {\n                                \"ma_ca\": 5,\n                                \"ghi_chu\": null\n                            }\n                        ]\n                    },\n                    {\n                        \"ma_ca\": 6,\n                        \"gio_bat_dau\": \"15:30:00\",\n                        \"gio_ket_thuc\": \"17:30:00\",\n                        \"ngay_nghi\": [\n                            {\n                                \"ma_ca\": 6,\n                                \"ghi_chu\": \"nghi ddi choiwi\"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"tinh_trang\": \"Tình trạng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/ngay_nghi.php",
    "groupTitle": "Ngày_Nghỉ"
  },
  {
    "type": "POST",
    "url": "nguoidungbomon/themhoacsua",
    "title": "1.3. Cập Nhật Hoặc Lưu Môn Mới Dạy Được Của Người Dùng",
    "version": "0.1.0",
    "name": "Cập_Nhật_Môn_Giáo_Viên_có_thể_dạy",
    "group": "Người_Dùng_Bộ_Môn",
    "description": "<p>Dùng để cập nhật thông tin Người Dùng Bộ Môn<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Cần mã giáo viên và mã môn để hoạt động.<br>     +Giáo Viên đó có phân công cho môn và phân công còn hiệu lực thì sẽ không được thay đổi hủy dạy môn đó.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidungbomon/themhoacsua"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": [6,6],\n    \"ma_mon_hoc\":[\"BKA_NA4\",\"BKA_IOT\",\"BKA_HAT_AV1\",\"BKA_ESE\"]\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã giáo viên cẩn kiểm tra dạng ARRAY.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Mã môn học cẩn kiểm tra dạng ARRAY.</p>"
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
            "description": "<p>Dữ liệu của Người Dùng Bộ Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Cập nhật thành công , Các môn đang được phân công sẽ tự động được chọn\",\n    \"data\": {\n        \"create\": [\n            {\n                \"ma_nguoi_dung\": 6,\n                \"ma_mon_hoc\": \"BKA_NA4\"\n            },\n            {\n                \"ma_nguoi_dung\": 6,\n                \"ma_mon_hoc\": \"BKA_IOT\"\n            }\n        ],\n        \"exists\": [\n            {\n                \"ma_nguoi_dung\": 6,\n                \"ma_mon_hoc\": \"BKA_ESE\"\n            },\n            {\n                \"ma_nguoi_dung\": 6,\n                \"ma_mon_hoc\": \"BKA_HAT_AV1\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\",\n        \"ma_mon_hoc\": \"Môn học không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung_bo_mon.php",
    "groupTitle": "Người_Dùng_Bộ_Môn"
  },
  {
    "type": "POST",
    "url": "nguoidungbomon",
    "title": "1.1. Hiển thị tông tin các Người Dùng Bộ Môn hoặc một Người Dùng Bộ Môn",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_những_môn_mà_một_Người_Dùng_có_thể_dạy_được",
    "group": "Người_Dùng_Bộ_Môn",
    "description": "<p>Hiện thị thông tin những môn mà một Người Dùng có thể dạy được<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>  <!--     <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần lấy mã giáo viên nào có thể truyền mã giáo viên đó.<br>     +Cần lấy nhiều giáo viên hãy truyền nhiều giáo viên.<br>     +Giáo Viên và Môn bắt buộc phải dạng mảng.<br>     +Nếu lấy tất cả thì không truyền gì cả.<br>     +Nếu là giáo viên chỉ có thể lấy thông tin của chính mình.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidungbomon"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": [25]\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã giáo viên cẩn kiểm tra dạng ARRAY.</p>"
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
            "description": "<p>Dữ liệu của Người Dùng Bộ Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_nguoi_dung\": 25,\n            \"ho_ten\": \"Lê Quang Thắng\",\n            \"email\": \"thang.lequang@hust.edu.vn\",\n            \"so_mon_day_duoc\": 2,\n            \"nguoi_dung_bo_mon\": [\n                {\n                    \"ma_nguoi_dung\": 25,\n                    \"ma_mon_hoc\": \"BKA_HAT_CTMT\",\n                    \"mon_hoc\": {\n                        \"ma_mon_hoc\": \"BKA_HAT_CTMT\",\n                        \"ten_mon_tieng_viet\": \"Cấu trúc máy tính\",\n                        \"ten_mon_tieng_anh\": \"Cấu trúc máy tính\"\n                    }\n                },\n                {\n                    \"ma_nguoi_dung\": 25,\n                    \"ma_mon_hoc\": \"BKA_HAT_KTDT\",\n                    \"mon_hoc\": {\n                        \"ma_mon_hoc\": \"BKA_HAT_KTDT\",\n                        \"ten_mon_tieng_viet\": \"Kỹ thuật điện tử\",\n                        \"ten_mon_tieng_anh\": \"Kỹ thuật điện tử\"\n                    }\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên phải là dạng mảng\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung_bo_mon.php",
    "groupTitle": "Người_Dùng_Bộ_Môn"
  },
  {
    "type": "POST",
    "url": "nguoidungbomon/kiemtra",
    "title": "1.4. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Người_Dùng_Bộ_Môn",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>         +Có thể truyền 1 hay nhiều yếu tố         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên         +Nếu trả về hợp lệ là tất cả đều hợp lệ",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidungbomon/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": [6,699],\n    \"ma_mon_hoc\":[\"BKA_NAs4\",\"BKA_IOT\",\"BKA_HAT_AV1\",\"BKA_ESE\"]\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã giáo viên cẩn kiểm tra dạng ARRAY.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_mon_hoc",
            "description": "<p>Mã môn học cẩn kiểm tra dạng ARRAY.</p>"
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
            "description": "<p>Dữ liệu của Người Dùng Bộ Môn.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\",\n        \"ma_mon_hoc\": \"Môn học không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung_bo_mon.php",
    "groupTitle": "Người_Dùng_Bộ_Môn"
  },
  {
    "type": "POST",
    "url": "nguoidungbomon/thongke",
    "title": "1.2. Thống kê những môn dạy của các giáo viên",
    "version": "0.1.0",
    "name": "Đếm_số_môn",
    "group": "Người_Dùng_Bộ_Môn",
    "description": "<p>Dùng để đếm số môn mà người dùng dạy được<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Cần lấy mã giáo viên nào có thể truyền mã giáo viên đó.<br>     +Cần lấy nhiều giáo viên hãy truyền nhiều giáo viên.<br>     +Giáo Viên và Môn bắt buộc phải dạng mảng.<br>     +Lấy tất cả thì không cần truyền gì cả.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/nguoidungbomon/thongke"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_giao_vien\": [6,25,30]\n}",
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
            "field": "ma_giao_vien",
            "description": "<p>Mã giáo viên cẩn kiểm tra dạng ARRAY. .</p>"
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
            "description": "<p>Dữ liệu của Người Dùng Bộ Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_nguoi_dung\": 6,\n            \"ho_ten\": \"Lê Thị Hương Liên\",\n            \"email\": \"yuki.lien85@gmail.com\",\n            \"so_mon_day_duoc\": 5\n        },\n        {\n            \"ma_nguoi_dung\": 25,\n            \"ho_ten\": \"Lê Quang Thắng\",\n            \"email\": \"thang.lequang@hust.edu.vn\",\n            \"so_mon_day_duoc\": 2\n        },\n        {\n            \"ma_nguoi_dung\": 30,\n            \"ho_ten\": \"Thương Thương Trần\",\n            \"email\": \"thuongtt@bkacad.edu.vn\",\n            \"so_mon_day_duoc\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/nguoi_dung_bo_mon.php",
    "groupTitle": "Người_Dùng_Bộ_Môn"
  },
  {
    "type": "POST",
    "url": "phancong/clone",
    "title": "1.2. Clone Mon Từ DTB VỀ Local",
    "version": "0.1.0",
    "name": "CLone",
    "group": "Phân_Công",
    "description": "<p>Sử dụng để clone môn học<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Chỉ chạy một lần<br>     +Clone nếu môn không tồn tại sẽ tạo ra môn đó<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancong/clone"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"key\",\n}",
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
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Đã tạo mới 2 bản ghi và Cập nhật 1 bản ghi\",\n    \"data\": {\n        \"create\": [\n            {\n                \"tinh_trang\": 2,\n                \"ma_nguoi_dung\": 33,\n                \"ma_lop\": \"BIT02K10\",\n                \"ma_mon_hoc\": \"BIT_GE\",\n                \"ma_phan_cong\": 713\n            },\n            {\n                \"tinh_trang\": 2,\n                \"ma_nguoi_dung\": 19,\n                \"ma_lop\": \"BIT02K10\",\n                \"ma_mon_hoc\": \"BIT_PLD\",\n                \"ma_phan_cong\": 714\n            }\n        ],\n        \"update\": [\n            {\n                \"ma_lop\": \"BIT02K10\",\n                \"ma_mon_hoc\": \"BIT_WEB\",\n                \"changer\": {\n                    \"ma_nguoi_dung\": 19\n                }\n            }\n        ]\n    }\n}",
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
    "filename": "duong_doc/phan_cong.php",
    "groupTitle": "Phân_Công"
  },
  {
    "type": "POST",
    "url": "phancong",
    "title": "1.1. Hiển thị tất cả các Phân Công",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Phân_Công",
    "group": "Phân_Công",
    "description": "<p>Dùng để hiện thị thông tin Phân Công<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Chỉ giáo vụ mới được phép lấy mã phân công của bất cứ giáo viên nào.<br>     +Nếu Giáo Vụ không truyền ma_giao_vien sẽ lấy tất cả.<br>     +Nếu là Giáo Viên sẽ tự động lấy phân công theo mã Người Dùng của mình.<br>     +Nếu có gửi ma_phan_cong sẽ lấy theo ma_phan_cong mà không xử lý ma_mon_hoc và ma_lop.<br>     +Chỉ truyền ma_mon_hoc hoặc ma_lop sẽ lấy để tìm kiếm (có thể có 1,2 hoặc không có yếu tố nào).<br>     +Nếu không có tình trạng sẽ tự động lấy tình trạng 0,1 nếu có sẽ tìm theo tinh_trang được truyền.<br>     +Tự động sắp xếp kết quả theo tình trạng.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancong"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\",\n    \"ma_giao_vien\":\"10\"\n}",
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
            "field": "ma_mon_hoc",
            "description": "<p>Mã môn học.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lop",
            "description": "<p>Mã lớp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Mã tình trạng.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_phan_cong\": 420,\n            \"ma_lop\": \"BKC12K9\",\n            \"ma_mon_hoc\": \"BKA_HAT_CTMT\",\n            \"ma_nguoi_dung\": 10,\n            \"ma_tinh_trang\": 0,\n            \"ten_tinh_trang\": \"Đang dạy\"\n        },\n        {\n            \"ma_phan_cong\": 586,\n            \"ma_lop\": \"BKG02K10N4\",\n            \"ma_mon_hoc\": \"BKA_HAT_THCB\",\n            \"ma_nguoi_dung\": 10,\n            \"ma_tinh_trang\": 0,\n            \"ten_tinh_trang\": \"Đang dạy\"\n        },\n        {\n            \"ma_phan_cong\": 587,\n            \"ma_lop\": \"BKG02K10N4\",\n            \"ma_mon_hoc\": \"BKA_HAT_THVP\",\n            \"ma_nguoi_dung\": 10,\n            \"ma_tinh_trang\": 0,\n            \"ten_tinh_trang\": \"Đang dạy\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\",\n        \"tinh_trang\": \"Tình trạng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phan_cong.php",
    "groupTitle": "Phân_Công"
  },
  {
    "type": "POST",
    "url": "phancong/kiemtra",
    "title": "1.3. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Phân_Công",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancong/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\",\n    \"ma_giao_vien\":\"100\",\n    \"tinh_trang\": \"5\",\n    \"ma_mon_hoc\":\"csdcsd\",\n    \"ma_lop\":\"Sdvsdvd\"\n}",
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
            "field": "ma_mon_hoc",
            "description": "<p>Mã môn học.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lop",
            "description": "<p>Mã lớp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Mã tình trạng. .</p>"
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
            "description": "<p>Kết quả.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_lop\": \"Lớp không tồn tại\",\n        \"ma_mon_hoc\": \"Môn học không tồn tại\",\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\",\n        \"tinh_trang\": \"Tình trạng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phan_cong.php",
    "groupTitle": "Phân_Công"
  },
  {
    "type": "POST",
    "url": "phancongchitiet/dexuat",
    "title": "1.2. Hiển thị Đề Xuất Phù Hợp",
    "version": "0.1.0",
    "name": "Hiển_thị_Đề_Xuất_Phù_Hợp",
    "group": "Phân_Công_Chi_Tiết",
    "description": "<p>Dùng để Hiển thị Đề Xuất Phù Hợp<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> -->  </div><br>     +Đây là chức năng đề xuất ra các lịch Phân công chi tiết phù hợp.<br>     +Cần có mã phân công để xử lý.<br>     +Nếu mã phân công có ma_nguoi_dung Null hoặc tinh_trang khác 1 sẽ từ chối tìm đề xuất.<br>     +Sẽ tự động tìm phòng học học được môn đó,Tự lấy số sinh viên để học được theo lớp.<br>     +Sẽ tự động bỏ qua các tòa tầng phong có tình trạng Đóng.<br>     +Truyền vào số giờ thể hiện học mấy giờ (4 hoặc 2) nếu khác 4 tự quy ước = 2.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancongchitiet/dexuat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\",\n    \"ma_phan_cong\" : \"425\",\n    \"so_gio\":\"2\"\n}",
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
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_gio",
            "description": "<p>Số giờ.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_phong\": 3,\n            \"thu\": 3,\n            \"ma_ca\": 4,\n            \"gio_bat_dau\": \"08:00:00\",\n            \"gio_ket_thuc\": \"12:00:00\",\n            \"ten_phong\": \"Lab 202\",\n            \"so_cho_ngoi\": 40,\n            \"ma_tang\": 4,\n            \"ten_tang\": \"Tầng 4\",\n            \"ma_toa\": 1,\n            \"ten_toa\": \"Tòa 1\"\n        },\n        {\n            \"ma_phong\": 3,\n            \"thu\": 7,\n            \"ma_ca\": 4,\n            \"gio_bat_dau\": \"08:00:00\",\n            \"gio_ket_thuc\": \"12:00:00\",\n            \"ten_phong\": \"Lab 202\",\n            \"so_cho_ngoi\": 40,\n            \"ma_tang\": 4,\n            \"ten_tang\": \"Tầng 4\",\n            \"ma_toa\": 1,\n            \"ten_toa\": \"Tòa 1\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": \"Không có lịch trống phù hợp cho lựa chọn của bạn !\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phan_cong_chi_tiet.php",
    "groupTitle": "Phân_Công_Chi_Tiết"
  },
  {
    "type": "POST",
    "url": "phancongchitiet",
    "title": "1.1. Hiển thị Phân Công Chi Tiết",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Phân_Công_Chi_Tiết",
    "group": "Phân_Công_Chi_Tiết",
    "description": "<p>Dùng để hiện thị thông tin Phân Công<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Chỉ giáo vụ mới được phép lấy mã phân công của bất cứ giáo viên nào.<br>     +Nếu Giáo Vụ không truyền ma_giao_vien sẽ lấy tất cả.<br>     +Nếu là Giáo Viên sẽ tự động lấy phân công theo mã Người Dùng của mình.<br>     +Nếu có gửi ma_phan_cong sẽ lấy theo ma_phan_cong mà không xử lý ma_mon_hoc và ma_lop.<br>     +Chỉ truyền ma_mon_hoc hoặc ma_lop sẽ lấy để tìm kiếm (có thể có 1,2 hoặc không có yếu tố nào).<br>     +Nếu không có tình trạng sẽ tự động lấy tình trạng 0,1 nếu có sẽ tìm theo tinh_trang được truyền.<br>     +Tự động sắp xếp kết quả theo tình trạng.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancongchitiet"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\",\n    \"ma_giao_vien\":\"10\"\n}",
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
            "field": "ma_mon_hoc",
            "description": "<p>Mã môn học.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lop",
            "description": "<p>Mã lớp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Mã tình trạng.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_phan_cong\": 420,\n            \"ma_lop\": \"BKC12K9\",\n            \"ma_mon_hoc\": \"BKA_HAT_CTMT\",\n            \"ma_nguoi_dung\": 10,\n            \"ma_tinh_trang\": 0,\n            \"ten_tinh_trang\": \"Đang dạy\"\n        },\n        {\n            \"ma_phan_cong\": 586,\n            \"ma_lop\": \"BKG02K10N4\",\n            \"ma_mon_hoc\": \"BKA_HAT_THCB\",\n            \"ma_nguoi_dung\": 10,\n            \"ma_tinh_trang\": 0,\n            \"ten_tinh_trang\": \"Đang dạy\"\n        },\n        {\n            \"ma_phan_cong\": 587,\n            \"ma_lop\": \"BKG02K10N4\",\n            \"ma_mon_hoc\": \"BKA_HAT_THVP\",\n            \"ma_nguoi_dung\": 10,\n            \"ma_tinh_trang\": 0,\n            \"ten_tinh_trang\": \"Đang dạy\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_giao_vien\": \"Giáo viên không tồn tại\",\n        \"tinh_trang\": \"Tình trạng không hợp lệ\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phan_cong_chi_tiet.php",
    "groupTitle": "Phân_Công_Chi_Tiết"
  },
  {
    "type": "POST",
    "url": "phancongchitiet/kiemtra",
    "title": "1.4. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Phân_Công_Chi_Tiết",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancongchitiet/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ma_phan_cong\" : \"1000\",\n    \"thu\" : 10,\n    \"ma_ca\" : 10,\n    \"ma_phong\" : 10\n}",
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
            "field": "ma_mon_hoc",
            "description": "<p>Mã môn học.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_lop",
            "description": "<p>Mã lớp.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tinh_trang",
            "description": "<p>Mã tình trạng. .</p>"
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
            "description": "<p>Kết quả.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_phan_cong\": \"Phân công không tồn tại\",\n        \"thu\": \"Thứ không hợp lệ\",\n        \"ma_ca\": \"Ca học không tồn tại\",\n        \"ma_phong\": \"Phòng học không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phan_cong_chi_tiet.php",
    "groupTitle": "Phân_Công_Chi_Tiết"
  },
  {
    "type": "POST",
    "url": "phancongchitiet/tao",
    "title": "1.3. Thêm Phân Công Chi Tiết",
    "version": "0.1.0",
    "name": "Thêm_Phân_Công_Chi_Tiết",
    "group": "Phân_Công_Chi_Tiết",
    "description": "<p>Dùng để Thêm Phân Công Chi Tiết<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> -->  </div><br>     +Đây là chức năng thêm phân công chi tiết.<br>     +Phân công chi tiết được thêm phải tồn tại trong đề xuất bên trên.<br>     +Phân công chi tiết truyển vào phải đủ yếu tố nếu không sẽ không được thêm.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancongchitiet/tao"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"keyapi\",\n    \"ma_phan_cong\" : \"425\",\n    \"so_gio\":\"2\",\n    \"phan_cong_chi_tiet\" : [\n        {\n            \"ma_phong\" : 3,\n            \"thu\" : 2,\n            \"ma_ca\" : 5\n        },\n        {\n            \"ma_phong\" : 3,\n            \"thu\" : 3,\n            \"ma_ca\" : 6\n        }\n    ]\n}",
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
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_gio",
            "description": "<p>Số giờ.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phan_cong_chi_tiet",
            "description": "<p>Hãy truyền dạng mảng kể cả với một phần tử.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tạo thành công\",\n    \"data\": [\n        {\n            \"ma_phong\": 3,\n            \"thu\": 2,\n            \"ma_ca\": 5,\n            \"ma_phan_cong\": \"425\"\n        },\n        {\n            \"ma_phong\": 3,\n            \"thu\": 3,\n            \"ma_ca\": 6,\n            \"ma_phan_cong\": \"425\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"phan_cong_chi_tiet\": \"Bạn hãy chọn phân công theo dữ liệu được đề xuất ! \"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phan_cong_chi_tiet.php",
    "groupTitle": "Phân_Công_Chi_Tiết"
  },
  {
    "type": "POST",
    "url": "phancongchitiet/xoa",
    "title": "1.3. Xóa Phân Công Chi Tiết",
    "version": "0.1.0",
    "name": "Xóa_Phân_Công_Chi_Tiết",
    "group": "Phân_Công_Chi_Tiết",
    "description": "<p>Dùng để Xóa Phân Công Chi Tiết<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> -->      <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> -->  </div><br>     +Đây là chức năng xóa phân công chi tiết.<br>     +Khi xóa bắt buộc cần có ma_phan_cong.<br>     +Các yếu tố ma_ca,thu,ma_phong có thể truyền vào hoặc không.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phancongchitiet/xoa"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" :\"1\",\n    \"ma_phan_cong\" : \"425\",\n    \"thu\" : 2,\n    \"ma_ca\" : 3,\n    \"ma_phong\" : 2\n}",
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
            "field": "ma_phan_cong",
            "description": "<p>Mã phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thu",
            "description": "<p>Thứ của phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_ca",
            "description": "<p>Ca phân công.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phong",
            "description": "<p>Phong phân công.</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Xóa thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": \"Xóa thất bại hay kiểm tra lại dữ liệu\",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phan_cong_chi_tiet.php",
    "groupTitle": "Phân_Công_Chi_Tiết"
  },
  {
    "type": "POST",
    "url": "phong/kiemtra",
    "title": "1.4. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Phòng",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố<br>         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên<br>         +Nếu trả về hợp lệ là tất cả đều hợp lệ<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phong/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ten_phong\": \"Ta\",\n    \"so_cho_ngoi\": 150,\n    \"ma_tang\": 52,\n    \"ghi_chu\": \"S####\"\n}",
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
            "field": "ma_phong",
            "description": "<p>Mã của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_phong",
            "description": "<p>Tên của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_cho_ngoi",
            "description": "<p>Số chỗ ngồi của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_tang",
            "description": "<p>Mã Tầng của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_tinh_trang",
            "description": "<p>Mã tình trạng của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ghi_chu",
            "description": "<p>Ghi chú. .</p>"
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
            "description": "<p>Kết quả.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_tang\": \"Tầng không tồn tại\",\n        \"ten_phong\": \"Tên phòng không hợp lệ (4-20 kí tự và không có kí tự đặc biệt)\",\n        \"so_cho_ngoi\": \"Số chỗ ngồi phải từ 0 đến 99\",\n        \"ghi_chu\": \"ghi chu không hợp lệ (Gồm tiếng việt có thể có dấu hoặc không và từ 0-500 kí tự)\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phong.php",
    "groupTitle": "Phòng"
  },
  {
    "type": "POST",
    "url": "phong/taohoaccapnhat",
    "title": "1.2. Tạo hoặc cập nhật thông tin Phòng",
    "version": "0.1.0",
    "name": "Tạo_hoặc_cập_nhật_thông_tin_Phòng",
    "group": "Phòng",
    "description": "<p>Dùng để tạo hoặc cập nhật thông tin Phòng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  --></div><br> +Nếu có mã phòng thì các thông tin tiếp theo truyền vào sẽ được cập nhật cho mã phòng đó.<br> +Nếu Ghi chú và tình trạng có thể không truyền sẽ tự sử dùng tình trang  = 1 và ghi chú =  NULL.<br> +Khi cập nhật thông tin chỉ cần truyền vào thông tin cần cập nhật.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phong/taohoaccapnhat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ten_phong\": \"Tao phong\",\n    \"so_cho_ngoi\": 50,\n    \"ma_tang\": 1\n}",
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
            "field": "ma_phong",
            "description": "<p>Mã của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_phong",
            "description": "<p>Tên của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "so_cho_ngoi",
            "description": "<p>Số chỗ ngồi của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_tang",
            "description": "<p>Mã Tầng của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_tinh_trang",
            "description": "<p>Mã tình trạng của Phòng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ghi_chu",
            "description": "<p>Ghi chú.</p>"
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
            "description": "<p>Dữ liệu Phòng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tạo thành công\",\n    \"data\": {\n        \"ma_phong\": 6,\n        \"ten_phong\": \"Tao phong\",\n        \"so_cho_ngoi\": 50,\n        \"ma_tang\": 1,\n        \"ghi_chu\": null,\n        \"tinh_trang\": {\n            \"ma_tinh_trang\": 1,\n            \"ten_tinh_trang\": \"Hoạt Động\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_tang\": \"Tầng không tồn tại\",\n        \"ten_phong\": \"Tên phòng không hợp lệ (4-20 kí tự và không có kí tự đặc biệt)\",\n        \"so_cho_ngoi\": \"Số chỗ ngồi phải từ 0 đến 99\",\n        \"ghi_chu\": \"ghi chu không hợp lệ (Gồm tiếng việt có thể có dấu hoặc không và từ 0-500 kí tự)\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phong.php",
    "groupTitle": "Phòng"
  },
  {
    "type": "POST",
    "url": "phong",
    "title": "1.1. Hiển thị tất cả Phòng",
    "version": "0.1.0",
    "name": "Tất_cả_Phòng_của_một_Tầng",
    "group": "Phòng",
    "description": "<p>Dùng để trả về Phòng của một tầng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> </div><br> +Yêu cầu truyền vào mã tầng hoặc mã phòng<br> +Nếu có cả mã tầng và mã phòng thì mã tầng sẽ được ưu tiên và không lấy dữ liệu mã phòng<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phong"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_tang\" : 1\n}",
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
            "field": "ma_tang",
            "description": "<p>Mã của Tầng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_phong",
            "description": "<p>Mã của Phòng.</p>"
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
            "description": "<p>Dữ liệu Phòng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_phong\": 4,\n            \"ten_phong\": \"Lab 203\",\n            \"so_cho_ngoi\": 50,\n            \"ma_tang\": 1,\n            \"ghi_chu\": \"\",\n            \"tinh_trang\": {\n                \"ma_tinh_trang\": 1,\n                \"ten_tinh_trang\": \"Hoạt Động\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_tang\": \"Tầng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phong.php",
    "groupTitle": "Phòng"
  },
  {
    "type": "POST",
    "url": "phong/xoa",
    "title": "1.3. Xóa Phòng",
    "version": "0.1.0",
    "name": "Xóa_Phòng",
    "group": "Phòng",
    "description": "<p>Dùng để Xóa Phòng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1> <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\"> <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button> <!-- <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button> --> <!-- <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button> --> </div><br> +Nếu phòng đó đang được phân công lịch dạy cố định còn hiệu lực thì sẽ không được phép Xóa.<br> +Nếu phòng đó đang có lịch dạy đột xuất trong tương lai cũng sẽ không được phép Xóa.<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/phong/xoa"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": 1,\n    \"ma_phong\": 2\n}",
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
            "field": "ma_phong",
            "description": "<p>Mã Phòng.</p>"
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
            "description": "<p>Dữ liệu Môn.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Xóa thành công\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_phong\": \"Phòng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Xóa phòng thất bại, Phòng yêu cầu xóa có thể đang được phân công sử dụng hoặc thiết bị chưa được chuyển đi \",\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/phong.php",
    "groupTitle": "Phòng"
  },
  {
    "type": "POST",
    "url": "tang/capnhat",
    "title": "1.2. Cập Nhật Thông Tin Của Một Tầng",
    "version": "0.1.0",
    "name": "Cập_Nhật_Tầng",
    "group": "Tang",
    "description": "<p>Dùng để cập nhật thông tin Tầng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Bắt buộc cần có mã tầng để cập nhật<br>     +Cập nhật gì có thể truyền nguyên yếu tố đó<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/tang/capnhat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"keyapi\",\n    \"ma_tang\" : \"1\",\n    \"ma_tinh_trang\":\"1\",\n    \"ten_tang\": \"demo doi\"\n}",
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
            "field": "ma_tang",
            "description": "<p>mã của tầng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_tinh_trang",
            "description": "<p>mã của tình trạng thay đổi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_tang",
            "description": "<p>Tên tầng thay đổi.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_toa",
            "description": "<p>mã của tòa thay đổi. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Cập nhật thành công\",\n    \"data\": {\n        \"ma_tang\": 1,\n        \"ten_tang\": \"demo doi\",\n        \"ma_tinh_trang\": 1,\n        \"ten_tinh_trang\": \"Hoạt Động\",\n        \"ma_toa\": 1,\n        \"ten_toa\": \"Tòa 1\",\n        \"dia_chi_toa\": \"A17 Tạ Quang Bửu\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_toa\": \"Tòa không tồn tại\",\n        \"ma_tang\": \"Tầng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/tang.php",
    "groupTitle": "Tang"
  },
  {
    "type": "POST",
    "url": "tang",
    "title": "1.1. Hiển thị tông tin các Tầng hoặc một Tầng",
    "version": "0.1.0",
    "name": "Hiện_thị_thông_tin_Tầng",
    "group": "Tang",
    "description": "<p>Dùng để hiện thị thông tin Tầng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần lấy thông tin tầng nào truyền thông tin mã tầng đó<br>     +Nếu lấy tất cả thì không truyền gì cả<br>     +Nếu lấy tất cả tầng của một tòa thì truyền vào mã tòa<br>     +Có cả mã tầng và mã tòa mã tòa sẽ được ưu tiên hơn<br>     +Nếu không có mã tình trạng tự động trả về những tầng hoạt động<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/tang"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"keyapi\",\n    \"ma_tang\" : \"5\"\n}",
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
            "field": "ma_toa",
            "description": "<p>mã của tòa.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_tang",
            "description": "<p>mã của tầng .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Lấy dữ liệu thành công\",\n    \"data\": [\n        {\n            \"ma_tang\": 5,\n            \"ten_tang\": \"Tầng 1\",\n            \"ma_tinh_trang\": 1,\n            \"ten_tinh_trang\": \"Hoạt Động\",\n            \"ma_toa\": 2,\n            \"ten_toa\": \"Tòa 2\",\n            \"dia_chi_toa\": \"D5 Trần Đại Nghĩa\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_toa\": \"Tòa không tồn tại\",\n        \"ma_tang\": \"Tầng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/tang.php",
    "groupTitle": "Tang"
  },
  {
    "type": "POST",
    "url": "tang/kiemtra",
    "title": "1.4. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Kiểm_Tra",
    "group": "Tang",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>         +Có thể truyền 1 hay nhiều yếu tố         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên         +Nếu trả về hợp lệ là tất cả đều hợp lệ",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/tang/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"keyapi\",\n    \"ten_tang\" : \"đssd\",\n    \"ma_toa\" : \"10\",\n    \"ma_tinh_trang\" :\"3\"\n}",
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
            "field": "ma_tinh_trang",
            "description": "<p>mã của tình trạng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_tang",
            "description": "<p>Tên tầng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_toa",
            "description": "<p>mã của tòa. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
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
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_toa\": \"Tòa không tồn tại\",\n        \"ten_tang\": \"Tên tầng không hợp lệ\",\n        \"ma_tinh_trang\": \"Tình trạng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/tang.php",
    "groupTitle": "Tang"
  },
  {
    "type": "POST",
    "url": "tang/tao",
    "title": "1.3. Tạo ra một Tầng mới",
    "version": "0.1.0",
    "name": "Tạo_Tầng",
    "group": "Tang",
    "description": "<p>Dùng để tạo ra một Tầng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Cần gửi đủ tên tầng,mã tòa.<br>     +mã tình trạng Có thể không gửi nếu nó Hoạt Động. <br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/tang/tao"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\" : \"keyapi\",\n    \"ten_tang\" : \"Tao Tang Moi\",\n    \"ma_toa\" : \"1\"\n}",
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
            "field": "ma_tinh_trang",
            "description": "<p>mã của tình trạng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ten_tang",
            "description": "<p>Tên tầng.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ma_toa",
            "description": "<p>mã của tòa. .</p>"
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
            "description": "<p>Dữ liệu của Tầng.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Thành Công:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Tạo thành công\",\n    \"data\": {\n        \"ma_tang\": 9,\n        \"ten_tang\": \"Tao Tang Moi\",\n        \"ma_tinh_trang\": 1,\n        \"ten_tinh_trang\": \"Hoạt Động\",\n        \"ma_toa\": \"1\",\n        \"ten_toa\": \"Tòa 1\",\n        \"dia_chi_toa\": \"A17 Tạ Quang Bửu\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Không Thành Công:",
          "content": "    HTTP/1.1 200 OK\n+ Có nhiều dạng trả về không thành công như key sai,lỗi truy vấn sql\n+ Tất cả các lỗi đều có \"message\" kèm theo như ví dụ bên dưới\n{\n    \"success\": false,\n    \"message\": {\n        \"ma_toa\": \"Tòa không tồn tại\",\n        \"ten_tang\": \"Tên tầng không hợp lệ\",\n        \"ma_tinh_trang\": \"Tình trạng không tồn tại\"\n    },\n    \"data\": []\n}\n{\n    \"success\": false,\n    \"message\": \"Bạn không có quyền truy cập\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "duong_doc/tang.php",
    "groupTitle": "Tang"
  },
  {
    "type": "POST",
    "url": "toa/kiemtra",
    "title": "1.3. Kiểm tra thông tin hợp lệ",
    "version": "0.1.0",
    "name": "Check",
    "group": "Toa",
    "description": "<p>Dùng để Kiểm tra thông tin hợp lệ<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>         +Có thể truyền 1 hay nhiều yếu tố         +Sẽ chỉ trả về lỗi của yếu tố đầu tiên         +Nếu trả về hợp lệ là tất cả đều hợp lệ",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/toa/kiemtra"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"1\",\n    \"ma_toa\":\"10\",\n    \"ten_toa\" : \"Ten\",\n    \"dia_chi\" : \"dia \",\n    \"ma_tinh_trang\": 0\n}",
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
    "description": "<p>Dùng để hiện thị thông tin tòa<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>  </div><br>     +Cần lấy thông tin tòa nào truyền thông tin mã tòa đó<br>     +Nếu lấy tất cả thì không truyền gì cả<br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/toa/hienthicactoa"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"1\",\n    \"ma_toa\":\"2\"\n}",
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
    "description": "<p>Dùng để cập nhật thông tin cho các tòa<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>",
    "sampleRequest": [
      {
        "url": "http://localhost:8080/project-2/public/api/toa/capnhat"
      }
    ],
    "examples": [
      {
        "title": "Truy Vấn Mẫu:",
        "content": "{\n    \"key\": \"apikey\",\n    \"ma_toa\":\"2\",\n    \"ten_toa\" : \"Ten toa moi\",\n    \"dia_chi\" : \"dia chi moi\",\n    \"ma_tinh_trang\": 1\n}",
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
