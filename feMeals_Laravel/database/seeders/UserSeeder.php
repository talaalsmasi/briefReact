<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        User::create([
            'name' => 'Normal User',
            'email' => 'User@example.com',
            'password' => Hash::make('password'),
            'role_id' => 1, 
            'image' => 'default.jpg',
            'phone' => '123456789',
        ]);

        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role_id' => 2, // Assuming Admin role has ID 1
            'image' => 'default.jpg',
            'phone' => '123456789',
        ]);

        User::factory(10)->create(); // Creates 10 random users
    }
}
