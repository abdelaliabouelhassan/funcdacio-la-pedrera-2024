<template>
  <div class=" w-full h-full">
    <Doughnut  :data="data" :options="options" />
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
}
</script>
