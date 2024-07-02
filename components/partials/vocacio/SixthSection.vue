<template>
  <section
    class="w-full max-w-[56rem] mx-auto py-16 px-4 sm:px-8 md:px-4 lg:px-12 text-center flex flex-col divide-y divide-black"
  >
    <div class="flex flex-col items-center gap-y-4 pb-8">
      <p
        class="max-w-[511px] text-Turquoise font-super-rotesk-comp font-bold text-xl hidden"
      >
        El programa reforça la seva atenció als i les aprenents amb persones
        voluntàries i essent centre formador d’estudiants universitaris en
        pràctiques.
      </p>

      <div
        class="max-w-[850px] w-full flex flex-col md:flex-row justify-between items-center"
      >
        <div class="flex flex-col items-center -space-y-6">
          <Number
            :number="10.278"
            class="font-super-grotesk-web text-Turquoise font-medium text-[128px]"
          />
          <span
            class="text-[32px] font-super-rotesk-comp font-bold text-Turquoise"
            >ALUMNES</span
          >
        </div>
        <div class="flex flex-col items-center -space-y-6">
          <Number
            :number="985"
            class="font-super-grotesk-web text-Turquoise font-medium text-[128px]"
          />
          <span
            class="text-[32px] font-super-rotesk-comp font-bold text-Turquoise"
            >PROFESSORS</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>
