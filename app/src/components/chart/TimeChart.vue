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
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'TimeChart',
  components: {
    Bar
  },
  setup() {
    const timeStore = useTimeStore();

    let data = null;
    let isLoaded = false;

    const options = {
      responsive: true,
      maintainAspectRatio: false
    }

    onBeforeMount(async () => {
      await timeStore.fetchData();

      const timeData = computed(() => timeStore?.datasets);

      if (timeData.value) {
        data = {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          datasets: [
            {
              type: timeData.value[0]?.type || '',
              label: timeData.value[0]?.label || '',
              backgroundColor: '#f87979',
              data: timeData.value[0]?.data || 0
            },
            {
              type: timeData.value[1]?.type || '',
              label: timeData.value[1]?.label || '',
              backgroundColor: '#0096ff',
              data: timeData.value[1]?.data || 0
            }
          ],
        };
        isLoaded = true;
      }
    });

    return {
      isLoaded,
      data,
      options,
    };
  },
};
</script>

<template>
  <div>
    <Bar v-if="isLoaded" id="my-chart-id" :options="options" :data="data" />
    <div v-else>
      Loading...
    </div>
  </div>
</template>
