<template>
    <div  class=" w-full h-full">
    <Bar
        :options="chartOptions"
        :data="chartData"
    />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [ '2018','2019','2020', '2021', '2022' ],
        datasets: [
          {
            label: 'Personal d’Estructura',
            backgroundColor: '#9DA17C',
            data: [ 10, 16, 19, 17, 19 ]
          },
          {
            label: 'MANS',
            backgroundColor: '#80676B',
            data: [ 49, 50, 53, 51, 52 ]
          },
          {
            label: 'Horts de Sant Benet',
            backgroundColor: '#99B5B6',
            data: [ 52, 53, 57, 64, 69 ]
          },
          {
            label: 'Topromi',
            backgroundColor: '#D2B569',
            data: [ 54, 57, 64, 75, 78 ]
          },
          {
            label: 'Molí d’en Puigver',
            backgroundColor: '#DFD3BB',
            data: [ 58, 62, 69, 79, 83 ]
          }
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: false
          }
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              font: {
                size: 14,
                family: 'SuperGroteskComp',
                weight: 'bold'
              }
            }
          }
        },
        //animation when observable is true
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }

      },
    }
  },
}
</script>