<template>
  <section class="w-full">
    <div class="w-full md:max-w-[850px] mx-auto py-5 px-4 sm:px-8">
      <div
        class="w-full flex md:flex-row flex-col items-center space-y-20 md:justify-between"
      >
        <div class="flex flex-col text-center space-y-2">
          <span
            class="text-Ocre font-medium leading-[3.75rem] font-super-grotesk-web text-[8rem]"
            ><Number :number="4.301"
          /></span>
          <span
            class="text-Ocre font-medium leading-[2.5rem] font-reenie-beanie text-[4rem] pt-7"
            >persones</span
          >
        </div>
        <div class="md:max-w-[26.625rem] w-full">
          <p class="text-lg font-bold text-black font-super-rotesk-comp">
            Moltes persones grans pateixen deteriorament cognitiu i físic que
            provoca manca d’autonomia, soledat i incomunicació, situacions que
            minven la seva qualitat de vida. La Fundació Catalunya La Pedrera
            assumeix el compromís d’estar al costat d’aquestes persones per
            aconseguir que mantinguin el màxim de temps possible les seves
            capacitats, millorin el seu estat emocional i, per tant, donant-los
            a ells i les seves famílies una millor qualitat de vida.
          </p>
        </div>
      </div>
    </div>

    <div class="w-full py-16 sm:px-8 md:px-4 lg:px-12">
      <div
        class="w-full max-w-[1097px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 md:space-y-0 items-start md:justify-between"
      >
        <div class="w-full md:max-w-[27.5rem] space-y-10 px-4 sm:px-0">
          <div class="w-full space-y-8 border-t border-black">
            <h1
              class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
            >
              PROGRAMA DE REFORÇ I ESTIMULACIÓ DE LA MEMÒRIA I LA SALUT
            </h1>
            <p class="text-black text-lg font-normal font-super-rotesk-comp">
              L’any 2023 la Fundació Catalunya La Pedrera s’ha consolidat com a
              referent en salut cognitiva als diferents pobles i ciutats on està
              present arreu de Catalunya.
              <span class="font-bold"
                >El programa de reforç de la memòria ha atès un total de 2.773
                persones grans</span
              >
              amb fases inicials d’Alzheimer i altres demències i les seves
              famílies, fent que, a través d’una estimulació integral –
              cognitiva, física, social i emocional- puguin mantenir les seves
              capacitats i autonomia per més temps, alhora que gaudeixen de les
              activitats en grup que els oferim als espais de la Fundació.
              <br />
              <br />
              Ha estat un any amb un increment extraordinari en el nombre de
              persones participants al programa, amb un 39% de creixement
              respecte l’any anterior. Això ha estat fruit de la tasca intensiva
              de difusió que duem a terme a tots els territoris on estem
              presents, i de l’elevat grau de satisfacció de les persones
              participants. El programa és una teràpia no farmacològica
              complementària als tractaments prescrits per metges de primària i
              especialistes, i forma part de la prescripció social en l’àmbit
              sanitari. L’any 2023 un total de 124 Centres d’Atenció Primària i
              31 Hospitals catalans han derivat 1.322 persones als espais de la
              Fundació, amb 657 persones inscrites.
            </p>
          </div>
          <div class="w-full space-y-8 border-t border-black">
            <h1
              class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
            >
              DINARS EN COMPANYIA
            </h1>
            <p class="text-black text-lg font-normal font-super-grotesk-ot">
              Un total de 810 persones grans han pogut beneficiar-se l’any 2023
              del servei dels Dinars en Companyia, que els permet que gaudeixin
              diàriament d’un àpat equilibrat i saludable, i ho puguin fer
              conversant i socialitzant amb altres persones. Durant aquest any
              hem obert el servei a un nou espai, el de Tarragona, arribant als
              17 espais en tot el territori. <br />
              <br />
              La Fundació ha dut a terme un projecte de millora del servei dels
              Dinars en Companyia, que ha tingut en compte tant la vessant de
              nutrició, adaptant-la a les especificitats de les persones grans
              que hi participen, com la d’organització dels equips i disseny
              dels espais. Està previst posar en marxa aquest projecte durant
              l’any 2024.
            </p>
          </div>
        </div>
        <div class="w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
          <img
            src="/images/envelliment-digne/Fundació.svg"
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
