<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const login_form = ref({});
const register_form = ref({});
const store = useStore();

const login = () => {
    store.dispatch('login', login_form.value)
    
}

</script>
<template>
  <div class="w-full h-[100vh] pb-10 bg-gray-400">
    <h1
      class="flex justify-center pt-40 text-center text-yellow-50 text-[40px] font-black pb-16"
    >
      Login
    </h1>
    <div class="flex flex-col items-center justify-center gap-7">
      <input
        type="email"
        v-model="login_form.email"
        placeholder="Enter email"
        class="w-[320px] md:w-[550px] h-12"
      />
      <input
        type="password"
        placeholder="password"
        v-model="login_form.password"
        class="w-[320px] md:w-[550px] h-12"
      />
      <button
        class="text-lg font-black text-white bg-green-900 cursor-pointer w-36 h-11 hover:bg-green-800"
        @click="login()"
      >
        Login
      </button>
      <h1>need an account? <a href="/register">Register Here</a></h1>
    </div>
  </div>
</template>
