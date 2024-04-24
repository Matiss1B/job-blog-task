<?php

namespace App\Http\Middleware;

use App\Models\API\V1\Blog;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class CheckBlogAuthor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $blogId = $request->route('id');

        //Find that exact blog post
        $blog = Blog::query()->find($blogId);

        //If blog doesn't exsist or request maker is not author
        if(!$blog || $blog->user_id != Session::get("user_id")){
            return response()->json([
                "status"=>300,
                "message"=>"Blog doesn't exist or you are not author!"
            ], 300);
        }
        return $next($request);
    }
}
