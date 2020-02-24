import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/movieDetails',
    name: 'MovieDetails',
    component: () => import('../views/MovieDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router