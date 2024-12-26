import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Root = createRootRoute({
  component: () => (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/workout">Workout</Link>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
