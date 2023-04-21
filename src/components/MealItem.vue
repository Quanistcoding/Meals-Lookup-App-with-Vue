<template>
    <div class = "bg-white shadow-lg rounded-xl pb-2">
            <router-link :to = "{name:'mealDetails',params:{id:meal.idMeal}}">
                <img :src = "meal.strMealThumb" :alt = "meal.strMeal" class="rounded-t-xl w-full h-36 object-cover">
            </router-link>            
            <div class="p-3">
            <h3 class = "font-bold">{{ meal.strMeal }}</h3> 
                <p class="mb-4">{{meal.strInstructions ? meal.strInstructions.substring(0, 150) + '...': ''}}</p>
                <YoutubeButton :href ="meal.strYoutube" v-if = "meal.strYoutube"/>
            </div>
        </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue';

const props = defineProps({
    meal:Object
})



</script>