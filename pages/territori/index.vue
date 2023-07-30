<template>
    <div>
        <HeroSection />
        <div  class="relative overflow-hidden">
            <FirstSection />
            <img class="z-10 hidden md:block opacity-70 absolute top-48 left-[86%] xl:left-auto xl:right-0" 
                src="/images/territori/bg-vector-1.svg" alt="">
        </div>
        <div class="relative">
            <SecondSection />
            <img class="z-10 hidden md:block opacity-70 absolute -top-32 right-[84%] xl:right-auto xl:left-0" 
                src="/images/territori/bg-vector-2.svg" alt="">
        </div>
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/territori/HeroSection.vue";
import FirstSection from "@/components/partials/territori/FirstSection.vue";
import SecondSection from "@/components/partials/territori/SecondSection.vue";
useSeoMeta({
    title: "Memòria 2022 - SOSTENIBILITAT I TERRITORI",
    description: "A la Fundació Catalunya La Pedrera volem abordar els grans reptes ambientals als quals s’enfronta la societat, com són el canvi climàtic i la crisi energètica, que posen en perill el benestar, especialment, de les generacions futures. Plantegem accions que contribueixin a revertir la situació actual a través de la gestió forestal, les energies renovables, la conservació de la biodiversitat.",
})
</script>