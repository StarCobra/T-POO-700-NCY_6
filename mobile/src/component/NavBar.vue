<template>
  <ion-page style="background: #30323e">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="nav-container" slot="bottom">
        <ion-tab-button class="nav-button" tab="dashboard" href="/dashboard">
          <ion-icon :icon="podiumOutline" />
<!--          <ion-label>DashBoard</ion-label>-->
        </ion-tab-button>

        <ion-tab-button class="nav-button" tab="user" href="/user">
          <ion-icon :icon="peopleOutline" />
<!--          <ion-label>User</ion-label>-->
        </ion-tab-button>

        <ion-tab-button class="nav-button" tab="clock" href="/clock">
          <ion-icon :icon="timerOutline" />
<!--          <ion-label>Clock</ion-label>-->
        </ion-tab-button>

        <ion-tab-button class="nav-button" tab="workingtime" href="/workingtime">
          <ion-icon :icon="timeOutline" />
<!--          <ion-label>WorkingTime</ion-label>-->
        </ion-tab-button>

        <ion-tab-button class="nav-button" tab="profile" href="/profile">
          <ion-icon :icon="personOutline" />
          <!--          <ion-label>User</ion-label>-->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { podiumOutline, peopleOutline,timerOutline, timeOutline ,personOutline } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      podiumOutline,
      peopleOutline,
      timerOutline,
      timeOutline,
      personOutline,
    };
  },
};
</script>

<style>
.nav-container{
  margin: 8px;
  background: #dddddd !important;
  border-radius: 24px;
  box-shadow:  5px 5px 10px #292b35,
  -5px -5px 10px #373a47;
}

.nav-button{
  background: #dddddd !important;
}
</style>