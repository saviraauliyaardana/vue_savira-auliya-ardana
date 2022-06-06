import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Section2 from '../views/Section2.vue'
import Section3 from '../views/Section3.vue'
import Section4 from '../views/Section4.vue'
import Section5 from '../views/Section5.vue'
import Section6 from '../views/Section6.vue'
import Section7 from '../views/Section7.vue'
import Section8 from '../views/Section8.vue'
import Section9 from '../views/Section9.vue'
import Section10 from '../views/Section10.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/section2',
    name: 'Section2',
    component: Section2
  },
  {
    path: '/section3',
    name: 'Section3',
    component: Section3
  },
  {
    path: '/section4',
    name: 'Section4',
    component: Section4
  },
  {
    path: '/section5',
    name: 'Section5',
    component: Section5
  },
  {
    path: '/section6',
    name: 'Section6',
    component: Section6
  },
  {
    path: '/section7',
    name: 'Section7',
    component: Section7
  },
  {
    path: '/section8',
    name: 'Section8',
    component: Section8
  },
  {
    path: '/section9',
    name: 'Section9',
    component: Section9
  },
  {
    path: '/section10',
    name: 'Section10',
    component: Section10
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
