<!-- <script setup>
import BannerImage from "../assets/Banner.png";

</script>
<template>
    <div class="">
        <img :src="BannerImage" class="  h-full md:h-[60vh] w-full object-fill"/>
    </div>
</template> -->

<script setup></script>

<template>
  <n-carousel show-arrow>
    <img
      class="w-full md:h-[440px] h-[240px] object-cover"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    />
    <img
      class="w-full md:h-[440px] h-[240px] object-cover"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    />
    <img
      class="w-full md:h-[440px] h-[240px] object-cover"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    />
    <img
      class="w-full md:h-[440px] h-[240px] object-cover"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    />
  </n-carousel>
</template>

<style scoped>
/* .carousel-img {
    width: 100%;
    height: 540px;
    object-fit: cover;
  } */
</style>
