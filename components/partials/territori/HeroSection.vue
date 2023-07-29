<template>
    <section class="h-screen max-h-[46.94rem] relative flex justify-center items-center">
        <img v-if="width <= 768" class="z-0 absolute top-0 left-0 h-full w-full object-cover object-center md:hidden" src="/images/territori/hero1.svg" alt="hero" srcset="">
        <img v-else class="hidden z-0 absolute top-0 left-0 h-full w-full object-cover object-left-top md:block" src="/images/territori/hero.svg" alt="" srcset="">
        
        <div class="flex z-10 flex-col items-center gap-y-10 text-center px-4 text-white">
            <h1 class="text-[2rem] font-medium tracking-[-0.64px] font-reenie-beanie 
                        sm:text-[2.5rem]
                        md:text-[3rem] md:tracking-[-1.28px]
                        lg:text-[4rem]">Impacte social</h1>
            <h2 class=" text-[1.4rem] xs:text-[2.5rem] font-normal tracking-[0.8rem] max-w-[28.2rem] leading-none 
                        sm:text-[3.6rem] sm:max-w-[34rem]
                        md:text-[5rem] md:max-w-[46.25rem]
                        lg:text-[7rem] lg:max-w-[57rem]">
               SOSTENIBILITAT <br> I TERRITORI
            </h2>
        </div>
    </section>
</template>


<script setup>
 const width = ref(null);
 onMounted(() => {
     width.value = window.innerWidth;
     window.addEventListener("resize", () => {
         width.value = window.innerWidth;
         console.log(width.value);
     });
 });
</script>