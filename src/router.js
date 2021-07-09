import { createRouter, createWebHistory } from 'vue-router'
import { state } from '@/hooks/useAuth'


import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import Post from "./pages/Post.vue";
import AddPost from "./pages/AddPost.vue";
import Profile from "./pages/Profile.vue";
import Signin from "./pages/Signin.vue";
import Signup from "./pages/Signup.vue";



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/posts/:postId",
      name: "Post",
      component: Post,
      props: true
    },
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPost
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin,
      meta: { layout: "no" },
    },
    {
      path: "/Signup",
      name: "Signup",
      component: Signup,
      meta: { layout: "no" },
    }
  ]
})

router.beforeEach((to, from, next) => {

  console.log(state.authenticating)


  if ( to.name !== 'Signin' && to.name !== 'Signup' && !state.authenticating ) {

    next({ name: 'Signin' })
  }

  else next()
})
export default router