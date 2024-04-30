<?php

namespace Database\Seeders;

use App\Models\API\V1\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

    public function run(): void
    {
        $passwords= [
            "cheeseBurger123",
            "test1234",
            "iamthebest"
        ];
        $users = [
            [
                "name"=> "John Ederson",
                "email" => "jonh@gmail.com",
                "password" => Hash::make($passwords[0])
            ],
            [
                "name"=> "Emilie Jane",
                "email" => "jane@gmail.com",
                "password" => Hash::make($passwords[1])
            ],
            [
                "name"=> "Janis Berzins",
                "email" => "janka@gmail.com",
                "password" => Hash::make($passwords[2])
            ],
        ];
        foreach ($users as $user){
            User::query()->create($user);
        }
    }
}
