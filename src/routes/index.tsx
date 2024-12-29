import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  const navigate = useNavigate();

  const handleSuggest = (event: React.FormEvent) => {
    event.preventDefault();

    const equipment = (event.currentTarget as any).equipment.value;
    const difficulty = (event.currentTarget as any).difficulty.value;
    const goal = (event.currentTarget as any).goal.value;

    navigate({
      to: "/suggestions",
      search: { equipment, difficulty, goal },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h1 className="text-xl font-bold text-center mb-4">
          Find Your Workout
        </h1>
        <form className="space-y-4" onSubmit={handleSuggest}>
          <div>
            <label
              htmlFor="equipment"
              className="block text-sm font-medium text-gray-700"
            >
              Equipment
            </label>
            <select
              id="equipment"
              name="equipment"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="none">None</option>
              <option value="home-equipment">Home Equipment</option>
              <option value="gym">Gym</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="block text-sm font-medium text-gray-700"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="goal"
              className="block text-sm font-medium text-gray-700"
            >
              Goal
            </label>
            <select
              id="goal"
              name="goal"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-growth">Muscle Growth</option>
              <option value="fitness">Fitness</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
          >
            Suggest
          </button>
        </form>
      </div>
    </div>
  );
}
