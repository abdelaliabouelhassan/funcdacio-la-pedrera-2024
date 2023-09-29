<template>
    <section class="font-reenie-beanie font-medium text-Brown text-center py-16">
        <div class="text-[8rem]  tracking-[-2.56px] leading-10">
          <Number :number="840"/> 
        </div>
        <div class="text-[4rem] tracking-[-2.56px] leading-tight">
            Llocs de treball directes i induïts
        </div>
    </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>