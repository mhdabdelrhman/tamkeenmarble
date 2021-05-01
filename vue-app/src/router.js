import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/views/layouts/Layout.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue")
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue")
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "Error404",
    component: () => import(/* webpackChunkName: "error" */ "@/views/Error.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
