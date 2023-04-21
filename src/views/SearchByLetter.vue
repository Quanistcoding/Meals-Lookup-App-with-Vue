<template>
    <div>
        <div class = "flex gap-2 justify-center my-2">
            <button :key = "letter" v-for = "letter of letters.split('')" @click = "setCurrentLetter(letter)"
                :class = "{'font-bold':currentLetter == letter,'text-red-500':currentLetter == letter}"
            >
                <span>{{letter}}</span>
            </button>
         </div>
    </div>
    <meals :meals="meals"/>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import store from '../store';
import Meals from '../components/Meals.vue'


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const currentLetter = computed(()=>store.state.searchLetter);
const meals = computed(()=>store.state.mealsByLetter);

function setCurrentLetter(letter){
    store.dispatch('setSearchLetter',letter)
}
</script>