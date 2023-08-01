<template>
    <div class="flex flex-col gap-y-12 justify-center items-center
                md:flex-row md:gap-x-14">
        <!-- img container -->
        <CropedImage class="shrink-0" :class="{'md:order-2':mode==='right'}">
            <slot name="img" />
        </CropedImage>

        <div class="flex flex-col gap-y-6 max-w-[27.5rem]" :class="{'md:order-1 md:text-right md:items-end':mode==='right'}"> 
            <div class="font-reenie-beanie">
                <slot name="number" />
            </div>
            <h1 class="leading-[2rem]"><slot name="title" /></h1>
            <div><slot name="description" /></div>
            <nuxt-link :to="link" class="bg-black py-4 rounded-full w-full md:max-w-[15.125rem] flex items-center justify-center gap-x-4 text-white 
                    hover:bg-Turquoise transition-colors duration-200 ease-in-out">
                <span class="text-xl font-bold font-super-rotesk-comp"> Més informació</span>
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_203_1607)">
                    <path d="M2.01838 1.50684L10.8442 12.6666L2.01838 23.8263" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_203_1607">
                    <rect width="24" height="12.48" fill="white" transform="matrix(0 1 -1 0 13 0.625)"/>
                    </clipPath>
                    </defs>
                </svg>
            </nuxt-link>
        </div>
    </div>
</template>
<script setup>
import CropedImage from "@/components/UI/CropedImage.vue";
const props = defineProps({
    mode:{
        type:String,
        default:'left'
    },
    link:{
        type:String,
        required:true
    },
    
})

</script>
