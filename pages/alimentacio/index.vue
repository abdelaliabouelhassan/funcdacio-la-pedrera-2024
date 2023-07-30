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
useSeoMeta({
    title: "Memòria 2022 - ALIMENTACIÓ PER A LA SALUT",
    description: "A la Fundació Catalunya La Pedrera apostem per l’alimentació saludable, dirigida especialment a aquelles persones que afronten un problema de salut. Per això, sota la direcció científica de la Fundació Alícia (Alimentació i Ciència), promovem projectes alimentaris especialitzats per oferir coneixement i recomanacions sobre el tipus d’alimentació més convenient en cada cas.",
})
</script>