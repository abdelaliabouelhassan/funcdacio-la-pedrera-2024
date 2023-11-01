<template>
    <section class=" w-full ">
        <div class=" w-full max-w-[850px] mx-auto py-16 px-4 sm:px-8">
            <div class=" w-full flex md:flex-row flex-col items-center space-y-20 md:space-y-0 md:justify-between">
                <div class=" flex flex-col text-center space-y-2">
                    <span class=" text-Brown font-medium leading-[3.75rem] font-reenie-beanie text-[8rem]"><Number :number="686.321" /></span>
                    <span class=" text-Brown font-medium leading-[2.5rem] font-reenie-beanie text-[4rem]">persones</span>
                </div>
                <div class="  md:max-w-[26.625rem] w-full">
                    <p class=" text-lg font-normal text-black font-super-grotesk-ot">
                        La Fundació Catalunya La Pedrera treballa perquè la cultura també sigui el camí cap a un món més humà, en què les persones estiguin al centre. I ho fa amb propostes que faciliten el pensament crític i creant un ecosistema cultural amb institucions i entitats de primer ordre.
                    </p>
                </div>
            </div>
        </div>

        <div class=" w-full py-16  sm:px-8 md:px-4 lg:px-12">
            <div class=" w-full max-w-[1097px] mx-auto flex md:flex-row flex-col  space-y-16 md:space-x-10 md:space-y-0 items-start md:justify-between">
               <div class="w-full md:max-w-[27.5rem] space-y-10 px-4 sm:px-0">
                 <div class="w-full  space-y-8 border-t border-black">
                    <h1 class=" text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4">CREIEM EN UNA CULTURA OBERTA A TOTHOM</h1>
                    <p class="  text-black text-lg font-normal font-super-grotesk-ot ">
                        La prioritat de la Fundació és construir experiències expositives de màxima excel·lència que siguin una finestra oberta a la cultura. Amb la voluntat d’oferir noves mirades entorn de la creació artística, la bellesa, l’estètica i el patrimoni, per fer arribar a un públic ben ampli l’art en totes les seves expressions.
                    <br> <br>   Des de febrer i fins al maig del 2022, l’edifici de La Pedrera va acollir l’exposició “Morandi. Ressonància infinita”, una retrospectiva de Giorgio Morandi a través d’una àmplia selecció de pintures, dibuixos, aquarel·les i gravats d’aquest artista italià, considerat un dels més significatius i inclassificables del panorama artístic del segle XX.
                     <br> <br>   L’exposició va ser comissariada per Daniela Ferrari i Beatrice Avanzi, conservadores del Museo di Arte Moderna e Contemporanea di Trento e Rovereto (MART) i es va organitzar conjuntament amb la Fundación MAPFRE.
                    </p>
                </div>
               </div>
                <div class=" w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
                    <img src="/images/exposicions/Fundació.png" class=" w-full h-full object-cover" alt="Fundació">
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>