import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/LoginView.vue'
import Activities from '../views/ActivitiesView.vue'
import ChatView from '../views/ChatView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: Home
  },
  {
    path: '/activities',
    name: 'ActivitiesView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Activities
  },
  {
    path: '/chat',
    name: 'ChatView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ChatView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
