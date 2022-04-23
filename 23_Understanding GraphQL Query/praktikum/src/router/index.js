import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TodoPage from "../views/TodoPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/TodoPage',
    name: 'TodoPage',
    component: TodoPage
  }
]

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
