<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Doughnut} from 'vue-chartjs';
import {useRetardStore} from "@/stores/RetardChartStore";
import {computed, onBeforeMount} from "vue";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: 'RetardChart',
  components: {
    Doughnut
  },
  setup() {
    const timeStore = useRetardStore();
    const options = {
      responsive: true,
      maintainAspectRatio: false
    }

    onBeforeMount(async () => {
      await timeStore.fetchData();
    });

    return {
      isLoaded: computed(() => timeStore.isLoaded),
      data: computed(() => timeStore.chartData),
      options,
    };
  },
};
</script>

<template>
  <Doughnut v-if="isLoaded" id="my-chart-id" :options="options" :data="data" />
  <div v-else>
    Loading...
  </div>
</template>
