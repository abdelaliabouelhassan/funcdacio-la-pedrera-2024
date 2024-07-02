<template>
  <section class="w-full">
    <div class="w-full max-w-[850px] mx-auto py-16 px-4 sm:px-8">
      <div
        class="w-full flex md:flex-row flex-col items-center space-y-20 md:space-y-0 md:justify-between"
      >
        <div class="flex flex-col text-center space-y-2">
          <span
            class="text-[#89562C] font-medium leading-[3.75rem] font-super-grotesk-web text-[8rem]"
            ><Number :number="5.167"
          /></span>
          <span
            class="text-[#89562C] font-medium leading-[2.5rem] font-super-rotesk-comp pt-7 text-[4rem]"
            >persones</span
          >
        </div>
        <div class="md:max-w-[26.625rem] w-full">
          <p class="text-lg font-bold text-black font-super-rotesk-comp">
            A la Fundació Catalunya La Pedrera apostem per l’alimentació
            saludable, dirigida especialment a aquelles persones que afronten un
            problema de salut. Per això, sota la direcció científica de la
            Fundació Alícia, també promovem projectes alimentaris especialitzats
            per oferir coneixement i recomanacions sobre el tipus d’alimentació
            més convenient en cada cas.
          </p>
        </div>
      </div>
    </div>

    <div class="w-full py-16 sm:px-8 md:px-4 lg:px-12">
      <div
        class="w-full max-w-[1097px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 md:space-y-0 items-start md:justify-between"
      >
        <div
          class="w-full md:max-w-[27.5rem] space-y-8 border-t border-black px-4 sm:px-0"
        >
          <h1
            class="text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4"
          >
            ALIMENTACIÓ PER A PERSONES AMB NECESSITATS ESPECIALS
          </h1>
          <p class="text-black text-lg font-normal font-super-grotesk-ot">
            La Fundació Catalunya La Pedrera vol millorar l’alimentació de
            tothom, sigui quina sigui la seva situació vital, i especialment de
            les persones que estan patint un problema de salut. Es va posar en
            marxa la plataforma web ‘Menjar durant el tractament del càncer’,
            una eina digital i gratuïta, un espai a la xarxa per ajudar les
            persones que estan en tractament oncològic, els seus familiars,
            cuidadors i també personal sanitari, a tenir cura de la seva
            alimentació durant el procés, sense renunciar a gaudir del menjar.
            <br />
            <br />
            L’objectiu se centra a ajudar les persones amb càncer a mantenir un
            estat nutricional òptim, explicant les bases de l’alimentació que
            cal seguir després del diagnòstic de la malaltia. Els continguts
            desenvolupats pretenen donar consells dietètics més concrets sobre
            com menjar durant les diferents fases del tractament i durant
            l’aparició dels efectes secundaris més comuns que poden afectar el
            sistema digestiu i, per tant, la gana i la tolerància a la dieta.
            <br />
            <br />
            Durant el 2023 s’han treballat les següents accions a l’entorn de la
            web (www.oncoalicia.com): <br />
            <br />
            • Desenvolupament d’un fullet descarregable i imprimible amb les
            recomanacions bàsiques sobre menjar durant el tractament de càncer
            perquè els centres hospitalaris el puguin lliurar als pacients o
            cuidadors, on s’inclou un codi QR que facilita l’accés a la
            plataforma. <br />
            <br />
            • Realització d’un estudi d’usabilitat de la plataforma amb pacients
            i professionals de l’Hospital Clínic de Barcelona. <br />
            <br />
            • Revisió i actualització de l’apartat ‘Mites i creences’ amb nova
            evidència científica i altres aspectes d’interès. <br />
            <br />
            • Creació de continguts sobre un nou tipus de tumor, el càncer
            gàstric, amb la col·laboració de l’Institut Català d’Oncologia de
            Badalona (Can Ruti). Aquests seran incorporats al web durant el
            segon trimestre de 2024. <br />
            <br />
            • Desenvolupament de nous continguts sobre fatiga crònica com un
            dels principals efectes secundaris del tractament oncològic. <br />
            <br />
            • Traducció de tots els continguts de la web al portuguès, amb la
            col·laboració de SENAC (Serviço Nacional de Aprendizagem Comercial)
            de Brasil, una institució educativa formada per diverses
            organitzacions dedicades a la formació professional i l’educació
            tècnica en diversos sectors, també en el gastronòmic i nutricional.
            <br />
            <br />
            • S’ha aconseguit la certificació com a web mèdic acreditat per al
            Col·legi de Metges de Barcelona. <br />
            <br />
            • Sessió de formació per a dietistes-nutricionistes adherits o
            interessats en el programa “Això s’ho val!” del Col·legi de
            Dietistes-Nutricionistes de Catalunya (CODINUCAT). Barcelona, abril
            2023 <br />
            <br />
            • Participació en la setmana de l’experiència al pacient de
            l’Hospital Clínic de Barcelona. Barcelona, març 2023. <br />
            <br />
            • Sessió divulgativa amb demostració culinària relacionada amb
            l’alimentació durant el tractament oncològic, en el marc de la
            Setmana de la Lluita Contra el Càncer de l’Ajuntament de Pineda de
            Mar. Pineda de Mar, febrer 2023. <br />
            <br />
            • Participació en el XXI Congrés Català de Sinologia i Patologia de
            Mama. Santa Susanna, juny 2023.
          </p>
        </div>
        <div class="w-full md:max-w-[37.5rem] h-[40rem] overflow-hidden">
          <img
            src="/images/alimentacio/Fundacio_Catalunya_laPedrera.svg"
            class="w-full h-full object-cover"
            alt="ALIMENTACIÓ"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Number from "@/components/UI/Number.vue";
</script>
