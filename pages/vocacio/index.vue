<template>
    <div>
        <HeroSection />
        <div  class="relative overflow-hidden">
            <SecondSection />
            <img class="z-10 hidden md:block mix-blend-multiply opacity-70 absolute bottom-0 left-[86%] xl:left-auto xl:right-0" 
                src="/images/vocacio/bg-vector-1.svg" alt="">
        </div>
            <ThirdSection />
        <div class="relative">
            <FourthSection />
            <img class="z-10 hidden md:block mix-blend-multiply opacity-70 absolute bottom-80 right-[84%] xl:right-auto xl:left-0" 
                    src="/images/vocacio/bg-vector-2.svg" alt="">
            <img class="z-10 hidden md:block opacity-70 absolute top-32 left-[86%] xl:left-auto xl:right-0" 
                src="/images/vocacio/bg-vector-3.svg" alt="">

        </div>
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EightSection />
        <div class="relative">
            <NinthSection />
            <img class="z-10 hidden md:block mix-blend-multiply opacity-70 absolute -top-32 right-[84%] xl:right-auto xl:left-0" 
                    src="/images/vocacio/bg-vector-4.svg" alt="">
            
        </div>
        <div class="relative">
            <TenthSection />
            <img class="z-10 hidden md:block mix-blend-multiply opacity-70 absolute top-32 left-[86%] xl:left-auto xl:right-0" 
                        src="/images/vocacio/bg-vector-5.svg" alt="">
        </div>
        <div class="relative">
            <EleventhSection />
            <img class="z-10 hidden md:block mix-blend-multiply opacity-70 absolute -top-16 right-[84%] xl:right-auto xl:left-0" 
                        src="/images/vocacio/bg-vector-6.svg" alt="">
            
        </div>
        <TwelvethSection />
        <ThirteenthSection />
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/vocacio/HeroSection.vue";
import SecondSection from "@/components/partials/vocacio/SecondSection.vue";
import ThirdSection from "@/components/partials/vocacio/ThirdSection.vue";
import FourthSection from "@/components/partials/vocacio/FourthSection.vue";
import FifthSection from "@/components/partials/vocacio/FifthSection.vue";
import SixthSection from "@/components/partials/vocacio/SixthSection.vue";
import SeventhSection from "@/components/partials/vocacio/SeventhSection.vue";
import EightSection from "@/components/partials/vocacio/EightSection.vue";
import NinthSection from "@/components/partials/vocacio/NinthSection.vue";
import TenthSection from "@/components/partials/vocacio/TenthSection.vue";
import EleventhSection from "@/components/partials/vocacio/EleventhSection.vue";
import TwelvethSection from "@/components/partials/vocacio/TwelvethSection.vue";
import ThirteenthSection from "@/components/partials/vocacio/ThirteenthSection.vue";
useSeoMeta({
    title: "Memòria 2022 - VOCACIÓ I TALENT",
    description: "Impulsem programes per fomentar l’educació i el talent científic i cultural, perquè tots els infants i joves puguin desenvolupar al màxim les seves capacitats, amb igualtat d’oportunitats. Acompanyem els infants i adolescents a assolir l’èxit educatiu. La Fundació Catalunya La Pedrera desenvolupa programes transformadors perquè tothom pugui tenir la millor formació, amb acompanyament educatiu i amb beques que garanteixen la igualtat d’oportunitats. Potenciar l’èxit educatiu és la clau per aconseguir un futur millor per als infants i joves, en el marc d’una societat més solidària que posi les persones al centre.",
})
</script>