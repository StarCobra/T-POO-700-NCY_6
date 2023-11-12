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
import { Line } from 'vue-chartjs';
import { useEmployeStore } from '@/stores/EmployeChartStore';
import { computed, onBeforeMount } from 'vue';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default {
  name: 'EmployeChart',
  components: {
    Line
  },
  setup() {
    const timeStore = useEmployeStore();
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
  <Line v-if="isLoaded" id="my-chart-id" :options="options" :data="data" />
  <div v-else>Loading...</div>
</template>
