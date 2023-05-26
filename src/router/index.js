import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },



  {
    path: '/login',
    name: 'login',
    component: function () {
      return import( '../views/Login.vue')
    },
  
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: function () {
      return import( '../views/AdminDashboard.vue') 
    },
    children: [
      {
        path: '/dashboard/add-item',
        name: 'add-item',
        component: function () {
          return import('../views/AddItem.vue')
        }
      }
    ]
   
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/Register.vue')
    },
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to , from , next ) => {
  if (to.path === '/' && auth.currentUser) {
    next();
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/login');
    return;
  }
  next()
})

export default router
