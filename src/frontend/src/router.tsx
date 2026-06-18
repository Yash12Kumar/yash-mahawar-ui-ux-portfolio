import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "./App";
import EcommerceCaseStudy from "./pages/EcommerceCaseStudy";
import FitnessCaseStudy from "./pages/FitnessCaseStudy";
import FoodDeliveryCaseStudy from "./pages/FoodDeliveryCaseStudy";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const foodDeliveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/food-delivery-case-study",
  component: FoodDeliveryCaseStudy,
});

const ecommerceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ecommerce-case-study",
  component: EcommerceCaseStudy,
});

const fitnessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fitness-case-study",
  component: FitnessCaseStudy,
});

const routeTree = rootRoute.addChildren([
  portfolioRoute,
  foodDeliveryRoute,
  ecommerceRoute,
  fitnessRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
