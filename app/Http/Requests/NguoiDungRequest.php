<?php

namespace App\Http\Requests;

use App\Rules\RegexRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use ResponseMau;

class NguoiDungRequest extends FormRequest {
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize() {
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules() {
		return [
			'email' => RegexRule::regex_email_rule,
			'sdt' => RegexRule::regex_sdt_rule,
			'tai_khoan' => RegexRule::regex_user_name_rule,
			'mat_khau' => RegexRule::regex_password_rule,
			'mat_khau_moi' => RegexRule::regex_password_rule,
		];
	}
	public function messages() {
		return [
			// 'required' => ':attributes trùng hoặc chưa điền',
		];
	}
	public function attributes() {
		return [
			// 'email' => 'Email',
			// 'sdt' => 'Sđt',
		];
	}
	protected function failedValidation(Validator $validator) {
		$error = $validator->messages();
		$messages_return = ResponseMau::ERROR_NOT_DETERMINED;
		if ($error->has('sdt')) {
			$messages_return = ResponseMau::ERROR_USER_DUPLICATE_SDT;
		}
		if ($error->has('email')) {
			$messages_return = ResponseMau::ERROR_USER_DUPLICATE_EMAIL;
		}
		if ($error->has('tai_khoan')) {
			$messages_return = ResponseMau::ERROR_USER_NAME;
		}
		if ($error->has('mat_khau_moi')) {
			$messages_return = ResponseMau::ERROR_USER_PASSWORD_NEW;
		}
		if ($error->has(['email', 'sdt'])) {
			$messages_return = ResponseMau::ERROR_USER_DUPLICATE_INFO;
		}
		throw new HttpResponseException(
			ResponseMau::Store(['bool' => false, 'string' => $messages_return])
		);
	}
}
