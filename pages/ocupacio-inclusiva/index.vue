<template>
    <div>
        <HeroSection />
       <div  class="relative overflow-hidden">
         <FirstSection />
       </div>
        <div class="relative">
            <SecondSection />
            <img class="z-10 hidden md:block opacity-70 absolute top-96 right-[84%] xl:right-auto xl:left-0" 
                src="/images/ocupacio-inclusiva/bg-vector-2.svg" alt="">
                <img class="z-10 hidden md:block opacity-70 absolute top-[35rem] left-[86%] xl:left-auto xl:right-0" 
                src="/images/ocupacio-inclusiva/bg-vector-1.svg" alt="">
        </div>
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/ocupacio-inclusiva/HeroSection.vue";
import FirstSection from "@/components/partials/ocupacio-inclusiva/FirstSection.vue";
import SecondSection from "@/components/partials/ocupacio-inclusiva/SecondSection.vue";
</script>