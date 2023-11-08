<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const submitForm = async (e: any) => {
  e.preventDefault();
  const email = document.getElementById('input-email') as HTMLInputElement;
  const password = document.getElementById('input-password') as HTMLInputElement;
  const data = {
    email: email.value,
    password: password.value
  }
  try {
    const response = await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log('Success:', JSON.stringify(json));
    console.log(json.data.email)
    if (json.data.email !== undefined) {
      localStorage.setItem('username', json.data.username);
      localStorage.setItem('email', json.data.email);
      localStorage.setItem('role', json.data.role);
      router.push('/');
    } else {
      alert("Wrong email or password");
    }
  } catch (error) {
    alert("Wrong email or password");
  }
}

</script>

<template>
  <div>
    <h1>Login</h1>
    <div>
      <form method="post" id="form-login">
      <input id="input-email" class="input-form-login" type="text" placeholder="Email" />
      <input id="input-password" type="password" class="input-form-login" placeholder="Password" />
      <button type="submit" class="btn-form-login" @click="submitForm">Login</button>
      </form>
    </div>
  </div>

</template>

<style scoped>
  .input-form-login {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .btn-form-login {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #ccc;
    color: #fff;
    cursor: pointer;
  }
  #form-login{
    width: 300px;
    margin: 0 auto;
  }
  h1{
    text-align: center;
  }
</style>