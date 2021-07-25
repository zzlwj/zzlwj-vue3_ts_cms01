import {createRouter,createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'  //表示此处导入的是个类型

const routes:RouteRecordRaw[]=[
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:()=>import('@/views/login/login.vue')
  },
  {
    path:'/main',
    component:()=>import('@/views/main/main.vue')
  }
]

const router=createRouter({
  routes,
  history:createWebHashHistory()
})

export default router