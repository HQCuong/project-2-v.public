<?php

namespace App\Http\Requests;
use ResponseMau;
use Illuminate\Foundation\Http\FormRequest;
use App\Rules\RegexRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class TangRequest extends FormRequest{
	public function authorize() {
		return true;
	}
	public function rules() {
		return [
			'ma_toa' =>RegexRule::regex_tang_ma_toa,
			'ma_tang' =>RegexRule::regex_tang_ma_tang,
			'ten_tang' =>RegexRule::regex_tang_name,
			'ma_tinh_trang' =>RegexRule::regex_tang_tinh_trang,
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
	public function withValidator($validator) {
		if (!$validator->fails()) {
			$validator->after(function ($validator) {
				$arr=$validator->getData();
				if(isset($arr['ma_toa']) && isset($arr['ma_tang']) && !isset($arr['ten_tang'])){
					$this->query->remove('ma_tang');
					$this->query->add(['ma_tang' =>null]);
				}
			});
		}
	}
	protected function failedValidation(Validator $validator) {
		$error = $validator->messages();
		$messages_return = ResponseMau::ERROR_NOT_DETERMINED;
		if ($error->has('ma_toa')) {
			$messages_return = ResponseMau::ERROR_TANG_MA_TOA;
		}
		if ($error->has('ma_tang')) {
			$messages_return = ResponseMau::ERROR_TANG_MA_TANG;
		}
		if ($error->has('ten_tang')) {
			$messages_return = ResponseMau::ERROR_TANG_TEN_TANG;
		}
		if ($error->has('ma_tinh_trang')) {
			$messages_return = ResponseMau::ERROR_TANG_TINH_TRANG;
		}
		throw new HttpResponseException(
			ResponseMau::Store(['bool' => false, 'string' => $messages_return])
		);
	}
	public function getAfter()
	{
		return $this->validator->getData();
	}
}
