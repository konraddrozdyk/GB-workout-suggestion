import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/suggestions")({
  component: SuggestionsPage,
});

function SuggestionsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
      >
        Back
      </button>

      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
          <h1 className="text-xl font-bold text-center mb-4">
            Workout Suggestions
          </h1>
          <p className="text-center text-gray-700">
            Here are some suggested workouts based on your preferences.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-sm text-gray-600">- 10 Push-ups</li>
            <li className="text-sm text-gray-600">- 20 Squats</li>
            <li className="text-sm text-gray-600">- 15-Minute Yoga</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
