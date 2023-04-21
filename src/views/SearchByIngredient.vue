<template>
    <meals :meals="meals"/>
    {{ route.params.ingredient }}

</template>
<script setup>
import axiosClient from '../axiosClient'
import { onMounted, ref } from 'vue';
import Meals from '../components/Meals.vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const meals = ref([]);

onMounted(()=>{
    axiosClient.get("filter.php?i=" + route.params.ingredient).then(({data})=>{
        meals.value = data.meals;
    })
})

</script>