<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MealType;

class MealTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        MealType::create(['name' => 'Keto']);
        MealType::create(['name' => 'Vegan']);
        MealType::create(['name' => 'Healthy']);
        MealType::create(['name' => 'Diabetes']);
    }
}
