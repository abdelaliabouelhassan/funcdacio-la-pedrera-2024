<template>
    <section class="px-4 py-16">
        <ArticlePreview mode="right">
            <template #img>
                <img src="/images/home/sixth-section-img.svg" alt="" srcset="">
            </template>
            <template #number>
                <div class="flex items-center gap-x-5 leading-10 text-Olive-Green">
                    <!-- <slot name="number" /> -->
                    <span class="font-medium text-[4rem] shrink-0"> 486.500 </span> 
                    <span class="text-[2rem]">persones</span> 
                </div>
            </template>
            <template #title>
                SOSTENIBILITAT I TERRITORI
            </template>
            <template #description>
                Promovem projectes de sostenibilitat i educació ambiental a la nostra xarxa d’espais naturals. Perquè volem deixar un món millor a les futures generacions.
            </template>
        </ArticlePreview>
        
    </section>
</template>

<script setup>
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
</script>