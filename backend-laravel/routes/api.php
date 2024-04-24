<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\V1\AuthenticationController;

Route::post("v1/user/register", [AuthenticationController::class, "register"]);
Route::post("v1/user/login", [AuthenticationController::class, "login"]);
