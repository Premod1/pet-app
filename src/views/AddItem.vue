<script setup>
import { NInput } from "naive-ui";
import {  reactive } from "vue";
import { db } from "../firebase/index";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  getStorage,
  ref as storageRef, uploadBytes
} from "firebase/firestore";

const userData = reactive({
  itemName: "",
  itemPrice: "",
  file: "",
});

async function handleAdd() {
  console.log(userData);
  try {
    const fileData = await readFileAsDataURL(userData.file);
    const newItemData = {
      itemName: userData.itemName,
      itemPrice: userData.itemPrice,
      file: fileData,
    };
    const docRef = await addDoc(collection(db, 'items'), newItemData);
    console.log('added successfully', docRef);
    userData.itemName = " ";
    userData.itemPrice = " ";
    userData.file = " ";
  } catch (error) {
    console.log('error', error);
  }
}

async function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
function handleFileChange(event) {
  const file = event.target.files[0];
  console.log(file);
  userData.file = file;
  
  
}
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <h1 class="text-2xl font-black">Add Item</h1>
    <div class="bg-slate-300 w-[500px] h-[400px] p-10">
      <h2>Enter Item Name</h2>
      <n-input
        size="large"
        round
        placeholder="Enter Item Name"
        v-model:value="userData.itemName"
      />
      <h2>Enter Item Price</h2>
      <n-input
        size="large"
        round
        placeholder="Enter Item Price"
        type="number"
        v-model:value="userData.itemPrice"
      />
      <br />
      <br />
      <!-- <n-upload
        action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
        :headers="{
          'naive-info': 'hello!',
        }"
        :data="{
          'naive-data': 'cool! naive!',
        }"
        
      >
        <n-button class="bg-blue-500">Upload File</n-button>
      </n-upload> -->
      <input type="file" v-on:change="handleFileChange" />

      <br />
      <br />
      <button
        class="w-full h-10 text-xl font-black text-white bg-green-700"
        @click="handleAdd"
      >
        Add
      </button>
    </div>
  </div>
</template>
