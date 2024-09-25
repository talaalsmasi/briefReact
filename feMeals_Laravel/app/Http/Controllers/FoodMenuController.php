<?php

namespace App\Http\Controllers;

use App\Models\Meal;

class FoodMenuController extends Controller
{
    public function getMeals()
{
    $meals = Meal::with(['mealType', 'mealClass'])->get();
    return response()->json($meals);
}

}
