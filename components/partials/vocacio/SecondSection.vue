<template>
    <section class=" w-full ">
        <div class=" w-full  py-16 px-4 sm:px-8 md:px-4 lg:px-12">
            <div class=" w-full max-w-[850px] mx-auto flex md:flex-row flex-col items-center gap-x-4 space-y-20 md:space-y-0 md:justify-between">
                <div class=" flex flex-col text-center space-y-2 w-[16.5rem]">
                    <span class=" text-Turquoise font-medium leading-[3.75rem] font-reenie-beanie text-[8rem]"><Number :number="82.072" /></span>
                    <span class=" text-Turquoise font-medium leading-[2.5rem] font-reenie-beanie text-[4rem]">persones</span>
                </div>
                <div class="  md:max-w-[26.625rem] w-full">
                    <p class=" text-lg font-normal text-black font-super-grotesk-ot">
                        Impulsem programes per fomentar l’educació i el talent científic i cultural, perquè tots els infants i joves puguin desenvolupar al màxim les seves capacitats, amb igualtat d’oportunitats.  <br>  <br>
                        Acompanyem els infants i adolescents a assolir l’èxit educatiu. <br>  <br>
                        La Fundació Catalunya La Pedrera desenvolupa programes transformadors perquè tothom pugui tenir la millor formació, amb acompanyament educatiu i amb beques que garanteixen la igualtat d’oportunitats. Potenciar l’èxit educatiu és la clau per aconseguir un futur millor per als infants i joves, en el marc d’una societat més solidària que posi les persones al centre.
                    </p>
                </div>
            </div>
        </div>

        <div class=" w-full  py-16 sm:px-8 md:px-4 lg:px-12">
            <div class=" w-full max-w-[1097px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 xl:space-x-0 md:space-y-0 items-start md:justify-between">
                <div class="w-full md:max-w-[27.5rem] space-y-10 px-4 sm:px-0">
                        <div class=" w-full  space-y-8 border-t border-black">
                            <h1 class=" text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4">ESCOLES TÀNDEM</h1>
                            <p class="  text-black text-lg font-normal font-super-grotesk-ot ">
                            El programa Escoles Tàndem impulsa la col·laboració entre un centre educatiu i una institució de referència durant tres cursos amb la voluntat de singularitzar l’escola en un procés d’innovació que posi l’alumnat al centre. Treballant en col·laboració amb els equips directius i els claustres, s’acompanya la transformació del centre des de l’organització fins a la manera d’ensenyar i d’aprendre, i pensant sempre en la sostenibilitat a llarg termini dels projectes.<br><br>
                            El programa té una durada de tres anys en cada projecte, però aquest 2022, i de manera excepcional, s’ha continuat un quart curs amb els Tàndems que la Fundació a impulsat a Girona. En concret es tracta dels projectes formats, d’una banda, per l’Escola Font de la Pólvora, l’Escola Vila-Roja i l’Escola Sagrada Família; i de l’altra, amb Temporada Alta, la Fundació Ciutat Invisible i la Fundació Girona Est. Aquesta excepcionalitat es deu a la complexitat del context amb el que es troben les escoles de Girona Est, la situació pandèmica que va interferir en la implementació del projecte i el repte de la reordenació de les escoles d’aquest sector prevista pel curs 2022-23. En el segon any d’implementació es troben els Tàndem de l’Escola Alexandre Galí amb el British Council a Barcelona; i l’Escola Mercè Rodoreda amb el Teatre Nacional de Catalunya a Santa Coloma de Gramenet.
                            </p>
                        </div>
                </div>
                <div class=" w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
                    <img src="/images/vocacio/article-img-1.svg" class=" w-full h-full object-cover" alt="article-img-1">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Number from "@/components/UI/Number.vue";
</script>