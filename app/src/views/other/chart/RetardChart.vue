<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  name: 'LineChart',
  components: { Doughnut },
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [{ data: [40, 35, 30, 25, 20, 25, 30, 35, 40, 45, 40, 35] }]
      },
      chartOptions: {
        responsive: true
      }
    };
  }
};
</script>

<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
