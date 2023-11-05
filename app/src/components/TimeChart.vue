<script>
import { computed } from 'vue';
import { useTimeStore } from '@/stores/TimeChartStore'; // Importez le store du graphique

export default {
  setup() {
    const timeStore = useTimeStore();
    const timeData = computed(() => timeStore.chartData);

    const fetchTimeData = () => {
       timeStore.fetchData(); // Appeler l'action pour récupérer les données
    };

    return {
      timeData,
      fetchTimeData,
    };
  },
};
</script>

<template>
  <div>
    <p>Données du graphique : {{ timeData }}</p>
    <button @click="fetchTimeData">Récupérer les données</button>
  </div>
</template>

<style scoped>

</style>