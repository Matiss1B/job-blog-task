<?php

namespace App\Http\Controllers\API\V1;

use App\Functions\ImagesFunctions;
use App\Http\Controllers\Controller;
use App\Models\API\V1\Blog;
use App\Models\API\V1\CategoryPost;
use App\Models\API\V1\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    private $imagesFunctions;
    public function __construct(){
        $this->imagesFunctions = new ImagesFunctions();
    }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:320|min:5',
            'description' => 'required|min:10|max:3000|string',
            'img' => "required",
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
            "img" => $this->imagesFunctions->compress($request->file("img"), 15),
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
        $blog = Blog::query()->find($id);
        $blog->title = request("title");
        $blog->description = request("description");
        $blog->user_id =  Session::get("user_id");
        if($blog && $blog->img && $request->file("img")){
            unlink(storage_path('app/public/' . $blog->img));
            $blog->img = $this->imagesFunctions->compress($request->file("img"), 15);
        }
        //If creation fails
        if(!$blog->save()){
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
    public function destroy(Request $request, $id)
    {
        $blog = Blog::query()->find($id);
        if(!unlink(storage_path('app/public/' . $blog->img))){
            return response()->json([
                'status' => 300,
                "message" => "Img deleting failed!"
            ], 300);
        }
        $comments = Comment::query()->where("blog_id", "=", $id)->get();
        if(count($comments)>0) {
            if (!Comment::query()->where("blog_id", "=", $id)->delete()) {
                return response()->json([
                    'status' => 300,
                    "message" => "Comments deleting failed!"
                ], 300);
            }
        }
        if(!CategoryPost::query()->where("blog_id", "=", $id)->delete()){
            return response()->json([
                'status' => 300,
                "message" => "Category post deleting failed!"
            ], 300);
        }
        if(!$blog->delete()){
            return response()->json([
                'status' => 300,
                "message" => "Blog deleting failed!"
            ], 300);
        }
        //If blog deleted
        return response()->json([
            'status' => 201,
            'message' => "Blog deleted!"
        ], 201);

    }

    public function getAll()
    {
     $blogs = Blog::query()->with("user")->get();
     foreach ($blogs as $blog) {
         $blog->categories = CategoryPost::query()->where("blog_id", "=", $blog->id)
             ->with("category")
             ->get();
         $blog->comments = Comment::query()
             ->where("blog_id", "=", $blog->id)
             ->with("user")
             ->get();


     }
        return response()->json([
            "status"=> 201,
            "blogs"=>$blogs
        ], 201);
    }
    public function getSingle($id)
    {
        $blog = Blog::query()->with("user")->find($id);
        $blog->categories = CategoryPost::query()->where("blog_id", "=", $id)
            ->with("category")
            ->get();
        $blog->comments = Comment::query()
            ->where("blog_id", "=", $id)
            ->with("user")
            ->get();
        return response()->json([
            "status"=> 201,
            "blogs"=>$blog
        ], 201);
    }

    public function getForUser()
    {
        $blogs = Blog::query()->where("user_id", "=", Session::get("user_id"))->with("user")->get();
        foreach ($blogs as $blog) {
            $blog->categories = CategoryPost::query()->where("blog_id", "=", $blog->id)
                ->with("category")
                ->get();
            $blog->comments = Comment::query()
                ->where("blog_id", "=", $blog->id)
                ->with("user")
                ->get();
        }
        return response()->json([
            "status"=> 201,
            "blogs"=>$blogs
        ], 201);
    }


}
