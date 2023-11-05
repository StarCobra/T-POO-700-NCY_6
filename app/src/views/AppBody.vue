<script setup lang="ts">
import { ref } from 'vue';
import { getAllUsers, getUser, createUser, updateUser, removeUser } from '@/services/UserManager';
import { postClock, getClocks } from "@/services/ClockManager";
import { createWorkingTime, updateWorkingTime, removeWorkingTime} from "@/services/WorkingTimeManager";

let { userID, username, email, workingtimeID, startDateTimeDate, startDateTimeTime, endDateTimeDate, endDateTimeTime } = ref("");
</script>

<script lang="ts">
import TimeChart from "@/components/TimeChart.vue";
import RetardChart from "@/components/RetardChart.vue";
import MoyenChart from "@/components/MoyenChart.vue";

export default {
  name: 'AppBody',
  components: {
    TimeChart,
    RetardChart,
    MoyenChart
  }
}
</script>


<template>
  <div class="body-container">
  
    <div class="body-card-item">
       <time-chart/>
    </div>
    <div class="body-card-item">
      <retard-chart/>
    </div>
    <div class="body-card-item">
      <moyen-chart/>
    </div>

    <div class="body-form-item">
      <H2 class="body-form-title">WorkingTime</H2>
      <form class="body-form-flex-item" action="" method="post">
        <div class="body-row-field">
          <input class="body-row-field-item" type="text" id="input-userID" placeholder="userID" v-model="userID">
          <input class="body-row-field-item" type="text" id="input-workingtimeID" placeholder="workingtimeID" v-model="workingtimeID">
          <input class="body-row-field-item" type="date" id="input-startDateTime-date" placeholder="startDateTime" v-model="startDateTimeDate">
          <input class="body-row-field-item" type="time" id="input-startDateTime-time" placeholder="endDateTime" v-model="startDateTimeTime">
          <input class="body-row-field-item" type="date" id="input-endDateTime-date" placeholder="startDateTime" v-model="endDateTimeDate">
          <input class="body-row-field-item" type="time" id="input-endDateTime-time" placeholder="endDateTime" v-model="endDateTimeTime">
        </div>
        <div class="body-row-input">
          <button class="body-row-input-item" id="btn-create-workingtime" @click="createWorkingTime(userID,startDateTimeDate,startDateTimeTime,endDateTimeDate,endDateTimeTime, $event)">Create Workingtime</button>
          <button class="body-row-input-item" id="btn-update-workingtime" @click="updateWorkingTime(userID,workingtimeID,startDateTimeDate,startDateTimeTime,endDateTimeDate,endDateTimeTime, $event)">Update Workingtime</button>
          <button class="body-row-input-item" id="btn-delete-workingtime" @click="removeWorkingTime(userID,workingtimeID, $event)">Delete Workingtime</button>
        </div>
      </form>
    </div>

    <div class="body-card-item">
      <H2>User</H2>
      <form action="" method="post">
        <input type="text" id="input-userID" placeholder="userID" v-model="userID">
        <input type="text" id="input-username" placeholder="username" v-model="username">
        <input type="text" id="input-email" placeholder="email" v-model="email">
        <button id="btn-create-user" @click="createUser(username, email, $event)">Create User</button>
        <button id="btn-get-all-users" @click="getAllUsers($event)">Get All Users</button>
        <button id="btn-get-user" @click="getUser(username, email, $event)">Get User</button>
        <button id="btn-update-user" @click="updateUser(userID, username, email, $event)">Update User</button>
        <button id="btn-delete-user" @click="removeUser(userID, $event)">Delete User</button>
      </form>
    </div>

    <div class="body-card-item">
      <H2>Clock</H2>
      <form action="" method="post">
        <input type="text" id="input-userID" placeholder="userID" v-model="userID">
        <button id="btn-create-clock" @click="postClock(userID, $event)">Create Clock</button>
        <button id="btn-get-clock" @click="getClocks(userID, $event)">Get Clock</button>
      </form>
    </div>
  </div>
</template>


<style scoped>

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
  padding: 8px;

  box-shadow:  16px 16px 32px #1c1c1c,
  -16px -16px 32px #343434;
}

</style>