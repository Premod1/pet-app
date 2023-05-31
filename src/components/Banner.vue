<!-- <script setup>
import BannerImage from "../assets/Banner.png";


</script>
<template>
    <div class="">
        <img :src="BannerImage" class="  h-full md:h-[60vh] w-full object-fill"/>
    </div>
</template> -->

<script setup>
import Banner1 from "../assets/Banner1.jpg";
import Banner2 from "../assets/Banner2.jpg";
import Banner3 from "../assets/Banner3.jpg";
import BannerImage from "../assets/Banner.png";

</script>

<template>
  <n-carousel show-arrow>
    <img
      class="w-full md:h-[740px] h-[540px] object-cover"
      :src="Banner3"
    />
    <img
      class="w-full md:h-[740px] h-[240px] object-cover"
      :src="Banner2"
    />
    <img
      class="w-full md:h-[740px] h-[240px] object-cover"
      :src="Banner1"
    />
    <img
      class="w-full md:h-[740px] h-[240px] object-cover"
      :src="BannerImage"
    />
  </n-carousel>
</template>

<style scoped>

</style>
