<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Meal;


class FoodMenuController extends Controller
{

    public function getMeals(Request $request)
{
    $category = $request->query('category'); 
    $meals = Meal::with(['mealType', 'mealClass']);

    if ($category) {
        $meals->whereHas('mealType', function ($query) use ($category) {
            $query->where('name', $category);
        });
    }

    return response()->json($meals->get());
}


}
