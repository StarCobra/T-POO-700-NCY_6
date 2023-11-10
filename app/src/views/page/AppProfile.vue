<script setup lang="ts">

import AppUser from "@/views/page/AppUser.vue";
import AppClock from "@/views/page/AppClock.vue";
import AppWorkingTime from "@/views/page/AppWorkingTime.vue";
import AppDashboard from "@/views/page/AppDashboard.vue";
import dayjs from "dayjs";

import {postClock} from "@/services/ClockManager";
import {Clock} from "@/class/Clock";

let clock = new Clock();

let username = localStorage.getItem('username');
let email = localStorage.getItem('email');
let role = localStorage.getItem('role');

const start = (clock:Clock, event: Event) => {
  clock.userId = localStorage.getItem('userId') ?? '';
  clock.time = dayjs().format("yyyy-MM-DD HH:mm:ss");
  clock.status = true;
  postClock(clock, event);
}

const end = (clock:Clock, event: Event) => {
  clock.userId = localStorage.getItem('userId') ?? '';
  clock.time = dayjs().format("yyyy-MM-DD HH:mm:ss");
  clock.status = false;
  postClock(clock, event);
}

const logout = (event: Event) => {
  event.preventDefault();
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('role');
  window.location.href = '/login';
};

</script>

<template>

  <div class="body-container">
    <div class="body-form-item">
      <h2 class="body-form-title">Profile</h2>
      <form class="body-form-flex-item" action="" method="post">
        <div class="body-row-field">
          <input
            class="body-row-field-item"
            type="text"
            id="input-username"
            placeholder="username"
            v-model="username"
          />
          <input
            class="body-row-field-item"
            type="text"
            id="input-email"
            placeholder="email"
            v-model="email"
          />
          <input
            class="body-row-field-item"
            type="text"
            id="input-role"
            placeholder="role"
            v-model="role"
          />
        </div>
      </form>
      <div class="body-form-item">
        <h2 class="body-form-title">Start Working</h2>
        <form class="body-form-flex-item" action="" method="post">
          <div class="body-row-input">
            <button
                class="body-row-input-item"
                id="btn-create-clock"
                @click="start(clock, $event)"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div class="body-form-item">
        <h2 class="body-form-title">Stop Working</h2>
        <form class="body-form-flex-item" action="" method="post">
          <div class="body-row-input">
            <button
                class="body-row-input-item"
                id="btn-create-clock"
                @click="end(clock, $event)"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="body-row-input">
        <button class="body-row-input-item" id="btn-logout" @click="logout($event)">
          Logout
        </button>
      </div>
    </div>
  </div>

</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


.body-container {
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 35px;
  text-align: center;
}

.body-form-item {
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
  align-self: center;
  color: #30323e;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
}

.body-row-field {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.body-row-field-item {
  padding: 8px;
  border-radius: 25px;
  border: none;
  background: #e0e0e0;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #30323e;
  outline: none;
}

.body-row-field-item:focus {
  background: #eeeeee;
}

.body-row-input {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
}

#btn-logout {
  padding: 8px;
  border-radius: 25px;
  border: none;
  background: #e0e0e0;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #30323e;
  outline: none;
  margin: 20px;
}



</style>