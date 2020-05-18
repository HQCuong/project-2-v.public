<?php

namespace App\Http\Controllers\Api;

use App;
use Illuminate\Http\Response;

class Mau {
	private $success, $message, $data;
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
		} else {
			$res->success = true;
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
		return $res;
	}
}
