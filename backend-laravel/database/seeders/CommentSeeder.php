<?php

namespace Database\Seeders;

use App\Models\API\V1\Blog;
use App\Models\API\V1\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Psy\Readline\Hoa\Xcallable;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $comments = [
            [
                "comment"=>"Very nice blog!",
                "blog_id"=>1,
                "user_id"=>1,
            ],
            [
                "comment"=>"My favourite!",
                "blog_id"=>1,
                "user_id"=>2,
            ],
            [
                "comment"=>"This is greatest blog i have ever seen!",
                "blog_id"=>2,
                "user_id"=>1,
            ],
            [
                "comment"=>"Keep it up!",
                "blog_id"=>2,
                "user_id"=>3,
            ],
            [
                "comment"=>"I agree:)",
                "blog_id"=>3,
                "user_id"=>2,
            ],
            [
                "comment"=>"Gooood",
                "blog_id"=>3,
                "user_id"=>1,
            ],
            [
                "comment"=>"yesss, i like this",
                "blog_id"=>3,
                "user_id"=>3,
            ],
        ];
        foreach ($comments as $comment){
            Comment::query()->create($comment);
        }
    }
}
