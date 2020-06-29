<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use RegexRule;
use ResponseMau;

class MonHocRequest extends FormRequest {
    use Traits\ListError;
    public function rules() {
        return [
            'ma_mon_hoc' => RegexRule::REGEX_MON_HOC_MA_MON_HOC,
        ];
    }
    public function attributes() {
        return [
            'ma_mon_hoc' => 'Môn học',
        ];
    }
    protected function failedValidation(Validator $validator) {
        throw new HttpResponseException(
            ResponseMau::Store([
                'bool'   => false,
                'string' => $this->resultError($validator->messages()->toArray()),
            ])
        );
    }
}
