<template>
  <section class="w-full py-16 sm:px-8 md:px-4 lg:px-12">
    <div
      class="w-full max-w-[1097px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 md:space-y-0 items-start md:justify-between"
    >
      <div class="w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
        <img
          src="/images/vocacio/article-img-71.svg"
          class="w-full h-full object-cover"
          alt="article-img-2"
        />
      </div>
      <div class="w-full md:max-w-[27.5rem] space-y-2 px-4 sm:px-0">
        <div class="w-full space-y-8 border-t border-black">
          <h1
            class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-8"
          >
            IMPULS AL TALENT MUSICAL
          </h1>
          <p class="text-black text-lg font-normal font-super-grotesk-ot">
            La Fundació Catalunya La Pedrera està compromesa amb el foment del
            talent i les vocacions, també artístiques i musicals. En aquest
            àmbit, durant l’any 2023 es va donar un nou impuls al talent musical
            tot programant el cicle Talents Jazz amb institucions de referència
            i prestigi musical de la ciutat com el Conservatori del Liceu, el
            Taller de Músics i l’ESMUC; el resultat va ser un cicle de 22
            concerts de jazz al terrat de <br />
            <br />
            era, que va donar veu al jove talent musical i interpretatiu de la
            ciutat amb la participació de 129 músics.
          </p>
        </div>
        <div class="w-full -space-y-2 text-Turquoise">
          <Number
            :number="4.374"
            class="font-bold font-super-grotesk-web text-[128px]"
          />
          <p class="text-[32px] font-bold font-super-rotesk-comp">PERSONES</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Number from "@/components/UI/Number.vue";
</script>
