<?php

namespace App\Http\Controllers\Api;

use App;
use App\Http\Controllers\Api\GiaoVienController;
use App\Http\Controllers\Controller;
use App\Http\Requests\NguoiDungRequest;
use App\Http\Resources\NguoiDungResource;
use App\Models\NguoiDung;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use RegexRule;
use ResponseMau;

class NguoiDungController extends Controller {
    use Traits\ReturnError;
    use Traits\CallApi;
    public function taoNguoiDung(NguoiDungRequest $rq) {
        try {
            $user = new NguoiDung();
            $user = NguoiDung::create([
                'tai_khoan' => strtolower($rq->get('tai_khoan')),
                'email'     => strtolower($rq->get('email')),
                'sdt'       => $rq->has('sdt') ? $rq->get('sdt') : "0" . rand(000000000, 999999999),
                'mat_khau'  => Hash::make(strtolower($rq->get('mat_khau'))),
                'key'       => Str::random(256),
                'cap_do'    => $rq->has('cap_do') ? $rq->get('cap_do') : 3,
            ]);
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_USER_CREATE,
                'data'   => new NguoiDungResource($user),
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function dangNhap($tai_khoan, $mat_khau) {
        try {
            $user = NguoiDung::where('tai_khoan', $tai_khoan)
                ->orWhere('email', $tai_khoan)
                ->first();
            if (!is_null($user) && Hash::check($mat_khau, $user->mat_khau) == true) {
                $user->key = Str::random(256);
                $user->save();
                return ResponseMau::Store([
                    'data' => (new NguoiDungResource($user))->fullInfo(),
                ]);
            } else {
                return $this->endCatchValue(ResponseMau::ERROR_USER_LOGIN);
            }
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function dangXuat(NguoiDungRequest $rq) {
        try {
            $user      = NguoiDung::where('ma_nguoi_dung', $rq->get('ma_nguoi_dung'))->first();
            $user->key = Str::random(256);
            $user->save();
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_USER_LOGOUT,
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function doiMatKhau(NguoiDungRequest $rq) {
        try {
            $user = NguoiDung::where('ma_nguoi_dung', $rq->get('ma_nguoi_dung'))->first();
            if ($rq->get('mat_khau') == $rq->get('mat_khau_moi')) {
                return $this->endCatchValue(ResponseMau::ERROR_USER_PASS_DUPLICATE);
            }
            if (Hash::check($rq->get('mat_khau'), $user->mat_khau) == true) {
                $user->mat_khau = Hash::make($rq->get('mat_khau_moi'));
                $user->key      = Str::random(256);
                $user->save();
                return ResponseMau::Store([
                    'data'   => (new NguoiDungResource($user))->key(),
                    'string' => ResponseMau::SUCCESS_USER_CHANGEPASSWORD,
                ]);
            } else {
                return $this->endCatchValue(ResponseMau::ERROR_USER_PASS_OLD);
            }
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_USER_CHANGEPASSWORD);
        }
    }
    public function khoiPhucMatKhau(Request $rq) {
        return $this->endCatchValue(ResponseMau::ERROR_USER_RESETPASSWORD);
    }
    public function capNhatThongTin(NguoiDungRequest $rq, $id) {
        try {
            if ($id != $rq->get('ma_nguoi_dung')) {
                if ($rq->get('cap_do') == 1) {
                    $user = NguoiDung::find($id);
                    if ($user->cap_do == 1) {
                        return $this->endCatchValue(ResponseMau::ERROR_USER_UPDATE_INFO_CAP_DO);
                    }
                    if ($rq->has('ma_cap_do')) {
                        $user->ma_cap_do = $rq->get('ma_cap_do');
                    }
                }
            } else {
                $user = NguoiDung::find($rq->get('ma_nguoi_dung'));
            }
            if ($rq->has('tai_khoan')) {
                $user->tai_khoan = $rq->get('tai_khoan');
            }
            if ($rq->has('email')) {
                $user->email = $rq->get('email');
            }
            if ($rq->has('sdt')) {
                $user->sdt = $rq->get('sdt');
            }
            if ($rq->has('mat_khau')) {
                $user->mat_khau = Hash::make($rq->get('mat_khau'));
            }
            $user->key = Str::random(256);
            $user->save();
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_USER_UPDATE_INFO,
                'data'   => new NguoiDungResource($user),
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
    public function danhSachGiaoVienKiThuat() {
        try {
            $user = NguoiDung::where('ma_cap_do', '!=', 1)->get();
            return ResponseMau::Store([
                'string' => ResponseMau::SUCCESS_GET,
                'data'   => NguoiDungResource::Collection($user),
            ]);
        } catch (Exception $e) {
            return $this->endCatchValue(ResponseMau::ERROR_GET);
        }
    }
    public function kiemTra(NguoiDungRequest $rq) {
        return ResponseMau::Store([]);
    }
    public function kiemTraKey(Request $rq) {
        $data = (object) ['cap_do' => $rq->cap_do];
        return ResponseMau::Store([
            'data' => $data,
        ]);
    }
    public function giaoVienClone() {
        try {
            $list_gv = (new GiaoVienController)->getAllInfo();
            $re      = "/^[a-z][a-z0-9_\.]{3,32}/";
            $create  = 0;
            $update  = 0;
            $data    = (object) ['create' => [], 'update' => []];
            foreach ($list_gv as $key => $value) {
                preg_match_all($re, $value['email'], $matches);
                if (count($matches[0]) == 1) {
                    $value['tai_khoan'] = $matches[0][0];
                } else {
                    continue;
                }
                $value['mat_khau'] = $value['password'];
                $value             = new Request($value);
                try {
                    $validatedData = $value->validate([
                        'ho_ten'    => RegexRule::REGEX_HO_TEN,
                        'email'     => RegexRule::REGEX_EMAIL_RULE_C,
                        'sdt'       => RegexRule::REGEX_SDT_RULE,
                        'tai_khoan' => RegexRule::REGEX_USER_NAME_RULE,
                        'mat_khau'  => RegexRule::REGEX_PASSWORD_RULE,
                        'ma_cap_do' => RegexRule::REGEX_MA_CAP_DO_C,
                    ]);
                    $validatedData['key']      = Str::random(256);
                    $validatedData['mat_khau'] = Hash::make($validatedData['mat_khau']);
                    $user                      = NguoiDung::create($validatedData);
                    $create++;
                    array_push($data->create, new NguoiDungResource($user));
                } catch (Exception $e) {
                    try {
                        $validatedData = $value->validate([
                            'ho_ten'    => RegexRule::REGEX_HO_TEN,
                            'email'     => RegexRule::REGEX_EMAIL_CHECK_IN,
                            'sdt'       => RegexRule::REGEX_SDT_CHECK_IN,
                            'mat_khau'  => RegexRule::REGEX_PASSWORD_RULE,
                            'ma_cap_do' => RegexRule::REGEX_MA_CAP_DO_C,
                        ]);
                        $changer = [];
                        $user    = NguoiDung::where('email', $value['email'])
                            ->where('sdt', $value['sdt'])->first();
                        if ($user->ho_ten != $validatedData['ho_ten']) {
                            $old          = $user->ho_ten;
                            $user->ho_ten = $validatedData['ho_ten'];
                            $changer      = array_merge($changer, [
                                'old.ho_ten' => $old,
                                'new.ho_ten' => $validatedData['ho_ten'],
                            ]);
                        }
                        if ($user->ma_cap_do != $validatedData['ma_cap_do']) {
                            $old             = $user->ma_cap_do;
                            $user->ma_cap_do = $validatedData['ma_cap_do'];
                            $changer         = array_merge($changer, [
                                'old.ma_cap_do' => $old,
                                'new.ma_cap_do' => $validatedData['ma_cap_do'],
                            ]);
                        }
                        if (Hash::check($validatedData['mat_khau'], $user->mat_khau) == false) {
                            $changer        = array_merge($changer, ['mat_khau' => true]);
                            $user->mat_khau = Hash::make($validatedData['mat_khau']);
                        }
                        $user->key = Str::random(256);
                        $user->save();
                        if (count($changer) > 0) {
                            $update++;
                            $arr = (object) [
                                'email'   => $value['email'],
                                'sdt'     => $value['sdt'],
                                'changer' => $changer];
                            array_push($data->update, $arr);
                        }
                    } catch (Exception $e) {
                    }
                }
            }
            return ResponseMau::Store([
                'string' => "Đã tạo mới " . $create . " bản ghi và Cập nhật " . $update . " bản ghi",
                'data'   => $data,
            ]);
        } catch (Exception $e) {
            return $this->endCatch();
        }
    }
}
//