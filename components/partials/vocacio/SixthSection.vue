<template>
    <section class="w-full max-w-[56rem] mx-auto py-16 px-4 sm:px-8 md:px-4 lg:px-12 text-center flex flex-col divide-y divide-black">
        <div class="flex flex-col items-center gap-y-4 pb-8">
            <h1 class="text-xl">AJUDES A ESTUDIS OBLIGATORIS I SUPERIORS</h1>
            <div class="text-lg">Mentoring i beca flexible de:</div>
            <div class="text-[4rem] text-Turquoise font-medium leading-[3.75rem] font-reenie-beanie md:text-[8rem]">
                <Number :number="500" />€ <span>i</span>  <Number :number="700" />€
            </div>
        </div>
        <div class="flex flex-col py-8 items-center gap-y-12 md:flex-row md:justify-center md:gap-x-12">
            <div class="flex flex-col gap-y-2.5">
                <div class="flex items-center gap-x-4 p-2.5 ">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <circle cx="16" cy="16" r="14" />
                        <path d="M16 8 L16 16 20 20" />
                    </svg>
                    <div class="font-super-rotesk-comp font-bold text-xl">3 ANYS</div>
                </div>
                <div class="flex items-center gap-x-4 p-2.5 ">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <div class="font-super-rotesk-comp font-bold text-xl">55 BENEFICIARIS</div>
                </div>
                <div class="flex items-center gap-x-4 p-2.5 ">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>

                    <div class="font-super-rotesk-comp font-bold text-xl">85% CONTINUÏTAT</div>
                </div>

            </div>
            <div class="flex flex-col divide-y divide-black ">
                <div class="flex flex-col gap-y-2.5 pb-2.5">
                    <div class="flex items-center space-x-4  p-2.5">
                        <div class="font-super-rotesk-comp font-bold text-xl text-Turquoise max-w-[60px] w-full text-start"><Number :number="67" />%</div>
                        <div class=" whitespace-nowrap">ESTUDIS OBLIGATÒRIS</div>
                    </div>
                    <div class="flex items-center gap-x-4 p-2.5">
                        <div class="font-super-rotesk-comp font-bold text-xl text-Turquoise  max-w-[60px] w-full text-start"><Number :number="33" />%</div>
                        <div class=" whitespace-nowrap">ESTUDIS POSTOBLIGATORIS</div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-2.5 pt-2.5">
                    <div class="flex items-center gap-x-4 p-2.5">
                        <div class="font-super-rotesk-comp font-bold text-xl text-Turquoise  max-w-[60px] w-full text-start"><Number :number="34.5" />%</div>
                        <div class=" whitespace-nowrap">COL·LEGI OMS I DE PRAT</div>
                    </div>
                    <div class="flex items-center gap-x-4 p-2.5">
                        <div class="font-super-rotesk-comp font-bold text-xl text-Turquoise  max-w-[60px] w-full text-start"><Number :number="65.5" />%</div>
                        <div class=" whitespace-nowrap">ESCOLES TÀNDEM</div>
                    </div>
                </div>
                
            </div>
        </div>      
    </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>