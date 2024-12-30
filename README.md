![wireframe](/workout-suggestion/public/wireframe.png)
![wireframe-alt](/public/wireframe.png)

# Workout Suggestions App

This is a React-based prototype application for suggesting workouts to users based on their preferences. The app uses **React**, **TypeScript**, **Tailwind CSS**, and **TanStack Router** for navigation. It features a simple two-page design:

1. A home page (`index`) where users select their preferences via dropdowns and click "Suggest".
2. A suggestions page that displays tailored workout suggestions based on the user's input.

---

## Features

- **Dropdown-Based Input:** Users can select their equipment, difficulty level, and fitness goal.
- **Dynamic Navigation:** Input data is passed via URL query parameters to the suggestions page.
- **Responsive Design:** Styled using Tailwind CSS for a clean and responsive UI.
- **Modern Navigation:** Built with TanStack Router for flexible and modern routing.
- **No Backend:** Fully static app, focused on client-side logic.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types for improved developer experience.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **TanStack Router**: A modern, type-safe router for React.
- **Vite**: A fast and lightweight development server and build tool.

---

## Future Improvements

Here are some potential enhancements to improve the functionality and user experience of the app:

- **Additional Exercises**: Expand the database of exercises to include more variations, catering to a wider range of user preferences and goals.
- **Swap Exercise Option**: Add a feature that allows users to swap out suggested exercises they don’t find suitable with alternative recommendations.
- **Backend Integration**: Implement a backend to:
  - Store user preferences and workout history.
  - Fetch exercises dynamically from a database.
  - Enable user accounts for personalized suggestions and progress tracking.
- **User Feedback**: Add a feature for users to provide feedback on the suggested workouts to improve recommendations over time.
- **Advanced Filters**: Allow users to apply more specific filters, such as duration, targeted muscle groups, or available time.
