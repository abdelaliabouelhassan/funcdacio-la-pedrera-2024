<template>
    <span ref="numberComponent">
        <span v-if="dot_formated">{{formatedNumber}}</span>
        <span v-else>{{displayedNumber}}</span>
        
    </span>
</template>
<script setup>

const props = defineProps({
    number:{type:Number, required:true},
    dot_formated:{type:Boolean, required:false, default:false}
})
const numberComponent = ref(null)
const displayedNumber = ref(0)
let numberOfDecimals = ref(null)
let interval = ref(null)
let observer = null
const formatedNumber = computed(() => displayedNumber.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') )

function countDecimals(number) {
  const numberString = number.toString();
  const decimalIndex = numberString.indexOf('.');

  if (decimalIndex === -1) {
    numberOfDecimals.value =  0; // No decimal places found
  } else {
    numberOfDecimals.value = numberString.length - decimalIndex - 1;
  }
}

function increase() {
    clearInterval(interval.value)
    // displayedNumber.value = props.number/200
    interval.value = setInterval(() => {
        let temp = displayedNumber.value + props.number/100
        if(props.number/100 < 1 && !numberOfDecimals.value){
            displayedNumber.value = +temp.toFixed(2)
        }else{
            displayedNumber.value = +temp.toFixed(numberOfDecimals.value)
        }
        
        if(displayedNumber.value >= props.number){
            displayedNumber.value = props.number
            clearInterval(interval.value)
        }
        
    }, 20);
}
function decrease() {
    clearInterval(interval.value)

    interval.value = setInterval(() => {
        let temp = displayedNumber.value - props.number/100
        if(props.number/100 < 1 && !numberOfDecimals.value){
            displayedNumber.value = +temp.toFixed(2)
        }else{
            displayedNumber.value = +temp.toFixed(numberOfDecimals.value)
        }
        
        if(displayedNumber.value <= 0){
            displayedNumber.value = 0
            clearInterval(interval.value)
        }


    }, 20);
}
onMounted(() => {
    countDecimals(props.number)
    let temp =props.number/200
    displayedNumber.value = +temp.toFixed(numberOfDecimals.value)
    observer = new IntersectionObserver((entries, observer)=>{
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
onUnmounted(() => {
    observer.disconnect()
})
</script>