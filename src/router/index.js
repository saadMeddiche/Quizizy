import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InformationView from '../views/InformationView.vue'
import QuestionsView from '../views/QuestionsView.vue'
import ResultsView from '../views/ResultsView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  }
  ,
  {
    path: '/informations',
    name: 'InformationView',
    component: InformationView
  }
  ,
  {
    path: '/questions',
    name: 'QuestionsView',
    component: QuestionsView
  }
  ,
  {
    path: '/results',
    name: 'ResultsView',
    component: ResultsView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
