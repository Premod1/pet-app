<script setup>
import Banner from "@/components/Banner.vue";
import Navbar from "@/components/Navbar.vue";
import Product from "@/components/Product.vue";
import Subcribe from "@/components/Subcribe.vue";
import Footer from "@/components/Footer.vue";
import About from "@/components/About.vue";
</script>
<template>
  <div >
    <Navbar />
    <Banner />
    <div id="productList">
      <Product/>
    </div>
    <div id="about">
      <About/>
    </div>
    
    <Subcribe />
    <div id="contact">
      <Footer />
    </div>
    
    
  </div>
</template>
