<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\AuthenticationController;
use App\Http\Controllers\API\V1\BlogController;
use App\Http\Middleware\AuthorizeUser;
use App\Http\Middleware\CheckBlogAuthor;
use App\Http\Controllers\API\V1\CommentsController;
use App\Http\Middleware\CheckComentAuthor;

//AuthenticationController
Route::post("v1/user/register", [AuthenticationController::class, "register"]);
Route::post("v1/user/login", [AuthenticationController::class, "login"]);

//BlogController
Route::post("v1/blog/create", [BlogController::class, "create"])
    ->middleware(AuthorizeUser::class);

Route::post("v1/blog/update/{id}", [BlogController::class, "update"])
    ->middleware(AuthorizeUser::class)
    ->middleware(CheckBlogAuthor::class);

Route::delete("v1/blog/delete/{id}", [BlogController::class, "destroy"])
    ->middleware(AuthorizeUser::class)
    ->middleware(CheckBlogAuthor::class);

Route::get("v1/blog/get", [BlogController::class, "getAll"])
    ->middleware(AuthorizeUser::class);

Route::get("v1/blog/{id}", [BlogController::class, "getSingle"])
    ->middleware(AuthorizeUser::class);

Route::get("v1/blog/all/for/user", [BlogController::class, "getForUser"])
    ->middleware(AuthorizeUser::class);

//CommentsController

Route::post("v1/comment/create", [CommentsController::class, "create"])
    ->middleware(AuthorizeUser::class);

Route::get("v1/comments/get", [CommentsController::class, "getAllForUser"])
    ->middleware(AuthorizeUser::class);

Route::delete("v1/comment/delete/{id}", [CommentsController::class, "delete"])
    ->middleware(AuthorizeUser::class)
    ->middleware(CheckComentAuthor::class);
