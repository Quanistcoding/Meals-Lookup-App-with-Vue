<template>
  <nav>
    <ul class="h-8 bg-blue-200 flex items-center gap-3 pl-2">
        <li>
            <router-link :to = "{name:'home'}" class="text-blue-500 hover:text-blue-800" href="#">Home</router-link>
        </li>
        <li>
            <router-link :to = "{name:'searchByLetter'}" class="text-blue-500 hover:text-blue-800" href="#">Search By Letter</router-link>
        </li>
        <li>
            <router-link :to = "{name:'ingredients'}" class="text-blue-500 hover:text-blue-800" href="#">Ingredients</router-link>
        </li>
    </ul>
  </nav>
</template>