<template>
  <section class="font-reenie-beanie font-medium text-Brown text-center py-16">
    <div
      class="text-[8rem] tracking-[-2.56px] leading-10 font-super-grotesk-web"
    >
      <Number :number="778" />
    </div>
    <div
      class="text-[2rem] tracking-[10%] font-semibold font-super-rotesk-comp leading-tight pt-12"
    >
      Llocs de treball directes i induits
    </div>
  </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>
