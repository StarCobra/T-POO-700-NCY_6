<script setup lang="ts">
import { ref } from 'vue';
import { getAllUsers, getUser, createUser, updateUser, deleteUser } from '@/components/User.js';

let userID = ref('');
let username = ref('');
let email = ref('');
</script>

<template>
  <div class="flex">
    <div class="body-container">
      <div class="body-form-item">
        <H2 class="body-form-title">GetAllUsers</H2>
        <form class="body-form-flex-item" action="" method="post">
          <div class="body-row-field"></div>
          <div class="body-row-input">
            <button class="body-row-input-item" id="btn-get-all-users" @click="getAllUsers($event)">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div class="body-form-item">
        <H2 class="body-form-title">GetUser</H2>
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
          </div>
          <div class="body-row-input">
            <button
              class="body-row-input-item"
              id="btn-get-user"
              @click="getUser(username, email, $event)"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div class="body-form-item">
        <H2 class="body-form-title">AddUser</H2>
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
          </div>
          <div class="body-row-input">
            <button
              class="body-row-input-item"
              id="btn-create-user"
              @click="createUser(username, email, $event)"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div class="body-form-item">
        <H2 class="body-form-title">SetUser</H2>
        <form class="body-form-flex-item" action="" method="post">
          <div class="body-row-field">
            <input
              class="body-row-field-item"
              type="text"
              id="input-userID"
              placeholder="userID"
              v-model="userID"
            />
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
          </div>
          <div class="body-row-input">
            <button
              class="body-row-input-item"
              id="btn-update-user"
              @click="updateUser(userID, username, email, $event)"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div class="body-form-item">
        <H2 class="body-form-title">DeleteUser</H2>
        <form class="body-form-flex-item" action="" method="post">
          <div class="body-row-field">
            <input
              class="body-row-field-item"
              type="text"
              id="input-userID"
              placeholder="userID"
              v-model="userID"
            />
          </div>
          <div class="body-row-input">
            <button
              class="body-row-input-item"
              id="btn-delete-user"
              @click="deleteUser(userID, $event)"
            >
              Submit
            </button>
          </div>
        </form>
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
  align-items: flex-start;
  gap: 35px;
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
  padding: 8px;
}

/*Region Field*/

.body-row-field {
  display: flex;
  flex-direction: column;
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
/*End Field*/

/*Region Input*/

.body-row-input {
  display: flex;
  flex-direction: row;
  justify-content: end;
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
}

/*End Input*/

.flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
}
</style>
