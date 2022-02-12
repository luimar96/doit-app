import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import EmployeePage from "../views/OperatorPage.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,

  },
    {
      path: "/operators",
      name: "operatorpage",
      component: EmployeePage,

    },
  {
    path: "/overview",
    name: "Overview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OverviewPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
