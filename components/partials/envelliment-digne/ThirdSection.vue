<template>
  <section class="w-full">
    <div class="w-full py-16 sm:px-8 md:px-4 lg:px-12">
      <div
        class="w-full max-w-[1097px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 md:space-y-0 items-start md:justify-between"
      >
        <div class="w-full md:max-w-[27.5rem] space-y-10 px-4 sm:px-0">
          <div class="w-full space-y-8 border-t border-black">
            <h1
              class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
            >
              PROJECTE DE PREVENCIÓ DEL DETERIORAMENT COGNITIU
            </h1>
            <p class="text-black text-lg font-normal font-super-grotesk-ot">
              Un total de 304 persones grans autònomes han participat durant el
              2023 als tallers de memòria i d’activitat física, en el marc del
              projecte prevenció del deteriorament cognitiu, amb l’objectiu de
              mantenir les seves capacitats cognitives i físiques el màxim de
              temps possible.
            </p>
          </div>
          <div class="w-full space-y-8 border-t border-black pt-4">
            <h1
              class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
            >
              GRUPS DE SUPORT A CUIDADORS
            </h1>
            <p class="text-black text-lg font-normal font-super-grotesk-ot">
              Acompanyar les persones grans vol dir també acompanyar les
              cuidadores i cuidadors no professionals que poden presentar
              malestar emocional per la sobrecàrrega que suposa la cura d’un
              familiar amb fase inicial d’Alzheimer o altres demències. Des de
              Fundació se’ls ofereix un espai de participació en grup, conduït
              per un psicòleg, on es comparteixen recursos per gestionar les
              seves emocions i millorar el seu benestar emocional.
            </p>
          </div>
          <div class="w-full space-y-2 border-t border-black pt-4">
            <span
              class="text-Ocre font-bold leading-[3.75rem] font-super-rotesk-comp text-[2rem]"
              ><Number :number="370"
            /></span>
            <p class="text-black text-lg font-normal font-super-grotesk-ot">
              persones s’han beneficiat d’aquest servei.
            </p>
          </div>
        </div>
        <div class="w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
          <img
            src="/images/envelliment-digne/persona.svg"
            class="w-full h-full object-cover"
            alt="Fundació"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>
