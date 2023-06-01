<script setup>

import { useRouter } from "vue-router";


const router = useRouter();



function Additem() {
  router.push("/dashboard/add-item");
}

//subscribe gmail getting step


// add to items get step



</script>

<template>
  <div>
    <div class="flex items-center justify-between bg-slate-400">
      <h1 class="p-2 text-base font-black md:pl-6 md:text-3xl">Admin Dashboard</h1>
      <div class="flex gap-1 p-2 md:gap-6 md:p-7">
        <button
          class="h-10 font-black text-white bg-red-500 rounded-lg w-17 md:w-20 hover:bg-red-600"
          @click="$store.dispatch('logout')"
        >
          Log Out
        </button>
        <button  class="w-20 h-10 font-black text-white bg-blue-800 rounded-lg md:w-28 hover:bg-blue-950"><a href="/register">REG</a></button>
        <button
          class="w-20 h-10 font-black text-white bg-blue-800 rounded-lg hover:bg-blue-950"
          @click="Additem"
        >
          Add Item
        </button>
      </div>
    </div>
    <RouterView />
  </div>
</template>
