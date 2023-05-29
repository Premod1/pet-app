<script setup>
import { onMounted, ref } from "vue";
import { collection, query, getDocs ,deleteDoc ,doc } from "firebase/firestore";
import { db } from "../firebase/index";

const Items = ref([])
async function getItem() {
  const q = query(collection(db, "items"));

  const querySnapshot = await getDocs(q);

  Items.value = []
  querySnapshot.forEach((item) => {
    console.log(item.id, " => ", item.data());
    Items.value.push({
      id: item.id,
      data: item.data(),
    });
  });
  console.log(Items.value)
}

onMounted(async () => {
  
  await getItem();
});

</script>
<template>
    <div class="grid gap-4 p-5 grid-col-1 md:grid-cols-5">
      <div v-for="(item, k) in Items" :key="k">
        <img
          :src="item.data.file" class="object-fill w-64 h-64"
        />
        <div class="flex flex-col items-center justify-center">
          <h3 class="font-normal">{{ item.data.itemName  }}</h3>
        <p>Price : {{ item.data.itemPrice }}</p>
        </div>
      </div>
     
      </div>
</template>