<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('meal_classes', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // basic, premium, VIP
            $table->integer('price');
            $table->integer('meal_num');
            $table->string('description');
            $table->string('image')->default('default.jpg');

            $table->foreignId('meal_type_id')->constrained('meal_types')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meal_classes');
    }
};
