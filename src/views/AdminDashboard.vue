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
      <h1 class="pl-6 text-base font-black md:text-3xl">Admin Dashboard</h1>
      <div class="flex gap-6 p-7">
        <button
          class="w-20 h-10 font-black text-white bg-red-500 rounded-lg hover:bg-red-600"
          @click="$store.dispatch('logout')"
        >
          Log Out
        </button>
        <button  class="h-10 font-black text-white bg-blue-800 rounded-lg w-28 hover:bg-blue-950"><a href="/register">Register Here</a></button>
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
