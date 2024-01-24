import { createRouter, createWebHistory } from 'vue-router'
import NovoPost from '../components/NovoPost.vue'
import TheBlogLayout from '../components/TheBlogLayout.vue'
import PostDetails from '../components/PostDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create-post',
      name: 'NovoPost',
      component: NovoPost
    },
    {
      path: '/',
      name: 'home',
      component: TheBlogLayout
    },
    {
      path: '/post/:postId',
      name: 'PostDetails',
      component: PostDetails,
      props: true 
    }
  ]
})

export default router
