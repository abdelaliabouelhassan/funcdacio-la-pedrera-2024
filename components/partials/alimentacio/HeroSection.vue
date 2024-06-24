<template>
  <section
    class="h-screen max-h-[63.6rem] relative flex justify-center items-center"
  >
    <img
      v-if="width <= 768 && width != null"
      class="z-0 absolute top-0 left-0 h-full w-full object-cover object-center md:hidden"
      src="/images/alimentacio/hero-background.webp"
      alt="hero"
      srcset=""
    />
    <img
      v-if="width > 768 && width != null"
      class="hidden z-0 absolute top-0 left-0 h-full w-full object-cover object-left-top md:block"
      src="/images/alimentacio/hero-background-md.webp"
      alt="hero"
      srcset=""
    />

    <div
      class="flex z-10 flex-col items-center gap-y-10 text-center px-4 text-white"
    >
      <h1
        class="text-[2rem] font-medium tracking-[-0.64px] font-super-rotesk-comp sm:text-[2.5rem] md:text-[3rem] md:tracking-[-1.28px] lg:text-[4rem]"
      >
        Impacte social
      </h1>
      <h2
        class="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[8rem] leading-[1] font-super-rotesk-comp tracking-[0.25rem] md:tracking-[0.8rem] max-w-[68.75rem]"
      >
        ALIMENTACIÓ <br />
        PER A LA SALUT
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
