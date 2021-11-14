<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(){
        $category = Category::all();
        return response()->json(['category'=>$category], 200);
    }

    public function category_ways_blog($id){
        $blog = Blog::where('category_id', $id)->get();
        return response()->json(['blog'=>$blog], 200);
    }
}
