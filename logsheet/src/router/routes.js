const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },

      { path: "/dashboard", component: () => import("pages/dashboard.vue") },
      {
        path: "/sterilisation",
        component: () => import("pages/sterilisationLog.vue"),
      },
      {
        path: "/turbine",
        component: () => import("pages/turbineLog.vue"),
      },
      {
        path: "/boiler",
        component: () => import("pages/boilerLog.vue"),
      },
      {
        path: "/shift",
        component: () => import("pages/shiftReport.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
