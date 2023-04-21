<template>
    <div class="max-w-[800px] mx-auto p-8">       
        <h1 class="text-5xl font-blod mb-5">{{meal.strMeal}}</h1>
        <img class="max-w-100" :src = "meal.strMealThumb" :alt ="meal.strMeal">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div><strong class = "font-blod">Category: </strong> {{ meal.strCategory }}</div>
            <div><strong class = "font-blod">Area: </strong>Area: {{ meal.strArea }}</div>
            <div><strong class = "font-blod">Tags; </strong>Tags: {{ meal.strTags }}</div>
        </div>

        <div class = "my-3">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul>
                    <template v-for="(item,index) of new Array(20)">
                        <li  v-if = "meal['strIngredient' + (index+1)]">
                            {{index+1}}. {{ meal['strIngredient' + (index+1)] }}
                        </li>
                    </template>
                    
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(item,index) of new Array(20)">
                        <li  v-if = "meal['strMeasure' + (index+1)] && meal['strMeasure' + (index+1)] != ' '">
                            {{index+1}}. {{ meal['strMeasure' + (index+1)] }}
                        </li>
                    </template>
                    
                </ul>
            </div>
        </div>
        <div class = "mt-3">
             <YoutubeButton :href = "meal.strYoutube">video
            </YoutubeButton>    
        </div>
       

    </div>

</template>

<script setup>
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(()=>{
    axiosClient.get('lookup.php?i=' + route.params.id).then(({data})=>{
        meal.value = data.meals ? data.meals[0] : {};
    });
})

</script>