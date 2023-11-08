<template>
  <ion-page>
    <Header :title="'Clock'"/>
    <ion-content>
      <div class="body-container">
        <div class="body-form-item">
          <H2 class="body-form-title">GetClock</H2>
          <form class="body-form-flex-item" action="" method="post">
            <div class="body-row-field">
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-userID"
                  placeholder="userID"
                  v-model="clock.userId"
              />
            </div>
            <div class="body-row-input">
              <button class="body-row-input-item" id="btn-get-clock" @click="getClocks(clock, $event)">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div class="body-form-item">
          <H2 class="body-form-title">Beta addClock</H2>
          <form class="body-form-flex-item" action="" method="post">
            <div class="body-row-field">
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-userID"
                  placeholder="userID"
                  v-model="clock.userId"
              />
            </div>
            <div class="body-row-input">
              <button
                  class="body-row-input-item"
                  id="btn-create-clock"
                  @click="postClock(clock, $event)"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
import Header from "@/component/Header.vue";
import { postClock, getClocks } from '@/services/ClockManager';
import { Clock } from '@/class/Clock';

export default {
  setup(){
    let clock = new Clock();
    return {
      clock
    };
  },
  methods: {postClock, getClocks},
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Header },
};
</script>