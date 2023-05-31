<script setup>
import { ref } from 'vue';
import { db } from '../firebase/index'
import { collection , doc , addDoc , setDoc } from 'firebase/firestore'




const email = ref('')

async function handleSub() {
  

  const userEmail = {
    email: email.value,
    timestamp: new Date()
  };

  try {
        
    const docRef = await addDoc(collection(db,'subs'),userEmail)
    console.log('Email added successfully with ID: ', docRef.id);
    alert('You are earn To 20% Offers Coupons')
    email.value = ""
    
  } catch (error) {
    console.error('Error adding email: ', error);
    alert('Error adding email: ', error);
  }
}
  

   

</script>
<template>
    <div class="w-full bg-green-700 h-52">
        <div>
            <h2 class="p-8 text-base font-black text-white md:text-3xl">Do not miss out on personalised offers, discounts and coupons!</h2>
            <div class="flex justify-center gap-7">
                <input type="text"  class=" w-52 md:w-[550px] h-5 md:h-10 rounded-none text-xl pl-5 border-none" v-model="email"/>
                <button class="w-28 md:w-[200px] bg-white font-black text-base md:text-xl rounded-md hover:bg-slate-200" @click="handleSub">Subcribe</button>
                
            </div>
        </div>
    </div>
</template>