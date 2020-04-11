import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/main/Main'),
    children:[
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/main/Home/Home')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About')
      },
      {
        path: '/hom1',
        name: 'Home1',
        component: () => import('../views/Home1')
      },
      {
        path: '/article/:id',
        name: 'Article',
        props:true,
        component: () => import('../views/main/Article/Article')
      }
    ]
  },
  {
    path:'/hero',
    name:'Hero',
    component: () => import('../views/main/Hero/Hero'),
    children:[
      {
        path: '/hero/detail/:id',
        name: 'HeroDetail',
        props:true,
        component: () => import('../views/main/Hero/HeroDetail/HeroDetail')
      },
      {
        path: '/hero/skins/:id',
        name: 'HeroSkins',
        props:true,
        component: () => import('../views/main/Hero/HeroSkins/HeroSkins')
      },
      {
        path: '/hero/list',
        name: 'HeroList',
        props:true,
        component: () => import('../views/main/Hero/HeroList/HeroList')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
