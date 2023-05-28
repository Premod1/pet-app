<script setup>
import { onMounted, ref } from "vue";
import { collection, query, getDocs ,deleteDoc ,doc } from "firebase/firestore";
import { db } from "../firebase/index";
import { useRouter } from "vue-router";
import { async } from "@firebase/util";

const router = useRouter();

const Subs = ref([]);
const Items = ref([]);

//delete
async function subDelete(id) {
    console.log(id)
    await deleteDoc(doc(db, "subs", id));
    await getData();
}
async function handleDelete(id) {
    console.log(id);
    await deleteDoc(doc(db, "items", id));

    await getItem();
}

//subscribe gmail getting step
async function getData() {
  const q = query(collection(db, "subs"));

  const querySnapshot = await getDocs(q);
  Subs.value = []
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    Subs.value.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  console.log(Subs.value);
}

// add to items get step

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
  await getData();
  await getItem();
});
</script>
<template>
  <div>
    <div class="flex">
      <div class="flex-none w-[550px] ml-20 mr-20">
        <h1 class="flex justify-center pb-10 text-2xl font-black">
          Our subscribes....
        </h1>

        <div class="w-[550px]">
          <table>
            <thead>
              <tr>
                <th>subscribes mail</th>
                <th>Action</th>
              </tr>
              <tr v-for="(value, key) in Subs" :key="key">
                <td>{{ value.data.email }}</td>
                <td>
                  <button class="w-20 bg-red-500 rounded-lg h-11" @click="subDelete(value.id)">
                    Delete
                  </button>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <div class="grow">
        <h1 class="flex justify-center pb-10 text-2xl font-black">
          Our Items....
        </h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
            <tr v-for="(item, k) in Items" :key="k">
              <td>
                <img :src="item.data.file" alt="" class="w-32" />
              </td>

              <td>
                {{ item.data.itemName }}
              </td>
              <td>
                {{ item.data.itemPrice }}
              </td>

              <td>
                <button class="w-20 bg-red-500 rounded-lg h-11" @click="handleDelete(item.id)">Delete</button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
table {
  border-collapse: collapse;
  width: 90%;
}

th,
td {
  padding: 8px;

  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>
