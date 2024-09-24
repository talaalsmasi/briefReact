<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\MealClass;

class MealClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        MealClass::create(['name' => 'Basic', 'meal_type_id' => 1]); // Linked to 'Keto'
        MealClass::create(['name' => 'Premium', 'meal_type_id' => 1]);
        MealClass::create(['name' => 'VIP', 'meal_type_id' => 1]);

        MealClass::create(['name' => 'Basic', 'meal_type_id' => 2]); // Linked to 'Vegan'
        MealClass::create(['name' => 'Premium', 'meal_type_id' => 2]);
        MealClass::create(['name' => 'VIP', 'meal_type_id' => 2]);

        MealClass::create(['name' => 'Basic', 'meal_type_id' => 3]); // Linked to 'Healthy'
        MealClass::create(['name' => 'Premium', 'meal_type_id' => 3]);
        MealClass::create(['name' => 'VIP', 'meal_type_id' => 3]);

        MealClass::create(['name' => 'Basic', 'meal_type_id' => 4]); // Linked to 'Diabetes'
        MealClass::create(['name' => 'Premium', 'meal_type_id' => 4]);
        MealClass::create(['name' => 'VIP', 'meal_type_id' => 4]);
    }
}
