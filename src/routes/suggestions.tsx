import { createFileRoute, useSearch } from "@tanstack/react-router";

export const Route = createFileRoute("/suggestions")({
  component: SuggestionsPage,
});

function SuggestionsPage() {
  interface SearchParams {
    equipment: string;
    difficulty: string;
    goal: string;
  }

  const search = useSearch({
    from: "/suggestions",
  });

  const { equipment, difficulty, goal } = search as SearchParams;
  const suggestions = getSuggestions(equipment, difficulty, goal);

  const handleBack = () => {
    window.history.back();
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
          <ul className="mt-4 space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-gray-600">
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function getSuggestions(
  equipment: string,
  difficulty: string,
  goal: string
): string[] {
  const suggestions: Record<
    string,
    Record<string, Record<string, string[]>>
  > = {
    none: {
      easy: {
        "weight-loss": ["10-minute Walk", "5 Jumping Jacks", "15 Crunches"],
        "muscle-growth": ["15 Push-ups", "20 Squats", "Plank for 30 seconds"],
        fitness: ["15-minute Stretching", "10 Push-ups", "10 Squats"],
      },
      medium: {
        "weight-loss": ["15-minute Jog", "20 Jumping Jacks", "20 Crunches"],
        "muscle-growth": ["20 Push-ups", "30 Squats", "Plank for 1 minute"],
        fitness: ["20-minute Stretching", "15 Push-ups", "15 Squats"],
      },
      hard: {
        "weight-loss": ["20-minute Run", "30 Jumping Jacks", "30 Crunches"],
        "muscle-growth": ["25 Push-ups", "40 Squats", "Plank for 2 minutes"],
        fitness: ["30-minute Stretching", "20 Push-ups", "20 Squats"],
      },
    },
    "home-equipment": {
      easy: {
        "weight-loss": ["Push-ups with chair", "Home-based squats"],
        "muscle-growth": ["Dumbbell curls", "Leg presses with weights"],
        fitness: ["Push-ups", "Jumping jacks"],
      },
      medium: {
        "weight-loss": ["Treadmill walk", "Kettlebell swings"],
        "muscle-growth": ["Barbell squats", "Deadlifts"],
        fitness: ["Burpees", "Jump rope"],
      },
      hard: {
        "weight-loss": ["Sprints on treadmill", "Jump rope with double jump"],
        "muscle-growth": ["Bench press", "Squat with weights"],
        fitness: ["Jump squats", "Pull-ups"],
      },
    },
    gym: {
      easy: {
        "weight-loss": ["Treadmill walk", "Light cycling"],
        "muscle-growth": ["Barbell curls", "Machine press"],
        fitness: ["Elliptical training", "Rowing machine"],
      },
      medium: {
        "weight-loss": ["Heavy cycling", "Treadmill sprints"],
        "muscle-growth": ["Barbell squats", "Chest press"],
        fitness: ["Push-ups", "Incline bench press"],
      },
      hard: {
        "weight-loss": ["HIIT on treadmill", "Rowing HIIT"],
        "muscle-growth": ["Deadlifts", "Squat press"],
        fitness: ["Pull-ups", "Barbell squats"],
      },
    },
  };

  return (
    suggestions[equipment]?.[difficulty]?.[goal] || ["No suggestions available"]
  );
}
