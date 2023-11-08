<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
import { getAllUsers, getUser, createUser, updateUser, removeUser } from '@/services/UserManager';
import { User } from '@/class/User';

import Header from "@/component/Header.vue";
export default {
  setup(){
    let user = new User()
    return {
      user,
    };
  },
  methods: {removeUser, updateUser, createUser, getUser, getAllUsers},
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, Header},
};
</script>

<template>
  <ion-page>
    <Header :title="'User'"/>
    <ion-content>
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
                    v-model="user.username"
                />
                <input
                    class="body-row-field-item"
                    type="text"
                    id="input-email"
                    placeholder="email"
                    v-model="user.email"
                />
              </div>
              <div class="body-row-input">
                <button class="body-row-input-item" id="btn-get-user" @click="getUser(user, $event)">
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
                    v-model="user.username"
                />
                <input
                    class="body-row-field-item"
                    type="text"
                    id="input-email"
                    placeholder="email"
                    v-model="user.email"
                />
              </div>
              <div class="body-row-input">
                <button
                    class="body-row-input-item"
                    id="btn-create-user"
                    @click="createUser(user, $event)"
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
                    v-model="user.id"
                />
                <input
                    class="body-row-field-item"
                    type="text"
                    id="input-username"
                    placeholder="username"
                    v-model="user.username"
                />
                <input
                    class="body-row-field-item"
                    type="text"
                    id="input-email"
                    placeholder="email"
                    v-model="user.email"
                />
              </div>
              <div class="body-row-input">
                <button
                    class="body-row-input-item"
                    id="btn-update-user"
                    @click="updateUser(user, $event)"
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
                    v-model="user.id"
                />
              </div>
              <div class="body-row-input">
                <button
                    class="body-row-input-item"
                    id="btn-delete-user"
                    @click="removeUser(user, $event)"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>