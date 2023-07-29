<template>
    <section class=" w-full ">
        <div class=" w-full md:max-w-[850px] mx-auto py-16 px-4 sm:px-8">
            <div class=" w-full flex md:flex-row flex-col items-center space-y-20  md:justify-between">
                <div class=" flex flex-col text-center space-y-2">
                    <span class=" text-Brown font-medium leading-[3.75rem] font-reenie-beanie text-[8rem]"><Number :number="3.686" /></span>
                    <span class=" text-Brown font-medium leading-[2.5rem] font-reenie-beanie text-[4rem]">persones</span>
                </div>
                <div class="  md:max-w-[26.625rem] w-full">
                    <p class=" text-lg font-normal text-black font-super-grotesk-ot">
                        Moltes persones grans pateixen deteriorament cognitiu i físic que provoca manca d’autonomia, soledat i incomunicació, situacions que minven la seva qualitat de vida. La Fundació Catalunya La Pedrera assumeix el compromís d’estar al costat d’aquestes persones per aconseguir que mantinguin el màxim de temps possible les seves capacitats, millorin el seu estat emocional i, per tant, donant-los a ells i les seves famílies una millor qualitat de vida.
                    </p>
                </div>
            </div>
        </div>

        <div class=" w-full py-16 sm:px-8 md:px-4 lg:px-12">
            <div class=" w-full max-w-[1097px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 md:space-y-0 items-start md:justify-between">
               <div class="w-full md:max-w-[27.5rem] space-y-10 px-4 sm:px-0">
                    <div class=" w-full  space-y-8 border-t border-black">
                        <h1 class=" text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4">PROGRAMA DE REFORÇ I ESTIMULACIÓ DE LA MEMÒRIA I LA SALUT</h1>
                        <p class="  text-black text-lg font-normal font-super-grotesk-ot ">
                       El Programa de Reforç i Estimulació de la Memòria i la Salut (REMS) s’adreça a persones grans que comencen a experimentar deficiències de memòria per causes diverses, com ara l’Alzheimer o altres demències en fases inicials. <br> <br>
                       L’any 2022 la Fundació Catalunya La Pedrera ha consolidat la seva aposta per fer que aquestes persones amb deteriorament cognitiu tinguin un envelliment el més digne possible. S’ha recuperat el total d’espais oberts que hi havia abans de la pandèmia de la COVID, amb la reobertura de l’espaiSocial de l’Hospitalet de Llobregat, restablint així la xarxa de 21 espais arreu de Catalunya.
                        </p>
                    </div>
                    
               </div>
                <div class=" w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
                    <img src="/images/envelliment-digne/Fundació.svg" class=" w-full h-full object-cover" alt="Fundació">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>