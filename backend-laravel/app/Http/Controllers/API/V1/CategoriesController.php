<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\Models\API\V1\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function getAll(){
        $categories = Category::query()->get()->all();
        return response()->json([
            "status"=>201,
            "categories"=>$categories
        ], 201);
    }
}
