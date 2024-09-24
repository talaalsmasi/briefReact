<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




//Aseel routes start

//Aseel routes ends

//Amal routes start

//Amal routes ends

//Fajer routes start

//Fajer routes ends

//Tala routes start

//Tala routes ends

//Dania routes start

//Dania routes ends

//Dalia routes start

//Dalia routes ends
