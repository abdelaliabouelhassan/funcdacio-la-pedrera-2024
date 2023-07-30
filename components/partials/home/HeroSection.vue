<template>
    <section class="h-screen max-h-[46.94rem] relative flex justify-center items-center">
        <img v-if="width <= 768 && width != null" class="z-0 absolute top-0 left-0 h-full w-full object-cover object-center md:hidden" src="/images/home/hero-background.svg" alt="" srcset="">
        <img  v-if="width > 768 && width != null" class="hidden z-0 absolute top-0 left-0 h-full w-full object-cover object-left-top md:block" src="/images/home/hero-background-md.svg" alt="" srcset="">
        
        <div class="flex z-10 flex-col items-center gap-y-8 text-center px-4 ">
            <h1 class="text-2xl font-bold tracking-[0.15rem] max-w-[20.2rem] 
                        md:text-[2rem] md:max-w-[28rem] ">A la Fundació Catalunya La Pedrera</h1>
            <h2 class="text-[8rem] font-reenie-beanie leading-[3.75rem] tracking-[-4px] text-white max-w-[22.2rem] 
                        md:text-[16rem] md:leading-[9.375rem] md:max-w-[46.25rem]">tenim un somni</h2>
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