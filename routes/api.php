<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login','API\LoginController@login');


Route::group(['middleware'=>'auth:api'], function () {
    // Admin dashboard
    Route::get('/dashboard','API\CategoryController@subCategory')->name('subcategory.index');
    Route::post('/newpost','API\BlogController@newPost');
    Route::get('/allpost','API\BlogController@allPost');
    

    Route::post('/logout','API\LoginController@logout');
});


// hVt7YoYmPlIcZALGEMsL6PyUrHQWSyRDsMN9VLEi
// HTcq9p1CYx4F1hH7nUpWmsBZrTOh4xp6jpcdsSND