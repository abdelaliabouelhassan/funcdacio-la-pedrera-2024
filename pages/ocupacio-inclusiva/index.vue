<template>
  <div>
    <HeroSection />
    <div class="relative overflow-hidden">
      <FirstSection />
    </div>
    <div class="relative">
      <SecondSection />
      <img
        class="z-10 hidden md:block opacity-70 mix-blend-multiply absolute top-96 right-[84%] xl:right-auto xl:left-0"
        src="/images/ocupacio-inclusiva/bg-vector-2.svg"
        alt=""
      />
      <img
        class="z-10 hidden md:block opacity-70 absolute mix-blend-multiply top-[35rem] left-[86%] xl:left-auto xl:right-0"
        src="/images/ocupacio-inclusiva/bg-vector-1.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import HeroSection from "@/components/partials/ocupacio-inclusiva/HeroSection.vue";
import FirstSection from "@/components/partials/ocupacio-inclusiva/FirstSection.vue";
import SecondSection from "@/components/partials/ocupacio-inclusiva/SecondSection.vue";

useSeoMeta({
  title: "Memòria 2023 - Ocupacio inclusiva",
  description:
    "La Fundació Catalunya La Pedrera té un fort compromís amb les persones en situacions laborals, socials i econòmiques vulnerables. Des d'aquesta dedicació, la Fundació promou l'accés a l'ocupació com una eina prioritària per millorar les seves condicions de vida i construir un futur millor.",
});
</script>
