import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "@/views/Todo";
import TodoDetail from "@/views/TodoDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/todo/:id",
    name: "TodoDetail",
    component: TodoDetail,
  },
];

const router = new VueRouter({
  routes,
  base: "/",
  mode: "history",
});

export default router;
