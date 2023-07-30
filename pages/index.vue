<template>
    <div>
        <HeroSection />
        <div class="relative overflow-hidden flex flex-col">
            <SecondSection class="z-0"/>
            <ThirdSection class="z-0"/>
            <FourthSection class="z-0"/>
            <img class="z-10 hidden md:block opacity-70 absolute -top-36 left-[86%] xl:left-auto xl:right-0" 
                src="/images/home/home-background-1.svg" alt="">
        </div>
        <div class="relative overflow-hidden flex flex-col">
            <FifthSection />
            <SixthSection />
            <img class="z-10 hidden md:block opacity-70 absolute top-20 right-[84%] xl:right-auto xl:left-0" 
                src="/images/home/home-background-2.svg" alt="">
        </div>
        <SeventhSection />
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/home/HeroSection.vue";
import SecondSection from "@/components/partials/home/SecondSection.vue";
import ThirdSection from "@/components/partials/home/ThirdSection.vue";
import FourthSection from "@/components/partials/home/FourthSection.vue";
import FifthSection from "@/components/partials/home/FifthSection.vue";
import SixthSection from "@/components/partials/home/SixthSection.vue";
import SeventhSection from "@/components/partials/home/SeventhSection.vue";

//seo 
useSeoMeta({
    title: "Memòria 2022 - Reimaginar la fundació",
    description: "Memòria 2022 Fundació Catalunya La Pedrera - Reimaginar la Fundació",
})
</script>