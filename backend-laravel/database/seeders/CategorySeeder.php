<?php

namespace Database\Seeders;

use App\Models\API\V1\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'category' => 'Fashion',
            ],
            [
                'category' => 'Cars',
            ],
            [
                'category' => 'Hobbies',
            ],
            [
                'category' => 'Food',
            ],
            [
                'category' => 'School',
            ],
            [
                'category' => 'Home',
            ],
        ];

        foreach ($categories as $category) {
            Category::query()->create($category);
        }
    }
}
