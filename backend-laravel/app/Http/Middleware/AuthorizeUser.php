<?php

namespace App\Http\Middleware;

use App\Models\API\V1\Token;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class AuthorizeUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        // Check the token using the checkToken method
        if (self::checkToken($request->header('Authorization')) !== false) {
            // Token is valid, proceed with the request
            $token = Token::query()->where("token", $request->header('Authorization'))->first();
            $timestamp = Carbon::parse($token->updated_at);
            $currentTimestamp = Carbon::now();
            if ($currentTimestamp->diffInMinutes($timestamp) >= 1440) {
                Session::flush();
                Token::query()->where("token",$request->header('Authorization'))->delete();
                return response()->json(["Message"=> "Unauthorised!", "status"=>401], 401);
            }else {
                $data = [
                    "updated_at"=>Carbon::now()->format('Y-m-d H:i:s'),
                ];
                Token::query()->where("token",$request->header('Authorization'))->update($data);
                Session::put("user_id", self::checkToken($request->header('Authorization')));
                return $next($request);
            }
        } else {
            // Token is invalid, handle the error
            return response()->json(["Message"=> "Unauthorised!", "token"=>$request->header('Authorization'), "status"=>401], 401);
        }
    }

    public static function checkToken($user)
    {
        $token = Token::query()->where("token", $user)->first();
        if($token){
            return $token->user_id;
        }
        return false;
    }
}
