<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index(){
        $blog = Blog::all();
        return response()->json(['blog'=>$blog], 200);
    }

    public function show($id){
        $blog = Blog::find($id);
        return response()->json(['blog'=>$blog], 200);
    }

    public function recentBlog(){
        $blog = Blog::latest()->take(6)->get();
        return response()->json(['blog'=>$blog], 200);
    }
}
