<script lang="ts">
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Scatter } from 'vue-chartjs';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default {
  name: 'LineChart',
  components: { Scatter },
  data() {
    return {
      chartData: {
        labels: [
          5,
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
  <Scatter id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
