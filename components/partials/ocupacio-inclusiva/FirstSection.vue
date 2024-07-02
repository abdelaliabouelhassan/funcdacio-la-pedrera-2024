<template>
  <section class="w-full px-4 sm:px-8 md:px-4 lg:px-12">
    <div class="w-full max-w-[850px] mx-auto py-20">
      <div
        class="w-full flex md:flex-row flex-col items-center space-y-20 md:space-y-0 md:justify-between"
      >
        <div class="flex flex-col text-center space-y-2">
          <span
            class="text-Olive-Green font-medium leading-[3.75rem] text-[8rem] font-super-grotesk-web"
            ><Number :number="185"
          /></span>
          <span
            class="text-Olive-Green font-medium leading-[2.5rem] font-super-rotesk-comp text-[4rem] pt-6"
            >persones</span
          >
        </div>
        <div class="md:max-w-[26.625rem] w-full">
          <p class="text-lg font-bold text-black font-super-rotesk-comp">
            La Fundació Catalunya La Pedrera està compromesa amb les persones en
            situacions laborals, socials i econòmiques vulnerables. És des
            d’aquest compromís que la Fundació decideix treballar per donar-los
            accés a un lloc de treball com a eina preferent per millorar-ne les
            condicions de vida i així aconseguir un futur millor.
          </p>
        </div>
      </div>
    </div>

    <div class="w-full py-20">
      <div
        class="w-full max-w-[827px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 xl:space-x-0 md:space-y-0 items-start md:justify-between"
      >
        <div
          class="w-full max-w-[37.5rem] mx-auto space-y-2 items-st flex flex-col"
        >
          <span class="text-lg text-black font-normal font-super-grotesk-ot"
            >Creixement de l’ocupació inclusiva:</span
          >
          <h1
            class="text-xl font-bold text-black font-super-rotesk-comp leading-[1]"
          >
            LLOCS DE TREBALL <br />
            COOPERATIVA MANS
          </h1>
          <div
            class="w-full max-w-[22.62rem] mx-auto md:mx-0 pt-12"
            ref="ChartComponentRef"
          >
            <ChartBar v-if="show" />
          </div>
          <div class="w-full max-w-[22.62rem] mx-auto md:mx-0 space-y-2 pt-4">
            <div
              class="w-full flex flex-wrap justify-center items-center gap-5"
            >
              <div class="flex items-center space-x-1">
                <div class="w-[0.875rem] h-[0.875rem] bg-Beige"></div>
                <span
                  class="text-[0.625rem] text-black font-normal font-super-grotesk-ot"
                  >Molí d’en Puigvert</span
                >
              </div>
              <div class="flex items-center space-x-1">
                <div class="w-[0.875rem] h-[0.875rem] bg-Ocre"></div>
                <span
                  class="text-[0.625rem] text-black font-normal font-super-grotesk-ot"
                  >Topromi</span
                >
              </div>
              <div class="flex items-center space-x-1">
                <div class="w-[0.875rem] h-[0.875rem] bg-Brown"></div>
                <span
                  class="text-[0.625rem] text-black font-normal font-super-grotesk-ot"
                  >MANS</span
                >
              </div>
              <div class="flex items-center space-x-1">
                <div class="w-[0.875rem] h-[0.875rem] bg-Turquoise"></div>
                <span
                  class="text-[0.625rem] text-black font-normal font-super-grotesk-ot"
                  >Horts de Sant Benet</span
                >
              </div>
              <div class="flex items-center space-x-1">
                <div class="w-[0.875rem] h-[0.875rem] bg-Olive-Green"></div>
                <span
                  class="text-[0.625rem] text-black font-normal font-super-grotesk-ot"
                  >Personal d’Estructura</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:max-w-[27.5rem] space-y-8 border-t border-black">
          <h1
            class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
          >
            COOPERATIVA MANS
          </h1>
          <p class="text-black text-lg font-normal font-super-rotesk-comp">
            Mitjançant la Cooperativa MANS, La Fundació Catalunya La Pedrera
            treballa per generar oportunitats laborals i facilitar l’accés al
            món laborar per a persones en risc d’exclusió. MANS es dedica a la
            comercialització, envasat i transformació de fruita i verdura
            ecològica. Un total de
            <span class="font-bold"
              >44 persones en risc d’exclusió han treballat a MANS al llarg de
              l’any 2023, i 8 treballadors d’inserció van aconseguir l’accés a
              empreses ordinàries</span
            >. Aquestes dades positives han vingut acompanyades d’un augment de
            l’activitat, una vegada s’ha superat la dificultat econòmica inicial
            derivada de la guerra a Ucraïna i l’encariment de preus. La relació
            amb els pagesos de proximitat s’ha vist enfortida un cop ja s’ha
            finalitzat el projecte de certificació conjunta de tots els
            processos des del camp fins a l’entrega del producte al supermercat.
            Fruit d’un creixent reconeixement per part del sector i del
            consumidor, MANS ha pogut ampliar el volum de l’activitat d’envasat
            i la de producte elaborat fet a l’obrador de la cooperativa. També
            s’han seguit treballant noves línies d’activitat que siguin motores
            per a la creació de llocs de treball per a persones en risc
            d’exclusió.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ChartBar from "@/components/UI/ChartBar.vue";
import Number from "@/components/UI/Number.vue";
const show = ref(false);
let observer = null;
const ChartComponentRef = ref(null);
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        show.value = true;
      }
    },
    {
      threshold: 0.5,
    }
  );
  observer.observe(ChartComponentRef.value);
});

onUnmounted(() => {
  observer.disconnect();
});
</script>
