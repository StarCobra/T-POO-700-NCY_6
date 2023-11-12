<template>
  <ion-page>
    <Header :title="'Working Time'"/>
    <ion-content>
      <div class="body-container">
        <div class="body-form-item">
          <H2 class="body-form-title">AddWorkingTime</H2>
          <form class="body-form-flex-item" action="" method="post">
            <div class="body-row-field">
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-userID"
                  placeholder="userID"
                  v-model="workingTime.userId"
              />
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-workingtimeID"
                  placeholder="workingtimeID"
                  v-model="workingTime.id"
              />

              <ion-datetime-button
                  class="button-timer-item"
                  id="input-startDateTime-date"
                  datetime="startDateTime-date"
              />

              <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="startDateTime-date" class="timer-item"></ion-datetime>
              </ion-modal>

              <ion-datetime-button
                  class="button-timer-item"
                  id="input-endDateTime-date"
                  datetime="endDateTime-date"
              />

              <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="endDateTime-date"></ion-datetime>
              </ion-modal>
              <!--          <input
                          class="body-row-field-item"
                          type="date"
                          id="input-endDateTime-date"
                          placeholder="startDateTime"
                          v-model="workingTime.end"
                        />-->
              <!--          <input
                          class="body-row-field-item"
                          type="time"
                          id="input-endDateTime-time"
                          placeholder="endDateTime"
                          v-model="workingTime.end"
                        />-->
            </div>
            <div class="body-row-input">
              <button
                  class="body-row-input-item"
                  id="btn-create-workingtime"
                  @click="createWorkingTime(workingTime, $event)"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div class="body-form-item">
          <H2 class="body-form-title">SetWorkingTime</H2>
          <form class="body-form-flex-item" action="" method="post">
            <div class="body-row-field">
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-userID"
                  placeholder="userID"
                  v-model="workingTime.userId"
              />
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-workingtimeID"
                  placeholder="workingtimeID"
                  v-model="workingTime.id"
              />
              <ion-datetime-button
                  class="button-timer-item"
                  id="input-startDateTime-date"
                  datetime="startDateTime-date"
              />

              <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="startDateTime-date" class="timer-item"></ion-datetime>
              </ion-modal>

              <ion-datetime-button
                  class="button-timer-item"
                  id="input-endDateTime-date"
                  datetime="endDateTime-date"
              />

              <ion-modal :keep-contents-mounted="true">
                <ion-datetime id="endDateTime-date"></ion-datetime>
              </ion-modal>
            </div>
            <div class="body-row-input">
              <button
                  class="body-row-input-item"
                  id="btn-update-workingtime"
                  @click="updateWorkingTime(workingTime, $event)"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div class="body-form-item">
          <H2 class="body-form-title">RemoveWorkingTime</H2>
          <form class="body-form-flex-item" action="" method="post">
            <div class="body-row-field">
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-userID"
                  placeholder="userID"
                  v-model="workingTime.userId"
              />
              <input
                  class="body-row-field-item"
                  type="text"
                  id="input-workingtimeID"
                  placeholder="workingtimeID"
                  v-model="workingTime.id"
              />
            </div>
            <div class="body-row-input">
              <button
                  class="body-row-input-item"
                  id="btn-delete-workingtime"
                  @click="removeWorkingTime(workingTime, $event)"
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
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,IonDatetime, IonDatetimeButton, IonModal } from '@ionic/vue';

import Header from "@/component/Header.vue";
import {createWorkingTime, removeWorkingTime, updateWorkingTime} from "@/services/WorkingTimeManager";
import { defineComponent } from 'vue';
import { WorkingTime } from '@/class/WorkingTime';

export default {
  setup(){
    let workingTime = new WorkingTime();
    return{
      workingTime
    }
  },
  methods: {removeWorkingTime, updateWorkingTime, createWorkingTime},
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Header,IonDatetime, IonDatetimeButton, IonModal },
};
</script>