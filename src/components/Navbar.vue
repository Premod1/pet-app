<script setup>
import { useRouter } from 'vue-router';;
const router = useRouter();

function handleLogin() {
    router.push('/login')
    
}

</script>
<template>
    <div class="flex items-center justify-between p-4 bg-gray-400">
        <h1 class="pl-4 text-xl font-black md:text-4xl">Jack Pet</h1>
        <button class="w-20 h-10 font-black text-white bg-blue-800 rounded-lg hover:bg-blue-950" @click="handleLogin">Login</button>
        <RouterView/>
    </div>
    
</template>