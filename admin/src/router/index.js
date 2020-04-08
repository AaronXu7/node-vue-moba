import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login/Login'),
    meta:{ isPublic:true }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Main.vue'),
    children:[
      {
        path:'/categories/create',
        name:'CategoriesCreate',
        component: () => import('../views/Categories/CategoriesCreate')
      },
      {
        path:'/categories/edit/:id',
        name:'CategoriesCreate',
        props:true,
        component: () => import('../views/Categories/CategoriesCreate')
      },
      {
        path:'/categories/list',
        name:'CategoriesList',
        component: () => import('../views/Categories/CategoriesList')
      },
      {
        path:'/items/create',
        name:'ItemsCreate',
        component: () => import('../views/Items/ItemsCreate')
      },
      {
        path:'/items/edit/:id',
        name:'ItemsCreate',
        props:true,
        component: () => import('../views/Items/ItemsCreate')
      },
      {
        path:'/items/list',
        name:'ItemsList',
        component: () => import('../views/Items/ItemsList')
      },
      {
        path:'/Heroes/create',
        name:'HeroesCreate',
        component: () => import('../views/Heroes/HeroesCreate')
      },
      {
        path:'/Heroes/edit/:id',
        name:'HeroesCreate',
        props:true,
        component: () => import('../views/Heroes/HeroesCreate')
      },
      {
        path:'/Heroes/list',
        name:'HeroesList',
        component: () => import('../views/Heroes/HeroesList')
      },
      {
        path:'/Articles/create',
        name:'ArticlesCreate',
        component: () => import('../views/Articles/ArticlesCreate')
      },
      {
        path:'/Articles/edit/:id',
        name:'ArticlesCreate',
        props:true,
        component: () => import('../views/Articles/ArticlesCreate')
      },
      {
        path:'/Articles/list',
        name:'ArticlesList',
        component: () => import('../views/Articles/ArticlesList')
      },
      {
        path:'/Ads/create',
        name:'AdsCreate',
        component: () => import('../views/Ads/AdsCreate')
      },
      {
        path:'/Ads/edit/:id',
        name:'AdsCreate',
        props:true,
        component: () => import('../views/Ads/AdsCreate')
      },
      {
        path:'/Ads/list',
        name:'AdsList',
        component: () => import('../views/Ads/AdsList')
      },
      {
        path:'/Users/create',
        name:'UsersCreate',
        component: () => import('../views/Users/UsersCreate')
      },
      {
        path:'/Users/edit/:id',
        name:'UsersCreate',
        props:true,
        component: () => import('../views/Users/UsersCreate')
      },
      {
        path:'/Users/list',
        name:'UsersList',
        component: () => import('../views/Users/UsersList')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})

export default router
