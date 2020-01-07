import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bookshelfRouter from './bookshelf'
import bookstoreRouter from './bookstore'
import discoverRouter from './discover'
import mineRouter from './mine'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    bookshelfRouter,
    bookstoreRouter,
    discoverRouter,
    mineRouter,
    {
      path : '/*',
      redirect : '/bookshelf'
    }
  ]
})

export default router
