<template>
  <div class=" w-full h-full" id="chart-doughnut">
    <Doughnut v-if="show" :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return {
      show:false,
      data: {
        labels: ['PRIMÀRIA', 'SECUNDÀRIA', 'BATXILLERAT','CICLES FORMATIUS','UNIVERSITATS'],
        datasets: [
          {
            label: '# of Votes',
            data: [24, 33, 34.5,65.5,65.5],
            backgroundColor: [
              '#80676B',
              '#99B5B6',
              '#9DA17C',
              '#D2B569',
              '#DFD3BB'
            ],
            borderWidth: 4
          }
        ],
        observer:null,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    }
  },
  mounted(){
    //observer to trigger animation
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          this.show = true
          observer.unobserve(entry.target)
        }
      })
    }, options)

    // this.observer.observe(document.querySelector('#chart-doughnut'))
  },
  unmounted() {
    // this.observer.disconnect();
  },
}
</script>
