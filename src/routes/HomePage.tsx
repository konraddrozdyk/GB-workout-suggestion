// HomePage.tsx
import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // State for dropdown selections
  const [difficulty, setDifficulty] = useState("");
  const [workoutType, setWorkoutType] = useState("");

  const handleSuggest = () => {
    // Navigate to suggestions route and pass selected values as state
    navigate({
      to: "/suggestions",
      search: { difficulty, workoutType },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Select Your Preferences</h1>

      <div className="space-y-4 w-full max-w-sm">
        {/* Dropdown for Difficulty */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Difficulty Level
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Dropdown for Workout Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Workout Type
          </label>
          <select
            value={workoutType}
            onChange={(e) => setWorkoutType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select Workout Type</option>
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
            <option value="flexibility">Flexibility</option>
          </select>
        </div>

        {/* Suggest Button */}
        <button
          onClick={handleSuggest}
          disabled={!difficulty || !workoutType}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
        >
          Suggest
        </button>
      </div>
    </div>
  );
};

export default HomePage;
