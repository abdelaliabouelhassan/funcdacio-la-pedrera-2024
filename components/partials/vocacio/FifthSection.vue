<template>
    <section class="w-full  py-16 px-4 sm:px-8 md:px-4 lg:px-12">
        <div class=" w-full max-w-[828.9px] mx-auto flex md:flex-row flex-col space-y-16 md:space-x-10 xl:space-x-0 md:space-y-0 items-start md:justify-between">
            <div class="w-[330px] mx-auto h-[380px] overflow-hidden text-white flex flex-col justify-center">
                <ChartDoughnut />
            </div>
            <div class="w-full md:max-w-[27.5rem] space-y-10">
                <div class=" w-full  space-y-8 border-t border-black">
                    <h1 class=" text-black text-[2rem] font-bold font-super-rotesk-comp leading-[1] pt-4">AJUDES A L’ESTUDI</h1>
                    <p class="  text-black text-lg font-normal font-super-grotesk-ot ">
                        La Fundació Catalunya La Pedrera vol garantir que tothom pugui accedir als seus projectes educatius, independentment de la seva situació econòmica, i per aquest motiu té una línia de beques que, en el cas del Programa d’Acompanyament Educatiu, ha beneficiat un total de 150 alumnes, el que suposa un 10% dels infants participants. A banda d’aquests ajuts, també s’han donat 55 beques més a altres estudiants perquè poguessin seguir amb els seus estudis obligatoris i postobligatoris.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template> 
<script setup>
import ChartDoughnut from '@/components/UI/ChartDoughnut.vue'
</script>