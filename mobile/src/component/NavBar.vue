<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/dashboard">
          <ion-icon :icon="podiumOutline" />
          <ion-label>DashBoard</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="user" href="/user">
          <ion-icon :icon="personOutline" />
          <ion-label>User</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="clock" href="/clock">
          <ion-icon :icon="timerOutline" />
          <ion-label>Clock</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="workingtime" href="/workingtime">
          <ion-icon :icon="timeOutline" />
          <ion-label>WorkingTime</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { podiumOutline, personOutline , timerOutline, timeOutline } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      podiumOutline,
      personOutline,
      timerOutline,
      timeOutline,
    };
  },
};
</script>