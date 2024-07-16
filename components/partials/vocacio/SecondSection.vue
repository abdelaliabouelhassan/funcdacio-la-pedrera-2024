<template>
  <section class="w-full">
    <div class="w-full py-16 px-4 sm:px-8 md:px-4 lg:px-12">
      <div
        class="w-full max-w-[850px] mx-auto flex md:flex-row flex-col items-center gap-x-4 space-y-20 md:space-y-0 md:justify-between"
      >
        <div class="flex flex-col text-center space-y-2 w-[16.5rem]">
          <span
            class="text-Turquoise font-medium leading-[3.75rem] sm:font-super-grotesk-web text-[4rem] sm:text-[7rem]"
            ><Number :number="89.827"
          /></span>
          <span
            class="text-Turquoise font-medium leading-[2.5rem] font-super-rotesk-comp text-center sm:pl-10 sm:pt-8 text-[4rem]"
            >persones</span
          >
        </div>
        <div class="md:max-w-[26.625rem] w-full">
          <p class="text-lg font-bold text-black font-super-rotesk-comp">
            La Fundació Catalunya La Pedrera desenvolupa programes
            transformadors perquè tothom pugui tenir la millor formació, amb
            acompanyament educatiu i amb beques que garanteixen la igualtat
            d’oportunitats. Potenciar l’èxit educatiu és la clau per aconseguir
            un futur millor per als infants i joves, en el marc d’una societat
            més solidària que posi les persones al centre.
          </p>
        </div>
      </div>
    </div>

    <div class="w-full py-16 sm:px-8 md:px-4 lg:px-12">
      <div
        class="w-full max-w-[1097px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 xl:space-x-0 md:space-y-0 items-start md:justify-between"
      >
        <div class="w-full md:max-w-[27.5rem] space-y-10 px-4 sm:px-0">
          <div class="w-full space-y-8 border-t border-black">
            <h1
              class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
            >
              JOVES I CIÈNCIA
            </h1>
            <p class="text-black text-lg font-normal font-super-grotesk-ot">
              Joves i Ciència és el programa més complet i amb més recorregut
              dels que ofereix la Fundació Catalunya La Pedrera per a l’impuls
              de vocacions científiques i el talent jove. El programa, de tres
              anys de durada, ofereix a joves de quart d’ESO l’oportunitat
              d’entrar en contacte directe amb la investigació científica. L’any
              2023, en el que va ser la 15a edició del programa, es van
              seleccionar 50 nous estudiants, que es van incorporar a la primera
              fase del programa: l’estada de dues setmanes a MónNatura Pirineus
              desenvolupant un dels 5 projectes de recerca proposats de la mà
              d’equips investigadors. En paral·lel, altres 49 joves van fer
              l’estada de la fase 2 a centres de recerca nacionals, i els 43
              joves que ja arribaven a la 3a fase van tenir l’oportunitat de fer
              una estada científica a altres països, col·laborant amb equips
              investigadors en centres de recerca o participant en programes
              internacionals de ciència.
            </p>
          </div>
          <div class="w-full space-y-8 border-t border-black pt-5">
            <h1
              class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
            >
              BIYSC
            </h1>
            <p class="text-black text-lg font-normal font-super-grotesk-ot">
              El BIYSC és el programa internacional Barcelona International
              Youth Science Challenge dirigit a joves de tot el món amb passió
              per la ciència i la tecnologia. El seu objectiu és estimular el
              talent i promoure la vocació per a la recerca científica i
              tecnològica. A l’estiu de 2023 va reunir a 100 participants de més
              de 20 nacionalitats diferents, provinents dels 5 continents han
              pogut conviure a Barcelona participant en 13 projectes a diferents
              centres de recerca, hospitals i universitats. El BIYSC és ja un
              programa consolidat a nivell internacional com a programa de
              referència i ben posicionat entre els que s’ofereixen per a joves
              amb alt interès i talent en aquest sector.
            </p>
          </div>
        </div>
        <div class="w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
          <img
            src="/images/vocacio/article-img-1.svg"
            class="w-full h-full object-cover"
            alt="article-img-1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Number from "@/components/UI/Number.vue";
</script>
