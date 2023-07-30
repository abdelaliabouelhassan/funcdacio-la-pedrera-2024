<template>
    <section class="px-4 py-16">
        <ArticlePreview link="/ocupacio-inclusiva">
            <template #img>
                <img src="/images/home/third-section-img.webp"  width="331.753" height="321.672">
            </template>
            <template #number>
                <div class="flex items-center gap-x-5 leading-10 text-Ocre">
                    <!-- <slot name="number" /> -->
                    <span class="font-medium text-[4rem] shrink-0"> <Number :number="149" /> </span> 
                    <span class="text-[2rem]">persones</span> 
                </div>
            </template>
            <template #title>
                OCUPACIÓ INCLUSIVA
            </template>
            <template #description>
                Generem llocs de treball per a persones en situació de vulnerabilitat. Perquè volem que tothom pugui tenir unes bones condicions de vida i millorar el seu futur.
            </template>
        </ArticlePreview>
        
    </section>
</template>

<script setup>
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
import Number from "@/components/UI/Number.vue";

</script>