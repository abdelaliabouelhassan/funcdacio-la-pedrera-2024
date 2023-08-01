<template>
    <section class="h-screen max-h-[46.94rem] relative flex justify-center items-center">
        <img v-if="width <= 768 && width != null" class="z-0 absolute top-0 left-0 h-full w-full object-cover object-center md:hidden" src="/images/ocupacio-inclusiva/hero-background.webp" alt="hero" srcset="">
        <img v-if="width > 768 && width != null" class="hidden z-0 absolute top-0 left-0 h-full w-full object-cover object-left-top md:block" src="/images/ocupacio-inclusiva/hero-background-md.webp" alt="hero" srcset="">
        
        <div class="flex z-10 flex-col items-center gap-y-10 text-center px-4 text-white">
            <h1 class="ttext-[2rem] font-medium tracking-[-0.64px] font-reenie-beanie 
                        sm:text-[2.5rem]
                        md:text-[3rem] md:tracking-[-1.28px]
                        lg:text-[4rem] ">Impacte social</h1>
            <h2 class="text-[2.5rem] font-normal tracking-[0.25rem] max-w-[22.2rem] leading-none 
                        sm:text-[4rem] sm:max-w-[28rem]
                        md:text-[6rem] md:max-w-[46.25rem] md:tracking-[0.8rem]
                        lg:text-[8rem]">
                OCUPACIÓ INCLUSIVA
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
     });
 });
</script>