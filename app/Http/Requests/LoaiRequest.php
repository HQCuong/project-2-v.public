<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use RegexRule;
use ResponseMau;

class LoaiRequest extends FormRequest {
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
			'ma_loai' => RegexRule::regex_loai_ma_loai,
			'ten_loai' => RegexRule::regex_loai_ten_loai,
			'mo_ta' => RegexRule::regex_loai_mo_ta,
		];
	}
	public function messages() {
		return [
			// 'exists' => ':attributes không tồn tại',
			//          'unique' => ':attributes đã tồn tại vui lòng nhập kí tự khác',
		];
	}
	public function attributes() {
		return [
			// 'ma_loai' => 'Mã Loại',
			// 'ten_loai' => 'Tên Loại',
			// 'mo_ta' => 'Mô Tả',
		];
	}
	protected function failedValidation(Validator $validator) {
		$error = $validator->messages();
		$messages_return = ResponseMau::ERROR_NOT_DETERMINED;
		if ($error->has('ma_loai')) {
			$messages_return = ResponseMau::ERROR_LOAI_MA_LOAI;
		}
		if ($error->has('ten_loai')) {
			$messages_return = ResponseMau::ERROR_LOAI_TEN_LOAI;
		}
		if ($error->has('mo_ta')) {
			$messages_return = ResponseMau::ERROR_LOAI_MO_TA;
		}
		throw new HttpResponseException(
			ResponseMau::Store(['bool' => false, 'string' => $messages_return])
		);
	}
}
