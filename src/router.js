import { createRouter,createWebHistory  } from "vue-router";
import Home from './views/Home.vue'
import SearchByLetter from './views/SearchByLetter.vue'
import Ingredients from './views/Ingredients.vue'
import PageNotFOund from './views/PageNotFOund.vue'
import MealDetails from './views/MealDetails.vue'


const routes = [
        { 
            path: '/', 
            name: 'home', 
            component: Home 
        },
        { 
            path: '/searchByLetter', 
            name: 'searchByLetter', 
            component: SearchByLetter 
        },
        { 
            path: '/ingredients', 
            name: 'ingredients', 
            component: Ingredients 
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'pageNotFOund', 
            component: PageNotFOund 
        },
        {
            path: '/meal/:id',
            name: 'mealDetails',
            component: MealDetails
        },
  ]


  const router = createRouter({
    history: createWebHistory(),
    routes
});

  export default router;