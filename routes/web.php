<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('layouts.user.app');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/blog', [App\Http\Controllers\User\BlogController::class, 'index']);
Route::get('/blog/show/{id}', [App\Http\Controllers\User\BlogController::class, 'show']);
Route::get('/category', [App\Http\Controllers\User\CategoryController::class, 'index']);
Route::get('/category/ways/blog/{id}', [App\Http\Controllers\User\CategoryController::class, 'category_ways_blog']);
Route::get('/recent/blog', [App\Http\Controllers\User\BlogController::class, 'recentBlog']);

Route::get('/liveSearchBlog/{text}', [App\Http\Controllers\User\BlogController::class, 'search']);

Route::group([ "as"=>'user.' , "prefix"=>'user' , "namespace"=>'User' , "middleware"=>['auth','user']],function(){
    Route::get('/dashboard', [App\Http\Controllers\User\UserDashboardController::class, 'index'])->name('dashboard');
});


Route::group([ "as"=>'admin.' , "prefix"=>'admin' , "namespace"=>'Admin' , "middleware"=>['auth','admin']],function(){
    Route::get('/dashboard', [App\Http\Controllers\Admin\AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('/category/index', [App\Http\Controllers\Admin\CategoryController::class, 'index']);
    Route::post('/category/store', [App\Http\Controllers\Admin\CategoryController::class, 'store']);
    Route::get('/category/edit/{id}', [App\Http\Controllers\Admin\CategoryController::class, 'edit']);
    Route::post('/category/update/{id}', [App\Http\Controllers\Admin\CategoryController::class, 'update']);
    Route::get('/category/delete/{id}', [App\Http\Controllers\Admin\CategoryController::class, 'destroy']);
    //blog
    Route::get('/blog/index', [App\Http\Controllers\Admin\BlogController::class, 'index']);
    Route::post('/blog/store', [App\Http\Controllers\Admin\BlogController::class, 'store']);
    Route::get('/blog/edit/{id}', [App\Http\Controllers\Admin\BlogController::class, 'edit']);
    Route::post('/blog/update/{id}', [App\Http\Controllers\Admin\BlogController::class, 'update']);
    Route::get('/blog/delete/{id}', [App\Http\Controllers\Admin\BlogController::class, 'destroy']);

    //setting
    Route::get('/setting/{id}', [App\Http\Controllers\Admin\SettingController::class, 'index']);
    Route::post('/setting/store', [App\Http\Controllers\Admin\SettingController::class, 'store']);
    Route::post('/setting/update/{id}', [App\Http\Controllers\Admin\SettingController::class, 'update']);

    //logout
    Route::get('/logout', [App\Http\Controllers\Admin\AdminDashboardController::class, 'logout']);


});
