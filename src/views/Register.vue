<script setup>
import { useStore } from "vuex";
import { ref } from "vue";


const register_form = ref({});
const store = useStore();


const register = () => {
    store.dispatch('register', register_form.value)
}
</script>
<template>
  <div class="w-full h-[100vh] pb-10 bg-gray-600">
    <h1
      class="flex justify-center pt-40 text-center text-yellow-50 text-[40px] font-black pb-16"
    >
      Register
    </h1>
    <div class="flex flex-col items-center justify-center gap-7">
      <input
        type="email"
        placeholder="Enter email"
        v-model="register_form.email"
        class="w-[320px] md:w-[550px] h-12 text-xl pl-5 border-none tracking-wide"
      />
      <input
        type="password"
        placeholder="password"
        v-model="register_form.password"
        class="w-[320px] md:w-[550px] h-12  text-xl pl-5 border-none"
      />
      <button
        class="text-lg font-black text-white bg-green-900 cursor-pointer w-36 h-11 hover:bg-green-800"
        @click="register()"
      >
        Register Now
      </button>
    </div>
  </div>
</template>
