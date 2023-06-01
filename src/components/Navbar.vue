<script setup>
import { useRouter } from 'vue-router';;
const router = useRouter();

function handleLogin() {
    router.push('/login')
    
}
function handleShop() {
    var divElement = document.getElementById('productList')
    divElement.scrollIntoView({behavior: 'smooth'})
}
function handleAbout() {
    var divElement = document.getElementById('about')
    divElement.scrollIntoView({behavior: 'smooth'})
}
function handleContact() {
    var divElement = document.getElementById('contact')
    divElement.scrollIntoView({behavior: 'smooth'})
}

</script>
<template>
    <div class="flex items-center justify-between p-4 pt-10 pb-10 bg-white">
        <h1 class="pl-4 text-base font-black md:text-4xl">Jack Pet</h1>
        <div class="flex gap-5 md:gap-20">
            <h2 @click="handleShop" class="cursor-pointer hover:text-green-500">Shop</h2>
            <h2 @click="handleAbout" class="cursor-pointer hover:text-green-500">About</h2>
            <h2 @click="handleContact" class="text-base cursor-pointer hover:text-green-500">Contact</h2>
        </div>
        <button class="w-20 h-10 font-black text-white bg-blue-800 rounded-lg hover:bg-blue-950" @click="handleLogin">Login</button>
        <RouterView/>
    </div>
    
</template>