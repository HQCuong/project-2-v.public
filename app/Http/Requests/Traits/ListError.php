<?php

namespace App\Http\Requests\Traits;
use RegexRule;
trait ListError {
    public function resultError($row) {
        $re = new RegexRule();
        foreach ($row as $key => $value) {
            $re->$key = $value[0];
        }
        return $re;
    }
    public function messages() {
        return [
            'exists' => ':attribute không tồn tại',
        ];
    }
}