<template>
    <LetterPicker />
    <meals :meals="meals"/>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import store from '../store';
import Meals from '../components/Meals.vue'
import LetterPicker from '../components/LetterPicker.vue'


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const currentLetter = computed(()=>store.state.searchLetter);
const meals = computed(()=>store.state.mealsByLetter);


</script>