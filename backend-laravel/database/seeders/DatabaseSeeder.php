<?php

namespace Database\Seeders;

use App\Models\API\V1\User;
use Illuminate\Database\Seeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategorySeeder::class,
            CommentSeeder::class,
            UserSeeder::class,
            BlogSeeder::class,
            CategoryPostSeeder::class
        ]);
    }
}
