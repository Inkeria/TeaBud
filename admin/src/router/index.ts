import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { component } from 'vue/types/umd'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import ListView from '../views/videos/ListView.vue'
import VideoEdit from '../views/videos/VideoEdit.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: MainView,
    children: [
      {name:'home', path:'/', component: HomeView},
      {name:'list', path:'videos/list', component: ListView},
      {name:'edit', path:'videos/edit/:id', component: VideoEdit, props: true},
      {name:'create', path:'videos/create', component: VideoEdit},
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
