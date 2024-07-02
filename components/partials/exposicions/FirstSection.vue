<template>
  <section class="w-full">
    <div class="w-full py-16 px-4 sm:px-8 md:px-4 lg:px-12">
      <div
        class="w-full max-w-[850px] mx-auto flex md:flex-row flex-col items-center gap-x-4 space-y-20 md:space-y-0 md:justify-between"
      >
        <div class="flex flex-col text-center space-y-2 w-[16.5rem]">
          <span
            class="text-Brown font-bold lg:font-medium leading-[3.75rem] sm:font-super-grotesk-web text-[4rem] sm:text-[5rem] lg:text-[7rem]"
            ><Number :number="686.321"
          /></span>
          <span
            class="text-Brown font-medium leading-[2.5rem] font-super-rotesk-comp text-center pl-0 sm:pl-6 lg:pl-16 lg:pt-4 text-[4rem]"
            >persones</span
          >
        </div>
        <div class="md:max-w-[26.625rem] w-full">
          <p class="text-lg font-bold text-black font-super-rotesk-comp">
            La Fundació Catalunya La Pedrera treballa perquè la cultura també
            sigui el camí cap a un món més humà, en què les persones estiguin al
            centre. I ho fa amb propostes artístiques i culturals que faciliten
            el pensament crític i creant un ecosistema cultural amb institucions
            i entitats de primer ordre.
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
              CREIEM EN UNA CULTURA OBERTA A TOTHOM
            </h1>
            <p class="text-black text-lg font-normal font-super-rotesk-comp">
              La Fundació construeix experiències expositives de màxima
              excel·lència per oferir coneixement artístic i una finestra oberta
              a la cultura. Amb la voluntat d’apropar noves mirades entorn de la
              creació artística, la bellesa, l’estètica i el patrimoni, treballa
              per fer arribar a un públic ben ampli l’art en totes les seves
              expressions. <br />
              <br />
              El 15 de gener del 2023 es va clausurar l’exposició “Els camins de
              l’abstracció 1957-1978. Diàlegs amb el Museo de Arte Abstracto
              Español de Conca”, concebuda i organitzada en col·laboració amb la
              Fundación Juan March. Des de setembre de 2022, i fins al gener del
              2023, es van poder veure a La Pedrera els artistes imprescindibles
              de l’art abstracte nacional i internacional de la segona meitat
              del segle XX. <br />
              <br />
              En aquesta mostra col·lectiva els artistes abstractes espanyols
              més internacionals, així com els principals representants de
              l’informalisme català establien un diàleg amb alguns dels
              principals representants internacionals de l’abstracció. <br />
              <br />
              <span class="text-[#E46955] font-bold">
                El 2023 les exposicions de la Fundació Catalunya La Pedrera van
                rebre 119.033 visitants
              </span>
              <br />
              <br />
              Seguint amb l’estratègia cultural consolidada que té com a eix
              principal la programació de grans exposicions d’art amb gran
              renom, l’any 2023 la Fundació Catalunya La Pedrera va presentar,
              del 31 de març al 23 de juliol, l’exposició “Jaume Plensa: poesia
              del silenci”, la retrospectiva més gran realitzada al nostre país
              d’un dels creadors de major reconeixement en l’art contemporani
              internacional. <br />
              <br />
              Comissariada per Javier Molins, a la mostra es van poder veure un
              centenar d’obres de petit, mitjà i gran format -sobretot
              escultures però també una selecció de dibuixos- la major part
              inspirades en la literatura i en les lletres, grans fils
              conductors de l’obra de Plensa; també d’altres dedicades a temes
              constants en la seva trajectòria com el silenci, el somni, el
              desig, la música i la família. A part de la sala d’exposicions les
              escultures van dialogar amb l’edifici de La Pedrera en altres
              espais, com la façana, el pati, les golfes o el terrat.
            </p>
          </div>
        </div>
        <div class="w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
          <img
            src="/images/exposicions/Fundacio.svg"
            class="w-full h-full object-cover"
            alt="Fundació"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>
