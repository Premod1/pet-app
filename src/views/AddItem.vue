<script setup>
import console from 'console';
import { ref } from 'vue';

const itemName = ref('')
const itemPrice = ref('')
const itemImage = ref('')

function handleAdd() {
  const itemDetails = {
    itemName: itemName.value,
    itemPrice: itemPrice.value,
    itemImage: itemImage.value
  }

  console.log(itemDetails)
}

</script>
<template>
    <div class="flex flex-col items-center justify-center gap-10">
        <h1 class="text-2xl font-black">Add Item</h1>
        <div class="bg-slate-300 w-[500px] h-[400px] p-10">
            <h2>Enter Item Name</h2>
            <n-input size="large" round placeholder="Enter Item Name" v-model="itemName" />
            <h2>Enter Item Price</h2>
            <n-input size="large" round placeholder="Enter Item Price" type="number" v-model="itemPrice"  />
            <br/>
            <br/>
            <n-upload v-model="itemImage"
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :headers="{
      'naive-info': 'hello!'
    }"
    :data="{
      'naive-data': 'cool! naive!'
    }"
  >
    <n-button class="bg-blue-500">Upload File</n-button>
  </n-upload>
            <br/>
            <br/>
            <button class="w-full h-10 text-xl font-black text-white bg-green-700 " @click="handleAdd()">Add</button>
        </div>
    </div>
</template>