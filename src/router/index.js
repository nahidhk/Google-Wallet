import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu.vue'
import Credit from '../components/Credit.vue'
import History from '../components/History.vue'
import Monthly from '../components/Monthly.vue'
import GSheet from '../components/GSheet.vue'

const routes = [
  { path: '/', component: Menu },          // Default Menu
  { path: '/credit', component: Credit },  // Credit Page
  { path: '/history', component: History },
  { path: '/monthly', component: Monthly },
  { path: '/gsheet', component: GSheet }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
