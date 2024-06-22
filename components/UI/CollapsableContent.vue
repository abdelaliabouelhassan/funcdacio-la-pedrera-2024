<template>
  <div v-collapsable class="collapsable">
    <!-- collapsable content -->
    <div ref="content" class="collapsable-content list-disc">
      <slot />
    </div>
    <!-- collapsable btn -->
    <button class="collapse-btn flex items-center w-fit gap-x-3 py-2.5 mt-2.5">
      <span class="collapse-btn-content">Més</span>
      <svg
        class="collapse-btn-chevron w-6"
        width="24"
        height="11"
        viewBox="0 0 24 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.1182 0.882642L11.9584 9.7085L0.798654 0.882642"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
