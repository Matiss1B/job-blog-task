<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\API\V1\Token;
use App\Models\API\V1\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthenticationController extends Controller
{
    public function register(Request $request) {
        //Validate all inputs
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users|max:320|min:5|email',
            'name' => 'required|min:2|max:30|string',
            'password' => 'required|min:8|max:100|string',
            'confirm_password' => 'required|min:8|max:100|string|same:password',
        ]);

        //Failed validations
        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }
        $userData = [
            'email'=> request("email"),
            'name'=> request("name"),
            'password'=> request("password")
        ];

        //Register user
        $createUser = User::query()->create($userData);

        //If registration fails
        if(!$createUser){
            return response()->json([
                'status' => 300,
                'message' => "User registration failed"
            ], 300);
        }

        //If successful
        return  response()->json([
            'status'=>201,
            'message' => "Registration successful!"
        ], 201);
    }
    public function login(Request $request) {
        //Validate all inputs
        $validator = Validator::make($request->all(), [
            'email' => 'required|max:320|min:5|email|exists:users',
            'password' =>
                [
                    'required',
                    'min:8',
                    'max:100',
                    'string',
                    function ($attribute, $value, $fail) use ($request) {
                        $user = User::where('email', $request->email)->first();

                        if (!$user || !Hash::check($value, $user->password)) {
                            $fail('Invalid password!');
                        }
                    },
                ],
        ]);

        //Failed validations
        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        $credentials = $request->only("email", "password");

        //Authenticate user
        if(Auth::attempt($credentials)){
            $token = Str::random(30);
            $user = User::query()
                ->where("email", "=", request("email"))
                ->first();

            //Create access token
            $createToken = Token::query()->create([
                "token"=>$token,
                "user_id"=>$user->id,
            ]);
            //If creation fails
            if(!$createToken){
                return  response()->json([
                    'status'=>300,
                    'message' => "Failed token creation!"
                ], 300);
            }

            return  response()->json([
                'status'=>201,
                'message' => "Logged in",
                "token"=> $token
            ], 201);
        }

    }

}
