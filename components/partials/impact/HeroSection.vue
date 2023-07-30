<template>
    <section class="h-screen max-h-[46.94rem] relative flex justify-center items-center">
        <img v-if="width <= 768" class="z-0 absolute top-0 left-0 h-full w-full object-cover object-center md:hidden" src="/images/impact/hero-background.svg" alt="" srcset="">
        <img v-else class="hidden z-0 absolute top-0 left-0 h-full w-full object-cover object-bottom md:block" src="/images/impact/hero-background-md.svg" alt="" srcset="">
        
        <div class="flex z-10 flex-col items-center gap-y-8 text-center px-4 text-white">
            <h2 class="text-[2rem] font-medium tracking-[-0.64px] font-reenie-beanie 
                        sm:text-[2.5rem]
                        md:text-[3rem] md:tracking-[-1.28px]
                        lg:text-[4rem]">Reimaginar la Fundació</h2>
            <h1 class="text-[2.5rem] font-normal tracking-[0.8rem] max-w-[22.2rem] leading-none 
                        sm:text-[4rem] sm:max-w-[28rem]
                        md:text-[6rem] md:max-w-[46.25rem]
                        lg:text-[8rem]">IMPACTE SOCIAL</h1>
        </div>
    </section>
</template>

<script setup>
const width = ref(null);
 onMounted(() => {
     width.value = window.innerWidth;
     window.addEventListener("resize", () => {
         width.value = window.innerWidth;
     });
 });
</script>