<template>
    <section class=" w-full px-4 sm:px-8 md:px-4 lg:px-12">
        <div class=" w-full max-w-[850px] mx-auto py-20">
            <div class=" w-full flex md:flex-row flex-col items-center space-y-20 md:space-y-0 md:justify-between">
                <div class=" flex flex-col text-center space-y-2">
                    <span class=" text-Ocre font-medium leading-[3.75rem] font-reenie-beanie text-[8rem]"><Number :number="179" /></span>
                    <span class=" text-Ocre font-medium leading-[2.5rem] font-reenie-beanie text-[4rem]">persones</span>
                </div>
                <div class="  md:max-w-[26.625rem] w-full">
                    <p class=" text-lg font-normal text-black font-super-grotesk-ot">
                        La Fundació Catalunya La Pedrera té un fort compromís amb les persones en situacions laborals, socials i econòmiques vulnerables. Des d'aquesta dedicació, la Fundació promou l'accés a l'ocupació com una eina prioritària per millorar les seves condicions de vida i construir un futur millor.
                    </p>
                </div>

             
            </div>
        </div>

        <div class=" w-full  py-20 ">
            <div class=" w-full max-w-[827px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 xl:space-x-0 md:space-y-0 items-start md:justify-between">
                <div class=" w-full max-w-[37.5rem] mx-auto space-y-2 items-st flex flex-col">
                    <span class=" text-lg text-black font-normal font-super-grotesk-ot">Creixement de l’ocupació inclusiva:</span>
                    <h1 class=" text-xl font-bold text-black font-super-rotesk-comp leading-[1]">LLOCS DE TREBALL <br> COOPERATIVA MANS</h1>
                    <div class=" w-full max-w-[22.62rem] mx-auto md:mx-0" ref="ChartComponentRef">
                        {{show}}
                        <ChartBar v-if="show"  />
                    </div>
                   <div class=" w-full max-w-[22.62rem] mx-auto md:mx-0 space-y-2 pt-4">
                        <div class=" w-full flex flex-wrap  items-center  gap-5">
                            <div class=" flex items-center space-x-1">
                                <div class=" w-[0.875rem] h-[0.875rem] bg-Beige"></div>
                                <span class=" text-[0.625rem] text-black font-normal font-super-grotesk-ot">Molí d’en Puigvert</span>
                            </div>
                            <div class=" flex items-center space-x-1">
                                <div class=" w-[0.875rem] h-[0.875rem] bg-Ocre"></div>
                                <span class=" text-[0.625rem] text-black font-normal font-super-grotesk-ot">Topromi</span>
                            </div>
                            <div class=" flex items-center space-x-1">
                                <div class=" w-[0.875rem] h-[0.875rem] bg-Brown"></div>
                                <span class=" text-[0.625rem] text-black font-normal font-super-grotesk-ot">MANS</span>
                            </div>
                            <div class=" flex items-center space-x-1">
                                <div class=" w-[0.875rem] h-[0.875rem] bg-Turquoise"></div>
                                <span class=" text-[0.625rem] text-black font-normal font-super-grotesk-ot">Horts de Sant Benet</span>
                            </div>
                        </div>
                        <div class=" w-full flex flex-wrap  items-center  gap-5 justify-center">
                          <div class=" flex items-center space-x-1">
                            <div class=" w-[0.875rem] h-[0.875rem] bg-Olive-Green"></div>
                            <span class=" text-[0.625rem] text-black font-normal font-super-grotesk-ot">Personal d’Estructura</span>
                        </div>
                        </div>
                   </div>
                </div>
                <div class=" w-full md:max-w-[27.5rem] space-y-8 border-t border-black">
                    <h1 class=" text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4">COOPERATIVA MANS</h1>
                    <p class="  text-black text-lg font-normal font-super-grotesk-ot ">
                       Mitjançant la Cooperativa MANS, la Fundació treballa per generar oportunitats laborals i facilitar l’accés al món laboral per a joves en risc d’exclusió. Aquesta cooperativa es dedica a la producció, comercialització, envasat i transformació de fruita i verdura ecològica. <br> <br>
                       Al llarg del 2022, un total de 32 persones en risc d’exclusió van treballar a la Cooperativa MANS, i 12 treballadors d’inserció van aconseguir l’accés a empreses ordinàries. Aquests resultats són especialment positius tenint en compte les dificultats econòmiques derivades del conflicte a Ucraïna i l’encariment de preus. MANS ha consolidat la seva relació amb els agricultors locals mitjançant un projecte de certificació conjunta que abasta tots els processos, des del camp fins a l’entrega del producte als supermercats. A més, durant el 2022, s’ha incrementat la producció elaborada a l’obrador de la cooperativa.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import ChartBar from '@/components/UI/ChartBar.vue';
import Number from "@/components/UI/Number.vue";
const show = ref(false);
let observer = null
const ChartComponentRef = ref(null)
onMounted(() => {
     observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            show.value = true;
        }
    }, {
        threshold: 0.5
    });  
    observer.observe(ChartComponentRef.value);
})

onUnmounted(() => {
    observer.disconnect()
})
</script>