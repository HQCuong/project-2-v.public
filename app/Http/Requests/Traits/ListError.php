<?php

namespace App\Http\Requests\Traits;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use RegexRule;
use ResponseMau;
trait ListError {
    public function authorize() {
        return true;
    }
    public function resultError($row) {
        $re = new RegexRule();
        foreach ($row as $key => $value) {
            $re->$key = $value[0];
        }
        return $re;
    }
    public function defaultMessages() {
        return [
            'exists'        => ':attribute không tồn tại',
            'regex'         => ':attribute không hợp lệ',
            'unique'        => ':attribute đã tồn tại',
            'ngay.regex'    => ':attribute không hợp lệ (ngày/tháng/năm)',
            'ghi_chu.regex' => ':attribute không hợp lệ (Gồm tiếng việt có thể có dấu hoặc không và từ 0-500 kí tự)',
        ];
    }
    public function messages() {
        return [
            'exists'        => ':attribute không tồn tại',
            'regex'         => ':attribute không hợp lệ',
            'unique'        => ':attribute đã tồn tại',
            'ngay.regex'    => ':attribute không hợp lệ (ngày/tháng/năm)',
            'ghi_chu.regex' => ':attribute không hợp lệ (Gồm tiếng việt có thể có dấu hoặc không và từ 0-500 kí tự)',
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