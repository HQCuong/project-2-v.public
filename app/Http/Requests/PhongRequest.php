<?php

namespace App\Http\Requests;

use App\Rules\RegexRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use ResponseMau;

class PhongRequest extends FormRequest {
	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize() {
		return true;
	}
	public function rules() {
		return [
			'ma_phong' => RegexRule::regex_phong_ma_phong,
			'ma_tang' => RegexRule::regex_tang_ma_tang,
			'ma_tinh_trang' => RegexRule::regex_phong_tinh_trang,
			'ten_phong' => RegexRule::regex_phong_name,
			'so_cho_ngoi' => RegexRule::regex_phong_so_cho_ngoi,
		];
	}
	public function messages() {
		return [
		];
	}
	public function attributes() {
		return [
		];
	}
	protected function failedValidation(Validator $validator) {
		$error = $validator->messages();
		$messages_return = ResponseMau::ERROR_NOT_DETERMINED;
		if ($error->has('ma_phong')) {
			$messages_return = ResponseMau::ERROR_PHONG_MA_PHONG;
		}
		if ($error->has('ma_tang')) {
			$messages_return = ResponseMau::ERROR_TANG_MA_TANG;
		}
		if ($error->has('ten_phong')) {
			$messages_return = ResponseMau::ERROR_PHONG_TEN_PHONG;
		}
		if ($error->has('ma_tinh_trang')) {
			$messages_return = ResponseMau::ERROR_PHONG_TINH_TRANG;
		}
		throw new HttpResponseException(
			ResponseMau::Store(['bool' => false, 'string' => $messages_return])
		);
	}
}
