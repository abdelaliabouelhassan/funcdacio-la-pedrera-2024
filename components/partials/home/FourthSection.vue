<template>
    <section class="px-4 py-16">
        <ArticlePreview mode="right">
            <template #img>
                <img src="/images/home/fourth-section-img.svg" alt="" srcset="">
            </template>
            <template #number>
                <div class="flex items-center gap-x-5 leading-10 text-Brown">
                    <!-- <slot name="number" /> -->
                    <span class="font-medium text-[4rem] shrink-0"> 3.686 </span> 
                    <span class="text-[2rem]">persones</span> 
                </div>
            </template>
            <template #title>
                ENVELLIMENT DIGNE
            </template>
            <template #description>
                Acompanyem les persones grans. Perquè tinguin un envelliment tan digne com sigui possible, mantenint al màxim les seves capacitats i el seu estat emocional.
            </template>
        </ArticlePreview>
        
    </section>
</template>

<script setup>
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
</script>