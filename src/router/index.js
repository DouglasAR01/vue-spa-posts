import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import PostView from '../pages/PostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView
    }
  ]
})

export default router
