<template>
    <div class = "grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for = "meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if = "!meals || meals.length == 0" class = "text-center">No Meals Found</div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue'

const porps = defineProps({
    meals:Array
})

</script>