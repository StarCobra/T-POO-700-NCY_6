<script>
import { computed, onBeforeMount } from 'vue';
import { useTimeStore } from '@/stores/TimeChartStore';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default {
  name: 'TimeChart',
  components: {
    Bar
  },
  setup() {
    const timeStore = useTimeStore();
    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    onBeforeMount(async () => {
      await timeStore.fetchData();
    });

    return {
      isLoaded: computed(() => timeStore.isLoaded),
      data: computed(() => timeStore.chartData),
      options
    };
  }
};
</script>

<template>
  <div>
    <Bar v-if="isLoaded" id="my-chart-id" :options="options" :data="data" />
    <div v-else>Loading...</div>
  </div>
</template>
