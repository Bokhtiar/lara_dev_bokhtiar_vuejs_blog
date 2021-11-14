<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WebSetting;
use Illuminate\Http\Request;

class SettingController extends Controller
{

    public function index($id){
        $web = WebSetting::find(1);
        return response()->json(['web'=>$web], 200);
    }

    public function store(Request $request){
        $web = new WebSetting;
            $web->name = $request->name;
            $web->phone = $request->phone;
            $web->email = $request->email;
            $web->location = $request->location;
            $web->fb = $request->fb;
            $web->insta = $request->insta;
            $web->linkdin = $request->linkdin;
            $web->twitter = $request->twitter;
            $web->save();
        return response()->json(['web'=>$web], 200);
    }

    public function update(Request $request, $id){
        $web = WebSetting::find(1);
            $web->name = $request->name;
            $web->phone = $request->phone;
            $web->email = $request->email;
            $web->location = $request->location;
            $web->fb = $request->fb;
            $web->insta = $request->insta;
            $web->linkdin = $request->linkdin;
            $web->twitter = $request->twitter;
            $web->save();
        return response()->json(['web'=>$web], 200);
    }
}
