import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;

// @ts-ignore
VueRouter.prototype.push = function (location) {
  // @ts-ignore
  return originalPush.call(this, location).catch((err) => err);
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
