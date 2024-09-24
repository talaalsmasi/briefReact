<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Subscription;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Subscription>
 */
class SubscriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Subscription::class;

    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 12),
            'meal_class_id' => $this->faker->numberBetween(1, 9),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'status' => $this->faker->randomElement(['active', 'cancelled']),
            'delivery_info' => $this->faker->address,
        ];
    }
}
