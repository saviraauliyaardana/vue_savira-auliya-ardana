import Vue from "vue";
import VueRouter from "vue-router";
import HalamanTodoList from "@/views/HalamanTodoList.vue";
import HalamanDetail from "@/views/HalamanDetail.vue";

Vue.use(VueRouter);


export default new VueRouter({
    routes: [{
            path: "/",
            component: HalamanTodoList
        },
        {
            path: "/:index",
            component: HalamanDetail
        }
    ]
});