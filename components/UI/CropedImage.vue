<template>
    <div class="img-wrapper">
        <slot />
    </div>
</template>

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
  animation: move 3s ease forwards;
  /* Add infinite to loop. */
  
  -ms-animation: move 3s ease forwards;
  -webkit-animation: move 3s ease forwards;
  -0-animation: move 3s ease forwards;
  -moz-animation: move 3s ease forwards;
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