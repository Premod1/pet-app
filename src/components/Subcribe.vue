<script setup>
import { ref } from 'vue';
import { db } from '../firebase/index'
import { collection , doc , addDoc , setDoc } from 'firebase/firestore'




const email = ref('')

async function handleSub() {
  console.log("done");

  const userEmail = {
    email: email.value,
    timestamp: new Date()
  };

  try {
        
    const docRef = await addDoc(collection(db,'subs'),userEmail)
    console.log('Email added successfully with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding email: ', error);
  }
}
  

   

</script>
<template>
    <div class="w-full bg-green-700 h-52">
        <div>
            <h2 class="p-8 text-3xl font-black text-white">Do not miss out on personalised offers, discounts and coupons!</h2>
            <div class="flex justify-center gap-7">
                <input type="text"  class="w-[550px] h-10 rounded-none" v-model="email"/>
                <button class="w-[200px] bg-white font-black text-xl rounded-md hover:bg-slate-200" @click="handleSub">Subcribe</button>
                
            </div>
        </div>
    </div>
</template>