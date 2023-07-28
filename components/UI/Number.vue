<template>
    <div ref="numberComponent">
        {{displayedNumber}}
    </div>
</template>
<script setup>
const props = defineProps({
    number:{type:Number, required:true}
})
const numberComponent = ref(null)
const displayedNumber = ref(0)
let numberOfDecimals = null
let interval = null

function countDecimals(number) {
  const numberString = number.toString();
  const decimalIndex = numberString.indexOf('.');

  if (decimalIndex === -1) {
    numberOfDecimals = 0; // No decimal places found
  } else {
    numberOfDecimals = numberString.length - decimalIndex - 1;
  }
}

function increase() {
    clearInterval(interval)
    // displayedNumber.value = props.number/200
    interval = setInterval(() => {
        let temp = displayedNumber.value + props.number/100
        displayedNumber.value = +temp.toFixed(numberOfDecimals)
        if(displayedNumber.value >= props.number){
            displayedNumber.value = props.number
            clearInterval(interval)
        }
    }, 20);
}
function decrease() {
    clearInterval(interval)

    interval = setInterval(() => {
        let temp = displayedNumber.value - props.number/100
        displayedNumber.value = +temp.toFixed(numberOfDecimals)
        if(displayedNumber.value <= 0){
            displayedNumber.value = 0
            clearInterval(interval)
        }

    }, 20);
}
onMounted(() => {
    countDecimals(props.number)

    let temp =props.number/200
    displayedNumber.value = +temp.toFixed(numberOfDecimals)
    const observer = new IntersectionObserver((entries, observer)=>{
         entries.forEach((entry) => {
            if(entry.isIntersecting){
                increase()
            }else{
                decrease()
            }
         })
    }, {threshold:0.2});
    observer.observe(numberComponent.value)
    
})
</script>