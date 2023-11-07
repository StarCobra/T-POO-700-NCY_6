<script>
import AppHeader from '@/components/AppHeader.vue';
import AppBody from '@/views/AppBody.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useTimeStore } from '@/stores/TimeChartStore';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppBody,
    AppFooter
  }
  /*async created() {
    const store = useTimeStore()
    try {
      await store.getUsers()
    } catch (error) {
      console.error(error)
    }
  }*/
};
</script>

<template>
  <main class="background">
    <AppHeader />
    <div class="padding">
      <AppBody />
    </div>
    <AppFooter />
  </main>
</template>

<style scoped>
.background {
  background: #30323e;
}

.padding {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  padding: 16px;
}

.disable {
  display: none;
  visibility: hidden;
}

.disable div {
  display: none;
  visibility: hidden;
}
</style>
