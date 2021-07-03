import { createRouter, createWebHistory } from 'vue-router'

import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import AddPost from "./pages/AddPost.vue";
import Profile from "./pages/Profile.vue";
import Signin from "./pages/Signin.vue";
import Signup from "./pages/Signup.vue";

export default createRouter({
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