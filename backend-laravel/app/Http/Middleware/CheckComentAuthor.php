<?php

namespace App\Http\Middleware;

use App\Models\API\V1\Blog;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;
use App\Models\API\V1\Comment;

class CheckComentAuthor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $commentId = $request->route('id');

        //Find that exact comment
        $comment = Comment::query()->find($commentId);

        //If blog doesn't exsist or request maker is not author
        if(!$comment || $comment->user_id != Session::get("user_id")){
            return response()->json([
                "status"=>300,
                "message"=>"Comment doesn't exist or you are not author!"
            ], 300);
        }
        return $next($request);
    }
}
