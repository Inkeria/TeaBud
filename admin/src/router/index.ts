import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    children:[
      {name:'home', path: '/', component: HomeView}
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
