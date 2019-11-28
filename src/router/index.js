import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticlePage from '../views/ArticlePage'
import UserPage from '../views/UserPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    name: 'article',
    path: '/article/:id',
    component: ArticlePage
  },
  {
    name: 'user_info',
    path: '/user_info/:name',
    component: UserPage
  }
]

const router = new VueRouter({
  routes
})

export default router


