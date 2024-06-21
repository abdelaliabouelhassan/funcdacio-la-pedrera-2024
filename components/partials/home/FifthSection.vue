<template>
  <section class="px-4 py-16">
    <ArticlePreview link="/vocacio">
      <template #img>
        <img
          src="/images/home/fifth-section-img.webp"
          alt="TALENT"
          width="331.753"
          height="321.672"
        />
      </template>
      <template #number>
        <div
          class="flex items-center gap-x-5 leading-10 text-Turquoise font-super-rotesk-comp"
        >
          <!-- <slot name="number" /> -->
          <span class="font-bold text-[4rem] shrink-0"
            ><Number :number="89.827" />
          </span>
          <span class="text-[2rem]">persones</span>
        </div>
      </template>
      <template #title> VOCACIÓ I TALENT </template>
      <template #description>
        Impulsem programes per fomentar l’educació i el talent científic i
        cultural
      </template>
    </ArticlePreview>
  </section>
</template>

<script setup>
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
import Number from "@/components/UI/Number.vue";
</script>
