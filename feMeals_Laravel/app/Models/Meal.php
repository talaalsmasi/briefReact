<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'type', 'meal_type_id', 'meal_class_id'];

    // Relationships
    public function mealType()
    {
        return $this->belongsTo(MealType::class);
    }

    public function mealClass()
    {
        return $this->belongsTo(MealClass::class);
    }
}
