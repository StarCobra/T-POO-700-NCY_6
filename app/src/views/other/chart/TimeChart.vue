<script lang="ts">
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
export default {
  name: 'LineChart',
  components: { Line },
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
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<style scoped></style>
