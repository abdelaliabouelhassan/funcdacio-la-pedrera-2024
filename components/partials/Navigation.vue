<template>
  <div
    class="hidden md:flex flex-col gap-y-6 p-2.5 fixed right-8 top-1/2 -translate-y-1/2 z-40"
  >
    <nuxt-link
      to="/ocupacio-inclusiva"
      class="rounded-full w-4 h-4 relative group bg-Ocre text-white"
      aria-label="Ocupació inclusiva"
    >
      <div
        class="hidden absolute right-6 -top-full px-1 opacity-0 transition-opacity duration-150 ease-in-out group-hover:block group-hover:opacity-100 text-shadow"
      >
        OCUPACIÓ INCLUSIVA
      </div>
    </nuxt-link>
    <nuxt-link
      to="/envelliment-digne"
      class="rounded-full w-4 h-4 relative group bg-Beige text-white"
      aria-label="Envelliment digne"
    >
      <div
        class="hidden absolute right-6 -top-full px-1 opacity-0 transition-opacity duration-150 ease-in-out group-hover:block group-hover:opacity-100 text-shadow"
      >
        ENVELLIMENT DIGNE
      </div>
    </nuxt-link>
    <nuxt-link
      to="/vocacio"
      class="rounded-full w-4 h-4 relative group bg-Turquoise text-white"
      aria-label="Vocació i talent"
    >
      <div
        class="hidden absolute right-6 -top-full px-1 opacity-0 transition-opacity duration-150 ease-in-out group-hover:block group-hover:opacity-100 text-shadow"
      >
        VOCACIÓ I TALENT
      </div>
    </nuxt-link>
    <nuxt-link
      to="/territori"
      class="rounded-full w-4 h-4 relative group bg-Olive-Green text-white"
      aria-label="Sostenibilitat i territori"
    >
      <div
        class="hidden absolute right-6 -top-full px-1 opacity-0 transition-opacity duration-150 ease-in-out group-hover:block group-hover:opacity-100 text-shadow"
      >
        SOSTENIBILITAT I TERRITORI
      </div>
    </nuxt-link>
    <nuxt-link
      to="/alimentacio"
      class="rounded-full w-4 h-4 relative group bg-Brown text-white"
      aria-label="Alimentació per a la salut"
    >
      <div
        class="hidden absolute w-[7.2rem] right-6 -top-full px-1 opacity-0 transition-opacity duration-150 ease-in-out group-hover:block group-hover:opacity-100 text-shadow"
      >
        ALIMENTACIÓ PER A LA SALUT
      </div>
    </nuxt-link>
    <nuxt-link
      to="/exposicions"
      class="rounded-full w-4 h-4 relative group bg-Turquoise text-white"
      aria-label="Alimentació per a la salut"
    >
      <div
        class="hidden absolute w-[7.2rem] right-6 -top-full px-1 opacity-0 transition-opacity duration-150 ease-in-out group-hover:block group-hover:opacity-100 uppercase text-shadow"
      >
        Mirada de Creació i reflexió
      </div>
    </nuxt-link>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0px 1px 4px #00000066;
}
</style>
