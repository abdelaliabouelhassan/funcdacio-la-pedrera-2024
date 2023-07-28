<template>
    <div>
        <HeroSection />
        <SecondSection class="hidden md:block"/>
        <ThirdSection />
    </div>
</template>
<script setup>
import HeroSection from "@/components/partials/balanc/HeroSection.vue";
import SecondSection from "@/components/partials/balanc/SecondSection.vue";
import ThirdSection from "@/components/partials/balanc/ThirdSection.vue";

</script>