<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\API\V1\Blog;
use App\Models\API\V1\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class CommentsController extends Controller
{
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            "blog_id" => "required",
            "comment" => "required|min:2"
        ]);

        //Failed validations
        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }
        $blog = Blog::query()->find(request("blog_id"));

        if(!$blog){
            return response()->json([
                "status" => 300,
                "message"=>"Blog doesn't exsist!"
            ], 300);
        }

        $comment = Comment::query()->create([
            "user_id" => Session::get("user_id"),
            "blog_id" => request("blog_id"),
            "comment" => request("comment")
        ]);

        if(!$comment){
            return response()->json([
                "status" => 300,
                "message"=>"Comment creation failed!"
            ], 300);
        }
        return response()->json([
            "status" => 201,
            "message"=>"Blog created successfully!"
        ], 201);
    }
    public function getAllForUser()
    {
        $comments = Comment::query()
            ->where("user_id", "=", Session::get("user_id"))
            ->with("user")
            ->with("blog")
            ->get();

        return response()->json([
            "status" => 201,
            "comments"=> $comments,
            "message"=>"Comments selected successfully"
        ], 201);
    }
    public function delete($id)
    {
        if(!Comment::query()->find($id)->delete()){
            return response()->json([
                "status" => 300,
                "message"=>"Comment deleting failed!"
            ], 300);
        }
        return response()->json([
            "status" => 201,
            "message"=>"Comment deleted successfully!"
        ], 201);
    }
}
