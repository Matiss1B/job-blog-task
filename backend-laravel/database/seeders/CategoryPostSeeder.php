<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\API\V1\CategoryPost;
use Illuminate\Database\Seeder;

class CategoryPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $units = [
            [
                "blog_id"=>1,
                "category_id"=>2,
            ],
            [
                "blog_id"=>2,
                "category_id"=>6,
            ],
            [
                "blog_id"=>3,
                "category_id"=>4,
            ],
            [
                "blog_id"=>3,
                "category_id"=>6,
            ],
        ];
        foreach ($units as $unit){
            CategoryPost::query()->create($unit);
        }
    }
}
