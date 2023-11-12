<template>
  <ion-app style="background: #30323e">
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';

import { defineComponent } from 'vue';

const username = localStorage.getItem('username');
if (username == null && window.location.pathname !== '/login') {
  window.location.href = '/login';
}
import Example from './component/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: { IonApp, IonRouterOutlet },
});
</script>
