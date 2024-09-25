<?php

namespace App\Http\Controllers;

use Illuminate\Support\Carbon;
use App\Models\Subscription;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $users = User::with('role')->get();

        return response()->json($users);
    }

    public function dashboard()
    {
        // Retrieve user with ID 2 (static for now)
        $user = User::find(2);

        $totalProfit = Subscription::whereMonth('start_date', Carbon::now()->month)
            ->whereYear('start_date', Carbon::now()->year)
            ->join('meal_classes', 'subscriptions.meal_class_id', '=', 'meal_classes.id')
            ->sum('meal_classes.price'); // Summing the price from meal_classes

        // Count the number of subscriptions for the current month
        $subscriptionCount = Subscription::whereMonth('start_date', Carbon::now()->month)
            ->whereYear('start_date', Carbon::now()->year)
            ->count();

        // Return both total profit and subscription count in one response
        return response()->json([
            'user' => $user,

            'totalProfit' => $totalProfit,
            'subscriptionCount' => $subscriptionCount
        ]);
    }

    public function getSubscriptions()
    {
        // Fetch subscriptions with related mealClass and mealType
        $subscriptions = Subscription::with(['mealClass.mealType', 'user'])->get();
        return response()->json($subscriptions);
    }

    public function updateSubscriptionStatus($id, Request $request)
    {
        $subscription = Subscription::find($id);
        $subscription->status = $request->status;
        $subscription->save();

        return response()->json(['message' => 'Subscription status updated successfully']);
    }
}
