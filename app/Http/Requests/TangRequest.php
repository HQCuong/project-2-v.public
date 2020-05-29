<?php

namespace App\Http\Requests;
use ResponseMau;
use Illuminate\Foundation\Http\FormRequest;
use App\Rules\RegexRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
class TangRequest extends FormRequest{
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
		throw new HttpResponseException(
			ResponseMau::Store(['bool' => false, 'string' => 'Loi'])
		);
	}
	public function getAfter()
	{
		return $this->validator->getData();
	}
}
