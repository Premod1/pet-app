<script setup>
import { onMounted, ref } from "vue";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/index";
import { useRouter } from "vue-router";

const router = useRouter();


function Additem() {
  router.push("/dashboard/add-item");
}

//subscribe gmail getting step
async function getData() {
  const q = query(collection(db, "subs"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
   
  });
}

// add to items get step

async function getItem() {
  const q = query(collection(db, "items"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((item) => {
    console.log(item.id, " => ", item.data());
  });
}

onMounted(() => {
  getData();
  getItem();
});
</script>

<template>
  <div>
    <div class="flex items-center justify-between bg-slate-400">
      <h1 class="pl-6 text-3xl font-black">Admin Dashboard</h1>
      <div class="flex gap-6 p-7">
        <button
          class="w-20 h-10 font-black text-white bg-red-500 rounded-lg hover:bg-red-600"
          @click="$store.dispatch('logout')"
        >
          Log Out
        </button>
        <button
          class="w-20 h-10 font-black text-white bg-blue-800 rounded-lg hover:bg-blue-950"
          @click="Additem"
        >
          Add Item
        </button>
      </div>
    </div>
    <RouterView />
    <h1 class="flex justify-center pb-10 text-2xl font-black">Our subscribes....</h1>
   
      <div class="w-[550px]">
      <table >
        <thead>
          <tr>
            <th>subscribes mail</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>data</td>
            <td><button class="w-20 bg-red-500 rounded-lg h-11">Delete</button></td>
          </tr>

        
        </thead>
      </table>
    </div>
    <div class="pt-28">
      <table >
        <thead>
          <tr>
            <th>subscribes mail</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>data</td>
            <td><button class="w-20 bg-red-500 rounded-lg h-11">Delete</button></td>
          </tr>

        
        </thead>
      </table>
    </div>
   
  
  </div>
</template>
<style scoped>
  table {
            border-collapse: collapse;
            width: 90%;
           
            
        }

        th, td {
            padding: 8px;
            
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
        }
</style>
