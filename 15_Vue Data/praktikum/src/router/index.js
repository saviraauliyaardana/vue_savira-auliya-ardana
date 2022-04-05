import Vue from "vue";
import VueRouter from "vue-router";
import News from "../views/news.vue";
import NewsDetail from "../views/detailNews.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "News",
    component : News,
  },
  {
    path: "/news/:index",
    component : NewsDetail,
    name: "NewsDetail",
  },
  
];
const router = new VueRouter({
    mode:"history",
    base: "/",
    routes,
  });

export default router;