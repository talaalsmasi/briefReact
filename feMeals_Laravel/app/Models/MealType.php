<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealType extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // Relationships
    public function mealClasses()
    {
        return $this->hasMany(MealClass::class);
    }

    public function meals()
    {
        return $this->hasMany(Meal::class);
    }
}
