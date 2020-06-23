<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class GiaoVienController extends Controller {
    use Traits\CallApi;
    public function testCall() {
        return $this->postApi('danhsachcanbo');
    }
}
