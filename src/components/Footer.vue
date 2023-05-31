<script setup>

function openwhatsapp() {
  window.open('https://web.whatsapp.com/', '+94764686371')
}
</script>
<template>
    <div class="relative z-0 gray-border">
        <div class="max-w-[1000px] text-[#737373] py-[70px] px-5 md:px-[45px] w-[90%] mx-auto">
      <h2 class="pb-5">Contact Us</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 text-[12px] md:text-[13px]">
        <div>
          <div class="pb-[15px]">FAQ</div>
          <div class="pb-[15px]">Investor Relations</div>
          <div class="pb-[15px]">Privacy</div>
          <div class="pb-[15px]">Speed Test</div>
        </div>
        <div>
          <div class="pb-[15px]">Help Center</div>
          <div class="pb-[15px]">Jobs</div>
          <div class="pb-[15px]">Cookie Preferences</div>
          <div class="pb-[15px]">Legal Notices</div>
        </div>
        <div>
          <div class="pb-[15px]">Account</div>
          <div class="pb-[15px]">Ways to Watch</div>
          <div class="pb-[15px]">Corporate Information</div>
          
        </div>
        <div>
          <div class="pb-[15px]">Media Center</div>
          <div class="pb-[15px]">Terms of use</div>
          <div class="pb-[15px]">Contact Us</div>
        </div>
      </div>
      <div class="flex justify-center p-1">
      <button class="w-40 h-10 font-black text-white bg-green-600 rounded-full" @click="openwhatsapp">Whatsapp</button>
    </div>
    </div>
   
   
    </div>
</template>