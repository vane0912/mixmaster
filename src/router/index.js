import { createRouter, createWebHistory } from 'vue-router'
import homepage from '@/views/homepage.vue'
import nonAlcoholic from '../views/Non-alcoholic.vue'
import Alcoholic from '../views/Alcoholic.vue'
import DrinkGenerator from '../views/Drink-generator.vue'
import SearchDrink from '../views/Search-drink.vue'
import searchResults from '../views/searchResults.vue'
import selectedDrink from '../views/selectedDrink.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homepage
  },
  {
    path: '/Non-alcoholic',
    name: 'Non-alcoholic',
    component: nonAlcoholic
  },
  {
    path: '/Alcoholic',
    name: 'Alcoholic',
    component: Alcoholic
  },
  {
    path: '/Drink-Generator',
    name: 'Drink-Generator',
    component: DrinkGenerator
  },
  {
    path: '/find-Drink',
    name: 'find-Drink',
    component: SearchDrink
  },
  {
    path:'/searchResults/:id',
    name: 'searchResults',
    component: searchResults
  },
  {
    path:'/:drinkName',
    name: 'selected-drink',
    component: selectedDrink
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
