<template>
    <section class="h-screen max-h-[46.94rem] relative flex justify-center items-center">
        <img v-if="width <= 768" class="z-0 absolute top-0 left-0 h-full w-full object-cover object-center md:hidden" src="/images/territori/hero1.svg" alt="hero" srcset="">
        <img v-else class="hidden z-0 absolute top-0 left-0 h-full w-full object-cover object-left-top md:block" src="/images/territori/hero.svg" alt="" srcset="">
        
        <div class="flex z-10 flex-col items-center gap-y-8 text-center px-4 ">
            <h1 class="text-2xl text-white font-reenie-beanie font-bold tracking-[0.15rem] max-w-[20.2rem] 
                        md:text-[4rem] md:max-w-[28rem] ">Impacte social</h1>
            <h2 class=" text-white text-[2rem] sm:text-[4rem] md:text-[5rem] xl:text-[8rem] leading-normal font-super-grotesk-ot max-w-[68.75rem]">
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