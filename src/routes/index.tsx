import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  const navigate = useNavigate();

  const handleSuggest = (event: React.FormEvent) => {
    event.preventDefault();
    navigate({ to: "/suggestions" });
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
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700"
            >
              Duration (minutes)
            </label>
            <select
              id="duration"
              name="duration"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
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
