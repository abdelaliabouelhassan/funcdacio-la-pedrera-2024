<template>
  <section class="px-4 py-16">
    <ArticlePreview mode="right" link="/territori">
      <template #img>
        <img
          src="/images/home/sixth-section-img.webp"
          alt="SOSTENIBILITAT"
          width="331.753"
          height="321.672"
        />
      </template>
      <template #number>
        <div
          class="flex items-center gap-x-5 leading-10 text-Olive-Green font-super-rotesk-comp"
        >
          <!-- <slot name="number" /> -->
          <span class="font-bold text-[4rem] shrink-0"
            ><Number :number="485.043" />
          </span>
          <span class="text-[2rem]">persones</span>
        </div>
      </template>
      <template #title> SOSTENIBILITAT I TERRITORI </template>
      <template #description>
        Promovem projectes de sostenibilitat i conservem la xarxa d’espais
        natura
      </template>
    </ArticlePreview>
  </section>
</template>

<script setup>
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
import Number from "@/components/UI/Number.vue";
</script>
