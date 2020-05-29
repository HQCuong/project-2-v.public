<?php

namespace App\Http\Custom;

use App;
use Illuminate\Http\Response;

class ResponseMau {
	private $success, $message, $data;
	///success return
	const SUCCESS_USER_CREATE = 'Tạo tài khoản thành công';
	const SUCCESS_USER_LOGOUT = 'Đăng xuất thành công';
	const SUCCESS_USER_CHANGEPASSWORD = 'Đổi mật khẩu thành công';
	const SUCCESS_USER_RESETPASSWORD = '';
	const SUCCESS_USER_UPDATE_INFO = 'Thay đổi thông tin thành công';
	///ERROR RETURN
	const ERROR_NOT_DETERMINED = 'Có lỗi từ hệ thống hãy thực hiện lại hoặc liên hệ kĩ thuật';
	const ERROR_USER_DUPLICATE_INFO = 'Email hoặc SĐT có thể đã bị trùng hoặc không hợp lệ';
	const ERROR_USER_INFO = 'Bị trùng hoặc không hợp lệ';
	const ERROR_USER_DUPLICATE_EMAIL = 'Email có thể đã bị trùng hoặc không hợp lệ';
	const ERROR_USER_DUPLICATE_SDT = 'SĐT có thể đã bị trùng hoặc không hợp lệ';
	const ERROR_USER_CREATE_PRIVATE_KEY = 'Bạn không có quyền tạo tài khoản';
	const ERROR_USER_CHANGEPASSWORD = 'Đổi mật khẩu thất bại';
	const ERROR_USER_RESETPASSWORD = 'Chức năng chưa phát triển';
	const ERROR_USER_UPDATE_INFO = 'Thay đổi thông tin không thành công';
	const ERROR_USER_UPDATE_INFO_CAP_DO = 'Bạn không được phép cập nhật mật khẩu cho Giáo Vụ khác';
	const ERROR_USER_LOGIN = 'Đăng nhập thất bại kiểm tra lại tài khoản hoặc mật khẩu';
	const ERROR_USER_NAME = 'Tên tài khoản bị trùng hoặc không hợp lệ (4-20 kí tự và không có kí tự đặc biệt)';
	const ERROR_USER_PASSWORD_ILLEGAL = 'Tên tài khoản bị trùng hoặc không hợp lệ (4-20 kí tự và không có kí tự đặc biệt)';
	const ERROR_KEY = 'Bạn không có quyền truy cập';
	const ERROR_TOA_TEN_TOA = 'Tên tòa không hợp lệ (từ 6-20 kí tự)';
	const ERROR_TOA_DIA_CHI = 'Địa chỉ không hợp lệ (từ 6-100 kí tự)';
	const ERROR_TOA_TRANG_THAI = 'Trạng thái không hợp lệ';
	const ERROR_TOA_UPDATE_INFO = 'Cập nhật thông tin thất bại có lỗi của hệ thống';
	public function __construct() {
		$this->success = true;
		$this->message = '';
		$this->data = [];
	}
	public static function None() {
		$res = new Response();
		$res->success = true;
		$res->message = '';
		$res->data = [];
		return $res;
	}
	public static function SusAndMess(bool $success, string $message) {
		$res = new Response();
		$res->success = $success;
		$res->message = $message;
		$res->data = [];
		return $res;
	}
	public static function Sus(bool $success) {
		$res = new Response();
		$res->success = $success;
		$res->message = '';
		$res->data = [];
		return $res;
	}
	public static function Mess(string $message) {
		$res = new Response();
		$res->success = true;
		$res->message = $message;
		$res->data = [];
		return $res;
	}
	public static function Every(bool $success, string $message, object $data) {
		$res = new Response();
		$res->success = $success;
		$res->message = $message;
		$res->data = $data;
		return $res;
	}
	public static function Object(Object $data) {
		$res = new Response();
		$res->success = true;
		$res->message = '';
		$res->data = $data;
		return $res;
	}
	public static function Store(array $data) {
		$res = new Response();
		if (isset($data['bool']) && $data['bool'] == false) {
			$res->success = $data['bool'];
			//$methob = Response::HTTP_UNAUTHORIZED;
		} else {
			$res->success = true;
			//$methob = Response::HTTP_OK;
		}
		if (isset($data['string']) && !is_null($data['string'])) {
			$res->message = $data['string'];
		} else {
			$res->message = '';
		}
		if (isset($data['data']) && !is_null($data['data'])) {
			$res->data = $data['data'];
		} else {
			$res->data = [];
		}
		if (isset($data['code']) && !is_null($data['code'])) {
			$methob = $data['code'];
		} else {
			if ($res->success) {
				$methob = Response::HTTP_OK;
			} else {
				$methob = Response::HTTP_UNAUTHORIZED;
			}

		}
		return response()->json($res, $methob);
	}
}
