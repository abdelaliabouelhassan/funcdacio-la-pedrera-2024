<template>
    <div>
        <HeroSection />
       <div  class="relative overflow-hidden">
         <FirstSection />
          <img class="z-10 hidden md:block opacity-70 absolute top-48 left-[86%] xl:left-auto xl:right-0" 
                src="/images/alimentacio/bg-vector-1.svg" alt="">
       </div>
        <div class="relative">
            <SecondSection />
            <img class="z-10 hidden md:block opacity-70 absolute top-[50rem] right-[84%] xl:right-auto xl:left-0" 
                src="/images/alimentacio/bg-vector-2.svg" alt="">
        </div>
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/envelliment-digne/HeroSection.vue";
import FirstSection from "@/components/partials/envelliment-digne/FirstSection.vue";
import SecondSection from "@/components/partials/envelliment-digne/SecondSection.vue";
</script>