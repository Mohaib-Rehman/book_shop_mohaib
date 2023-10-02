/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import SignUp from "@/views/SignUp.vue";
import NewsLetter from "@/views/NewsLetter.vue";
import DashBoard from "@/components/DashBoard.vue";
import ProductListing from '@/views/ProductListing.vue';
import ShowCards from "@/views/ShowCards.vue";
import StarRating from "@/components/StarRating.vue";
import AddToCart from "@/components/AddToCart.vue";
import UserDataTable from "@/components/UserDataTable.vue";
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
   
  },
  {
    path: '/ShowCards',
    name: 'ShowCards',
    component: ShowCards
   
  },
  {
    path: '/StarRating',
    name: 'StarRating',
    component: StarRating
   
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component:DashBoard
    
  },
  {
    path: '/ProductListing',
    name: 'ProductListing',
    component:ProductListing
    
  },
 
  
  
  
  {
    path: "/NewsLetter",
    name: "NewsLetter",
    component: NewsLetter,
  },
  {
    path: "/UserDataTable",
    name: "UserDataTable",
    component: UserDataTable ,
  },
  {
    path: "/SignUp",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/AddtoCart",
    name: "AddtoCart",
    component: AddToCart,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/LoginIn',
    name: 'LoginIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginIn.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
