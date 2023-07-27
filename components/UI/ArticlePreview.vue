<template>
    <div class="flex flex-col gap-y-12 justify-center items-center
                md:flex-row md:gap-x-14">
        <!-- img container -->
        <div class="img-wrapper shrink-0" :class="{'md:order-2':mode==='right'}">
            <slot name="img" />
        </div>
        <div class="flex flex-col gap-y-6 max-w-[27.5rem]" :class="{'md:order-1':mode==='right'}"> 
            <div class="font-reenie-beanie">
                <slot name="number" />
            </div>
            <h1><slot name="title" /></h1>
            <div><slot name="description" /></div>
            <button class="bg-black py-4 rounded-full w-full flex items-center justify-center gap-x-4 text-white ">
                <span class="text-xl font-bold "> Més informació</span>
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_203_1607)">
                    <path d="M2.01838 1.50684L10.8442 12.6666L2.01838 23.8263" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_203_1607">
                    <rect width="24" height="12.48" fill="white" transform="matrix(0 1 -1 0 13 0.625)"/>
                    </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    mode:{
        type:String,
        default:'left'
    },
    
})

</script>
<style scoped>
.img-wrapper {
    width: 332px;
    height: 322.625px;
    overflow: hidden;
    position: relative;
    clip-path: path('M153.606 3.25837C80.6568 17.1883 34.0097 70.4644 19.8048 95.3611C-25.5593 170.051 14.9084 220.918 61.9613 261.696C103.202 297.438 156.355 316.683 182.474 321.265C216.23 327.222 291.256 316.683 321.315 226.871C351.375 137.06 310.929 66.3404 286.949 42.2073C272.896 23.4202 226.555 -10.6716 153.606 3.25837Z');
}

.img-wrapper:hover :deep(img) {
  width: 150%;
  position: absolute;
  animation: move 30s ease;
  /* Add infinite to loop. */
  
  -ms-animation: move 30s ease;
  -webkit-animation: move 30s ease;
  -0-animation: move 30s ease;
  -moz-animation: move 30s ease; 
}

@keyframes move {
  0% {
    -webkit-transform-origin: bottom left;
    -moz-transform-origin: bottom left;
    -ms-transform-origin: bottom left;
    -o-transform-origin: bottom left;
    transform-origin: bottom left;
    transform: scale(1.0);
    -ms-transform: scale(1.0);
    /* IE 9 */
    
    -webkit-transform: scale(1.0);
    /* Safari and Chrome */
    
    -o-transform: scale(1.0);
    /* Opera */
    
    -moz-transform: scale(1.0);
    /* Firefox */
  }
  100% {
    transform: scale(1.2);
    -ms-transform: scale(1.2);
    /* IE 9 */
    
    -webkit-transform: scale(1.2);
    /* Safari and Chrome */
    
    -o-transform: scale(1.2);
    /* Opera */
    
    -moz-transform: scale(1.2);
    /* Firefox */
  }
}
</style>