import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/resi',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tarif',
    name: 'tarif',
    component: () => import(/* webpackChunkName: "about" */ '../views/TarifView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
