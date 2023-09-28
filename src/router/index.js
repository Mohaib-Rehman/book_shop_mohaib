/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartPage from "@/views/CartPage.vue"; 
import SignUp from "@/views/SignUp.vue";
import NewsLetter from "@/views/NewsLetter.vue"
import DashBoard from "@/components/DashBoard.vue"
import ProductListing from '@/views/ProductListing.vue';
import ShowCards from "@/views/ShowCards.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
   
  },
  {
    path: '/ShowCards',
    name: 'ShowCards',
    component: ShowCards
   
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
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
  {
    path: "/NewsLetter",
    name: "NewsLetter",
    component: NewsLetter,
  },
  {
    path: "/SignUp",
    name: "signup",
    component: SignUp,
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
