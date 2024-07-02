<template>
  <div>
    <HeroSection />
    <!-- <SecondSection class="hidden md:block"/> -->
    <div class="relative">
      <ThirdSection />
      <img
        class="z-10 hidden md:block opacity-70 absolute mix-blend-multiply -top-32 left-[86%] xl:left-auto xl:right-0"
        src="/images/balanc/bg-vector-1.svg"
        alt=""
      />
      <img
        class="z-10 hidden md:block opacity-70 absolute mix-blend-multiply bottom-32 right-[84%] xl:right-auto xl:left-0"
        src="/images/balanc/bg-vector-2.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script setup>
import HeroSection from "@/components/partials/balanc/HeroSection.vue";
import SecondSection from "@/components/partials/balanc/SecondSection.vue";
import ThirdSection from "@/components/partials/balanc/ThirdSection.vue";
useSeoMeta({
  title: "Memòria 2022 - Balanç econòmic",
  description:
    "Memòria 2022 Fundació Catalunya La Pedrera - Reimaginar la Fundació",
});
</script>
