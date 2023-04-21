import { createRouter,createWebHistory  } from "vue-router";
import Home from './views/Home.vue'
import SearchByLetter from './views/SearchByLetter.vue'
import Ingredients from './views/Ingredients.vue'
import PageNotFOund from './views/PageNotFOund.vue'
import MealDetails from './views/MealDetails.vue'
import SearchByIngredient from './views/SearchByIngredient.vue'


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
            path: '/seatchByIngredient/:ingredient', 
            name: 'seatchByIngredient', 
            component: SearchByIngredient 
        },
        {
            path: '/meal/:id',
            name: 'mealDetails',
            component: MealDetails
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'pageNotFOund', 
            component: PageNotFOund 
        },
       
  ]


  const router = createRouter({
    history: createWebHistory(),
    routes
});

  export default router;