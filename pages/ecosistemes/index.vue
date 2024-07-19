<template>
  <div>
    <HeroSection />
    <FirstSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/partials/ecosistemes/HeroSection.vue";
import FirstSection from "@/components/partials/ecosistemes/FirstSection.vue";

useSeoMeta({
  title: "Memòria 2023 - Ecosistemes",
  description:
    "Memòria 2023 Fundació Catalunya La Pedrera - Reimaginar la Fundació",
});
</script>
