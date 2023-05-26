<script setup>


</script>
<template>
    <div class="flex flex-col items-center justify-center gap-10">
        <h1 class="text-2xl font-black">Add Item</h1>
        <div class="bg-slate-300 w-[500px] h-[400px] p-10">
            <h2>Enter Item Name</h2>
            <n-input size="large" round placeholder="Enter Item Name" />
            <h2>Enter Item Price</h2>
            <n-input size="large" round placeholder="Enter Item Price" type="number"  />
            <br/>
            <br/>
            <n-upload
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
            <button class="w-full h-10 text-xl font-black text-white bg-green-700 ">Add</button>
        </div>
    </div>
</template>