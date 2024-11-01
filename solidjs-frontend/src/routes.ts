import { lazy } from "solid-js";
import { RouteDefinition } from "@solidjs/router";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("./views/account/Account")),
  },
  {
    path: "/company/:company",
    component: lazy(() => import("./views/company/Company")),
  },
  {
    path: "/location/:location",
    component: lazy(() => import("./views/location/Location")),
  },
  {
    path: "/timeline",
    component: lazy(() => import("./views/Timeline")),
  },
];
