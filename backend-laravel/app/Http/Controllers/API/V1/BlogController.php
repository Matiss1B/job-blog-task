<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\API\V1\Blog;
use App\Models\API\V1\CategoryPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:320|min:5',
            'description' => 'required|min:10|max:3000|string',
            'category_ids' => 'required|array',
            ]);

        //Failed validations
        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }
        //Create blog post
        $createBlog = Blog::query()->create([
            "title" => request("title"),
            "description" => request("description"),
            "user_id" => Session::get("user_id"),
            "category_id" => 2
        ]);

        //If creation fails
        if(!$createBlog){
            return response()->json([
                'status' => 300,
                "message" => "Blog creation failed!"
            ], 300);
        }
        foreach (request("category_ids") as $category){

            //Assign post to category
            $createCategoryPost = CategoryPost::query()->create([
                "category_id"=>$category,
                "blog_id"=>$createBlog->id,
            ]);

            //If creation fails
            if(!$createCategoryPost){
                return response()->json([
                    'status' => 300,
                    "message" => "Category post creation failed!"
                ], 300);
            }
        }

        //If blog created
        return response()->json([
            'status' => 201,
            'message' => "Blog created!"
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:320|min:5',
            'description' => 'required|min:10|max:3000|string',
            'category_ids' => 'required|array',
        ]);

        //Failed validations
        if($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }
        //Update blog post
        $updateBlog = Blog::query()->find($id)->update([
            "title" => request("title"),
            "description" => request("description"),
            "user_id" => Session::get("user_id"),
            "category_id" => 2
        ]);

        //If creation fails
        if(!$updateBlog){
            return response()->json([
                'status' => 300,
                "message" => "Blog update failed!"
            ], 300);
        }
        //Delete all categories before make new ones
        $allCategoryPosts = CategoryPost::query()
            ->where("blog_id", "=", $id);

        if($allCategoryPosts){
            $allCategoryPosts->delete();
        }

        foreach (request("category_ids") as $category){

            //Assign post to category
            $createCategoryPost = CategoryPost::query()->create([
                "category_id"=>$category,
                "blog_id"=>$id,
            ]);

            //If creation fails
            if(!$createCategoryPost){
                return response()->json([
                    'status' => 300,
                    "message" => "Category post creation failed!"
                ], 300);
            }
        }

        //If blog created
        return response()->json([
            'status' => 201,
            'message' => "Blog updated!"
        ], 201);
    }
}
