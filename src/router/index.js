import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import Departement from '../views/Departement'
import Employe from '../views/Employe'
import Role from '../views/Role'



const routes = [
  {path: '/',name: 'Home',component: Home},
  { path: '/departement', name: 'departement', component: Departement},
  { path: '/employes', name: 'employes', component: Employe},
  { path: '/role', name: 'role', component: Role},
  {
    path: '/about',
    name: 'About',
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
