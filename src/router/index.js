import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/DashboardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
]

const router = new VueRouter({
  routes
})

export default router
