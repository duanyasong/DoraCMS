import Vue from 'vue'
import Router from 'vue-router'
import settings from "@root/publicMethods/settings";
import Bannersilder from '@/views/bannersilder'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: settings.admin_base_path + '/bannersilder',
    name: 'bannersilder',
    component: Bannersilder
  }, {
    path: settings.admin_base_path + '/bannersilder/editBannersilder/:id',
    name: 'editBannersilder',
    component: () => import( /* webpackChunkName: "editBannersilder" */ '@/views/bannersilder/infoForm.vue')
  }, {
    path: settings.admin_base_path + '/bannersilder/addBannersilder',
    name: 'addBannersilder',
    component: () => import( /* webpackChunkName: "editBannersilder" */ '@/views/bannersilder/infoForm.vue')
  }]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router