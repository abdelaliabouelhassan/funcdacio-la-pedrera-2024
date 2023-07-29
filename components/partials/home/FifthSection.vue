<template>
    <section class="px-4 py-16">
        <ArticlePreview link="/vocacio">
            <template #img>
                <img src="/images/home/fifth-section-img.svg" alt="" srcset="">
            </template>
            <template #number>
                <div class="flex items-center gap-x-5 leading-10 text-Turquoise">
                    <!-- <slot name="number" /> -->
                    <span class="font-medium text-[4rem] shrink-0"><Number  :number="82.072"/>  </span> 
                    <span class="text-[2rem]">persones</span> 
                </div>
            </template>
            <template #title>
                VOCACIÓ I TALENT
            </template>
            <template #description>
                Impulsem programes per fomentar l’educació i el talent científic i cultural. Perquè tots els infants i joves puguin desenvolupar al màxim les seves capacitats amb igualtat d’oportunitats.
            </template>
        </ArticlePreview>
        
    </section>
</template>

<script setup>
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
import Number from "@/components/UI/Number.vue";

</script>