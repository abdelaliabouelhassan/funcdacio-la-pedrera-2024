<template>
  <div>
    <HeroSection />
    <div class="relative">
      <SecondSection />
      <img
        class="z-10 hidden md:block opacity-70 mix-blend-multiply absolute top-0 left-[86%] xl:left-auto xl:right-0"
        src="/images/equip/bg-vector-1.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import HeroSection from "@/components/partials/equip/HeroSection.vue";
import SecondSection from "@/components/partials/equip/SecondSection.vue";

useSeoMeta({
  title: "Memòria 2023 - Equip",
  description:
    "Memòria 2023 Fundació Catalunya La Pedrera - Reimaginar la Fundació",
});
</script>
