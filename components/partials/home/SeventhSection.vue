<template>
    <section class="px-4 py-16">
        <ArticlePreview>
            <template #img>
                <img src="/images/home/seventh-section-img.svg" alt="" srcset="">
            </template>
            <template #number>
                <div class="flex items-center gap-x-5 leading-10 text-Brown">
                    <!-- <slot name="number" /> -->
                    <span class="font-medium text-[4rem] shrink-0"> <Number  :number="5.288"/> </span> 
                    <span class="text-[2rem]">persones</span> 
                </div>
            </template>
            <template #title>
                ALIMENTACIÓ PER A LA SALUT
            </template>
            <template #description>
                Generem i compartim coneixement i bons hàbits sobre alimentació i salut. Perquè volem millorar l’alimentació de tothom, sigui quina sigui la seva situació vital.
            </template>
        </ArticlePreview>
        
    </section>
</template>

<script setup>
import Number from "@/components/UI/Number.vue";
import ArticlePreview from "@/components/UI/ArticlePreview.vue";
</script>