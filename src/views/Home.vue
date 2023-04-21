<template>
    <div class = "p-5">
        <input @change = "setKeyword()" v-model="keyword" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search meals...">
    </div>
    <div>        
       <Meals :meals="meals"/>
    </div>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import store from '../store';
import { onMounted,ref } from 'vue';
import Meals from '../components/Meals.vue'

const keyword = ref('');
const meals = computed(()=>store.state.mealsByName);


function setKeyword(){
   store.dispatch('setKeyword',keyword.value);
}

onMounted(()=>{
    keyword.value = store.state.searchKeyWord;
})

</script>