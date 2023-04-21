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
</template>
<script setup>
import { computed } from '@vue/reactivity';
import store from '../store';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const currentLetter = computed(()=>store.state.searchLetter);
function setCurrentLetter(letter){
    store.dispatch('setSearchLetter',letter)
}
</script>