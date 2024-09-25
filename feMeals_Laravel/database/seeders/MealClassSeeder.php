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
        MealClass::create(['name' => 'Basic','price'=>30, 'meal_num' => 1,  
        'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 1]); // Linked to 'Keto'
        MealClass::create(['name' => 'Premium', 'price' =>50, 'meal_num' => 2,'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 1]);
        MealClass::create(['name' => 'VIP', 'price' =>80, 'meal_num' => 4, 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 1]);

        MealClass::create(['name' => 'Basic', 'price' =>20, 'meal_num' => 1, 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 2]); // Linked to 'Vegan'
        MealClass::create(['name' => 'Premium', 'price' =>30, 'meal_num' => 2, 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 2]);
        MealClass::create(['name' => 'VIP', 'price' =>50, 'meal_num' => 4,'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 2]);

        MealClass::create(['name' => 'Basic','price' =>40, 'meal_num' => 1,'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 3]); // Linked to 'Healthy'
        MealClass::create(['name' => 'Premium', 'price' =>50, 'meal_num' => 2, 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 3]);
        MealClass::create(['name' => 'VIP', 'price' =>70, 'meal_num' => 4, 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 3]);

        MealClass::create(['name' => 'Basic', 'price' =>20, 'meal_num' => 1, 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 4]); // Linked to 'Diabetes'
        MealClass::create(['name' => 'Premium','price' =>40, 'meal_num' => 2, 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 4]);
        MealClass::create(['name' => 'VIP', 'price' =>70, 'meal_num' => 4,'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatum nam nostrum omnis necessitatibus dignissimos assumenda tempore exercitationem harum sapiente ullam doloremque quidem quia, officia cumque sit minima iste ipsum!', 'meal_type_id' => 4]);
    }
}
