<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>

<template>
  <ion-page>
    <Header :title="'Dashboard'"/>
    <ion-content>
      <div class="example-content">Listen now content</div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

import Header from "@/component/Header.vue";

export default {
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Header },
};
</script>