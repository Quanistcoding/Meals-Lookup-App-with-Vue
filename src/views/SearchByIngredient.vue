<template>
    <div class="p-8">
        <h1 class = "text-4xl font-bold mb-4">Search By Ingredient: {{ route.params.ingredient }}</h1>
        <meals :meals="meals"/>
    </div>
</template>
<script setup>
import axiosClient from '../axiosClient'
import { onMounted, ref } from 'vue';
import Meals from '../components/Meals.vue'
import { useRoute } from 'vue-router';
import store from '../store';

const route = useRoute();
const meals = ref([]);

onMounted(()=>{
    store.dispatch('setIsLoading',true);
    axiosClient.get("filter.php?i=" + route.params.ingredient).then(({data})=>{
        meals.value = data.meals;
        store.dispatch('setIsLoading',false);
    })
})

</script>