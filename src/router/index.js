
import {createRouter, createWebHistory} from 'vue-router';
import Home from "../views/Home.vue";
import SingleBlog from "../views/SingleBlog.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog/:id',
    name: "SingleBlog",
    component: SingleBlog,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;