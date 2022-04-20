import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },

  {
    path: '/carddetail/:cardId',
    name: 'CardDetail',
    component: () => import('../views/CardDetail.vue')
  },





]

const router = new VueRouter({
  routes
})

export default router
