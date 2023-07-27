<template>
    <div>
        <HeroSection />
       <div  class="relative overflow-hidden">
         <FirstSection />
          <img class="z-10 hidden md:block opacity-70 absolute top-48 left-[86%] xl:left-auto xl:right-0" 
                src="/images/alimentacio/bg-vector-1.svg" alt="">
       </div>
        <div class="relative overflow-hidden">
            <SecondSection />
            <img class="z-10 hidden md:block opacity-70 absolute top-20 right-[84%] xl:right-auto xl:left-0" 
                src="/images/alimentacio/bg-vector-2.svg" alt="">
        </div>
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/alimentacio/HeroSection.vue";
import FirstSection from "@/components/partials/alimentacio/FirstSection.vue";
import SecondSection from "@/components/partials/alimentacio/SecondSection.vue";
</script>