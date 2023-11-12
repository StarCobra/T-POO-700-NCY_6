<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createUser, getAllUsers, getUser, removeUser, updateUser } from '@/services/UserManager';

const router = useRouter();

const submitForm = async (e: any) => {
  e.preventDefault();
  const email = document.getElementById('input-email') as HTMLInputElement;
  const password = document.getElementById('input-password') as HTMLInputElement;
  const data = {
    email: email.value,
    password: password.value
  };
  try {
    const response = await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    if (json.email !== undefined) {
      localStorage.setItem('userId', json.id);
      localStorage.setItem('username', json.username);
      localStorage.setItem('email', json.email);
      localStorage.setItem('role', json.role);
      router.push('/');
    } else {
      alert('Wrong email or password');
    }
  } catch (error) {
    alert('Wrong email or password');
  }
};
</script>

<template>
  <div class="flex">
    <div class="body-container">
      <div class="body-form-item">
        <h2 class="body-form-title">Login</h2>
        <form class="body-form-flex-item" action="" method="post">
          <div class="body-row-field">
            <input id="input-email" class="body-row-field-item" type="text" placeholder="Email" />
            <input
              id="input-password"
              type="password"
              class="body-row-field-item"
              placeholder="Password"
            />
          </div>
          <div class="body-row-input">
            <button type="submit" class="body-row-input-item" @click="submitForm">Login</button>
          </div>
        </form>
      </div>
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
  align-items: flex-start;
  gap: 35px;
}

.body-form-item {
  min-width: 360px;
  max-width: 80%;
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
