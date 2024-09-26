import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Subscription from "./pages/Subscription"; 
import UserCenter from "./pages/UserTable"; 
import MealClasses from "./pages/MealClasses"; // Your component for Meal Classes
import MealTypes from "./pages/MealTypes"; // Your component for Meal Types
import Meals from "./pages/Meals";   

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="subscription" element={<Subscription />} />
          <Route path="user_center" element={<UserCenter />} />
          <Route path="/admin/meal_classes" element={<MealClasses />} />
          <Route path="/admin/meal_types" element={<MealTypes />} />
          <Route path="/admin/meals" element={<Meals />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
