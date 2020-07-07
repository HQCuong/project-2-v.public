define({ "api": [
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
        "url": "http://localhost/project-2/public/api/cauhinh/sua"
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
        "url": "http://localhost/project-2/public/api/cauhinh/case"
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
        "url": "http://localhost/project-2/public/api/cauhinh"
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
        "url": "http://localhost/project-2/public/api/cauhinh/kiemtra"
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
        "url": "http://localhost/project-2/public/api/cauhinh/them"
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
    "url": "loai/sua",
    "title": "1.2. Cập Nhật Thông Tin Của Một Loại",
    "version": "0.1.0",
    "name": "Cập_Nhật_Loại",
    "group": "Loai",
    "description": "<p>Dùng để cập nhật thông tin Loại<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Cần có mã loại<br>     +Chỉnh sửa thông tin nào truyền thông tin đó<br>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/loai/sua"
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
        "url": "http://localhost/project-2/public/api/loai"
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
        "url": "http://localhost/project-2/public/api/loai/kiemtra"
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
        "url": "http://localhost/project-2/public/api/loai/them"
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
    "url": "nguoidung/clone",
    "title": "2.1. Clone User Từ DTB VỀ Local",
    "version": "0.1.0",
    "name": "CLone",
    "group": "NguoiDung",
    "description": "<p>Sử dụng để lấy tài khoản cũng như cập nhật thông tin cho tài khoản<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Chỉ chạy một lần<br>     +Email thay đổi sẽ tạo user mới<br>     +Lấy thông tin của chính mình không cần truyền ma<br>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/nguoidung/clone"
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
        "url": "http://localhost/project-2/public/api/nguoidung/reset"
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
        "url": "http://localhost/project-2/public/api/nguoidung/kiemtra"
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
        "url": "http://localhost/project-2/public/api/nguoidung/kiemtrakey"
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
        "url": "http://localhost/project-2/public/api/nguoidung/danhsach"
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
        "url": "http://localhost/project-2/public/api/nguoidung/thongtin"
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
        "url": "http://localhost/project-2/public/api/nguoidung/capnhatthongtin/{id}"
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
        "url": "http://localhost/project-2/public/api/dangnhap"
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
        "url": "http://localhost/project-2/public/api/dangxuat"
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
        "url": "http://localhost/project-2/public/api/nguoidung/tao"
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
        "url": "http://localhost/project-2/public/api/nguoidung/doimatkhau"
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
    "url": "tang/capnhat",
    "title": "1.2. Cập Nhật Thông Tin Của Một Tầng",
    "version": "0.1.0",
    "name": "Cập_Nhật_Tầng",
    "group": "Tang",
    "description": "<p>Dùng để cập nhật thông tin Tầng<br></p> <h1 class=\"display-1\">-Lưu ý: </h1>  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">      <button type=\"button\" class=\"btn btn-danger\">Giáo Vụ</button>      <!--      <button type=\"button\" class=\"btn btn-warning\">Kĩ Thuật</button>      <button type=\"button\" class=\"btn btn-info\">Giáo Viên</button>      -->  </div><br>     +Bắt buộc cần có mã tầng để cập nhật<br>     +Cập nhật gì có thể truyền nguyên yếu tố đó<br>",
    "sampleRequest": [
      {
        "url": "http://localhost/project-2/public/api/tang/capnhat"
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
        "url": "http://localhost/project-2/public/api/tang"
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
        "url": "http://localhost/project-2/public/api/tang/kiemtra"
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
        "url": "http://localhost/project-2/public/api/tang/tao"
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
        "url": "http://localhost/project-2/public/api/toa/kiemtra"
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
        "url": "http://localhost/project-2/public/api/toa/hienthicactoa"
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
        "url": "http://localhost/project-2/public/api/toa/capnhat"
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
