<template>
    <div>
        <HeroSection />
       <div  class="relative overflow-hidden">
         <FirstSection />
          <img class="z-10 hidden md:block opacity-70 mix-blend-multiply absolute top-48 left-[86%] xl:left-auto xl:right-0" 
                src="/images/alimentacio/bg-vector-1.svg" alt="">
       </div>
        <div class="relative">
            <SecondSection />
            <img class="z-10 hidden md:block opacity-70 mix-blend-multiply absolute top-[50rem] right-[84%] xl:right-auto xl:left-0" 
                src="/images/alimentacio/bg-vector-2.svg" alt="">
        </div>
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/envelliment-digne/HeroSection.vue";
import FirstSection from "@/components/partials/envelliment-digne/FirstSection.vue";
import SecondSection from "@/components/partials/envelliment-digne/SecondSection.vue";
useSeoMeta({
    title: "Memòria 2022 - Envelliment digne",
    description: "Moltes persones grans pateixen deteriorament cognitiu i físic que provoca manca d’autonomia, soledat i incomunicació, situacions que minven la seva qualitat de vida. La Fundació Catalunya La Pedrera assumeix el compromís d’estar al costat d’aquestes persones per aconseguir que mantinguin el màxim de temps possible les seves capacitats, millorin el seu estat emocional i, per tant, donant-los a ells i les seves famílies una millor qualitat de vida.",
})
</script>