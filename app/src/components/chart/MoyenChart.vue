<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'vue-chartjs';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default {
  name: 'RadarChart',
  components: { Radar },
  data() {
    return {
      chartData: {
        labels: ['Max delay', 'Moy delay', 'On Time', 'Moy Advance', 'Max Advance', 'Absence'],
        datasets: [
          {
            label: 'All time',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [30, 30, 30, 30, 30, 30]
          },
          {
            label: 'Month',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [20, 45, 25, 20, 30, 45]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    };
  }
};
</script>

<template>
  <button>select</button>
  <Radar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
