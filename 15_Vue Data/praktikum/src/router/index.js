import vue from "vue";
import vueRouter from 'vue-router'

import home from '@/views/home.vue'
import detail from '@/views/detail.vue'

vue.useAttrs(VueRouter)

const routes = [{
    path: "/",
    name: 'home'
    //component: home
},
    path: '/detail',
    name: 'detail'
    component: detail
]

const router =new VueRouter({
    mode: 'history',
    base: process.env.Base_URL,
    routes
})

export default router