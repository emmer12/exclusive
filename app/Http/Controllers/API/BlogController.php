<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;

use App\NewPost;

class BlogController extends Controller
{
    public function newPost(Request $request)
    {
        $validator=$request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'min:6'],
        ]);
        if ($request->hasFile('display')) {
            $fileWiithExt=$request->file('display')->getClientOriginalName();
      
            $fileName=pathinfo($fileWiithExt,PATHINFO_FILENAME);
            //get extension only
            $fileEx=$request->file('display')->getClientOriginalExtension();
            // file name to store
            $fileNametoStore=$fileName.'_'.time().'.'.$fileEx;
            // upload image
            $path=$request->file('display')->storeAs("public/uploads/images",$fileNametoStore);
            }
            else {
              $fileNametoStore='default.jpg';
            }
            //Create New Post
            // $tags='';
            // $tags_o=$request->input('tags');
            // $tags_o=json_decode($tags_o);
            // foreach ($tags_o as $tag) {
            //   $tags.=$tag->value.",";
            // }
            $post= new NewPost();
            $post->title=$request->input('title');
            // $post->slug=str_slug($request->input('title'),'-');
            // $post->user_id=$request->input('id');
            // $post->category=$request->input('category');
            $post->description=$request->input('description');
            $post->display=$fileNametoStore;
            $post->save();

             return response()->json(['success'=>$request],200);
    
        

   }



   public function allPost()
   {
    $post=NewPost::all();
    return PostResource::collection($post);
   }

}