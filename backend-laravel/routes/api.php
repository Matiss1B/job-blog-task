<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\AuthenticationController;
use App\Http\Controllers\API\V1\BlogController;
use App\Http\Middleware\AuthorizeUser;
use App\Http\Middleware\CheckBlogAuthor;

//AuthenticationController
Route::post("v1/user/register", [AuthenticationController::class, "register"]);
Route::post("v1/user/login", [AuthenticationController::class, "login"]);

//BlogController
Route::post("v1/blog/create", [BlogController::class, "create"])
    ->middleware(AuthorizeUser::class);

Route::post("v1/blog/update/{id}", [BlogController::class, "update"])
    ->middleware(AuthorizeUser::class)
    ->middleware(CheckBlogAuthor::class);
