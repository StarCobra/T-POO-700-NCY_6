<template>
  <ion-page>
    <Header :title="'Dashboard'"/>
    <ion-content>
      <div class="body-container">
        <div class="body-card-item">
          <time-chart />
        </div>
        <div class="body-card-item">
          <retard-chart />
        </div>
        <div class="body-card-item">
          <employe-chart />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import TimeChart from "@/component/chart/TimeChart.vue";
import RetardChart from '@/component/chart/RetardChart.vue';
import EmployeChart from '@/component/chart/EmployeChart.vue';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

import Header from "@/component/Header.vue";

export default {
  components: {
    IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Header,
    TimeChart,RetardChart,EmployeChart
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.body-container {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
}

.body-card-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eeeeee;
  border-radius: 25px;
  width: calc(100% - 8px);
  padding: 8px;

  box-shadow:
      16px 16px 32px #1c1c1c,
      -16px -16px 32px #343434;
}

/*.body-form-item {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #eeeeee;
  border-radius: 25px;
  padding: 8px;

  box-shadow:
      16px 16px 32px #1c1c1c,
      -16px -16px 32px #343434;
}

.body-form-flex-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.body-form-title {
  color: #30323e;
  font-family: 'Work Sans', sans-serif;
  padding: 8px;
}

!*Region Field*!

.body-row-field {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
}

.body-row-field-item {
  padding: 8px;
  border: none;
  border-radius: 50px;
  background: #dddddd;
  box-shadow:
      inset 2px 2px 8px #bebcbc,
      inset -2px -2px 8px #fffefe;
  font-family: 'Work Sans', sans-serif;
}

.body-row-field-item:focus {
  outline: none;
}
!*End Field*!

!*Region Input*!

.body-row-input {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 8px;
}

.body-row-input-item {
  padding: 8px;
  border: none;
  border-radius: 50px;
  color: #dddddd;
  background: linear-gradient(145deg, #333642, #2b2d38);
  box-shadow:
      4px 4px 8px #9b9b9b,
      -4px -4px 8px #ffffff;
  font-family: 'Work Sans', sans-serif;
}

.body-row-input-item:hover {
  padding: 8px;
  border: none;
  border-radius: 50px;
  color: #dddddd;
  background: #30323e;
  box-shadow:
      inset 12px 12px 24px #22232b,
      inset -12px -12px 24px #3e4151;
}*/

/*End Input*/
</style>