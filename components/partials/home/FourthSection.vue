<template>
  <section class="px-4 py-16">
    <ArticlePreview mode="right" link="/envelliment-digne">
      <template #img>
        <img
          src="/images/home/fourth-section-img.webp"
          alt="DIGNE"
          width="331.753"
          height="321.672"
        />
      </template>
      <template #number>
        <div
          class="flex items-center gap-x-5 leading-10 text-Ocre font-super-rotesk-comp"
        >
          <!-- <slot name="number" /> -->
          <span class="font-bold text-[4rem] shrink-0"
            ><Number :number="4.301" />
          </span>
          <span class="text-[2rem]">persones</span>
        </div>
      </template>
      <template #title> ENVELLIMENT DIGNE </template>
      <template #description>
        Acompanyem a les persones grans i allarguem al màxim la seva qualitat de
        vida i de les seves famílies
      </template>
    </ArticlePreview>
  </section>
</template>

<script setup>
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
import Number from "@/components/UI/Number.vue";
</script>
