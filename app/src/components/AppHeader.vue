<script lang="ts">
import HomeIcon from '../assets/SVG/home_white.vue';
import DashIcon from '../assets/SVG/dashboard_white.vue';
import MenuIcon from '../assets/SVG/menu_white.vue';
import ProfileWhite from "../assets/SVG/profile_white.vue";

export default {
  name: 'App',
  components: {
    HomeIcon,
    DashIcon,
    MenuIcon,
    ProfileWhite

  },
  methods: {
    burgerSwap() {
      let header = document.getElementById('header');
      let open = document.getElementById('open');
      if (header != null) {
        if (header.classList.contains('card')) {
          header.classList.remove('card'); //remove the class
          header.classList.add('card-open');
        } else {
          header.classList.remove('card-open'); //remove the class
          header.classList.add('card');
        }
        if (open != null) {
          if (open.classList.contains('header-container-flex-disable-secondary')) {
            open.classList.remove('header-container-flex-disable-secondary');
            open.classList.add('header-container-flex-secondary');
          } else {
            open.classList.remove('header-container-flex-secondary');
            open.classList.add('header-container-flex-disable-secondary');
          }
        }
      }
    },
    pageSwap(index: string) {
      console.log('pageSwap', index);
      let AppBody = document.getElementById('AppBody');
      let AppUser = document.getElementById('AppUser');
      let AppClock = document.getElementById('AppClock');
      let AppWorkingTime = document.getElementById('AppWorkingTime');
      let AppProfile = document.getElementById('AppProfile');

      if (AppBody != null && AppUser != null && AppClock != null && AppWorkingTime != null && AppProfile != null) {
        switch (index) {
          case 'dashboard':
            {
              if (AppBody.classList.contains('disable')) {
                AppBody.classList.remove('disable');
                if (!AppUser.classList.contains('disable')) AppUser.classList.add('disable');
                if (!AppClock.classList.contains('disable')) AppClock.classList.add('disable');
                if (!AppWorkingTime.classList.contains('disable'))
                  AppWorkingTime.classList.add('disable');
              }
            }
            break;
          case 'user':
            {
              if (AppUser.classList.contains('disable')) {
                AppUser.classList.remove('disable');
                if (!AppBody.classList.contains('disable')) AppBody.classList.add('disable');
                if (!AppClock.classList.contains('disable')) AppClock.classList.add('disable');
                if (!AppWorkingTime.classList.contains('disable'))
                  AppWorkingTime.classList.add('disable');
              }
            }
            break;
          case 'clock':
            {
              if (AppClock.classList.contains('disable')) {
                AppClock.classList.remove('disable');
                if (!AppBody.classList.contains('disable')) AppBody.classList.add('disable');
                if (!AppUser.classList.contains('disable')) AppUser.classList.add('disable');
                if (!AppWorkingTime.classList.contains('disable'))
                  AppWorkingTime.classList.add('disable');
              }
            }
            break;
          case 'workingtime':
            {
              if (AppWorkingTime.classList.contains('disable')) {
                AppWorkingTime.classList.remove('disable');
                if (!AppBody.classList.contains('disable')) AppBody.classList.add('disable');
                if (!AppUser.classList.contains('disable')) AppUser.classList.add('disable');
                if (!AppClock.classList.contains('disable')) AppClock.classList.add('disable');
              }
            }
            break;
          case 'profile':
            {
              if (AppProfile.classList.contains('disable')) {
                AppProfile.classList.remove('disable');
                if (!AppBody.classList.contains('disable')) AppBody.classList.add('disable');
                if (!AppUser.classList.contains('disable')) AppUser.classList.add('disable');
                if (!AppClock.classList.contains('disable')) AppClock.classList.add('disable');
                if (!AppWorkingTime.classList.contains('disable'))
                  AppWorkingTime.classList.add('disable');
              }
            }
        }
      }
    }
  }
};
</script>

<template>
  <div class="header-container">
    <div id="header" class="card">
      <!--Button Left-->
      <div class="header_container-flex">
        <div class="header-container-item">
          <button id="dash-icon" class="header-button" @click="pageSwap('dashboard')">
            <dash-icon />
          </button>
          <div class="fake-header-button">
            
          </div>
        </div>

        <!--NameApp-->
        <div class="app-name">Time Manager</div>
        <!--Button Right-->
        <div class="header-container-item">

          <button id="menu-icon" class="header-button" @click="burgerSwap">
            <menu-icon />
          </button>
          <button id="profile-icon" class="header-button" @click="pageSwap('profile')">
            <profile-white />
          </button>


        </div>
      </div>
      <div class="divider" />
      <div id="open" class="header-container-flex-disable-secondary">
        <div class="header-open-container-item">
          <button class="header-button-secondary" @click="pageSwap('user')">User</button>
        </div>
        <div class="header-open-container-item">
          <button class="header-button-secondary" @click="pageSwap('clock')">Clock</button>
        </div>
        <div class="header-open-container-item">
          <button class="header-button-secondary" @click="pageSwap('workingtime')">
            WorkingTime
          </button>
        </div>
        
    </div>
  </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.header-container {
  padding: 8px;
}

.header-container-item {
  padding: 8px;
  display: flex;
  gap: 8px;
  flex-direction: row;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  width: 100%;
  height: 100px;

  border-radius: 50px;
  background: #eeeeee;
  box-shadow:
    15px 15px 30px #181818,
    -15px -15px 30px #383838;
}

/* Region Burger*/
.card-open {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 8px;

  width: 100%;

  border-radius: 50px;
  background: #eeeeee;
  box-shadow:
    15px 15px 30px #181818,
    -15px -15px 30px #383838;
}

.header_container-flex {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header-container-flex-secondary {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-evenly;
  align-items: center;
}

.header-container-flex-disable-secondary {
  display: none;
  visibility: hidden;
}

.header-container-flex-disable-secondary div {
  display: none;
  visibility: hidden;
}

/* End Burger*/

.header-button {
  height: 75px;
  width: 75px;
  padding: 5px;
  border-radius: 50px;
  background: linear-gradient(145deg, #333642, #2b2d38);
  box-shadow:
    6px 6px 6px #a7a7a7,
    -6px -6px 6px #ffffff;
}

.header-button:hover {
  height: 75px;
  width: 75px;
  padding: 5px;
  border-radius: 50px;
  background: #30323e;
  box-shadow:
    inset 10px 10px 20px #24262f,
    inset -10px -10px 20px #3c3f4e;
}

.fake-header-button {
  height: 75px;
  width: 75px;
  background: rgba(0, 255, 255, 0);
}

.app-name {
  color: #30323e;
  background-color: #00000000;
  font-family: 'Work Sans', sans-serif;
  font-size: 2.6em;
}

.header-open-container-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 50px;

  border-radius: 50px;
  background: #30323e;
  box-shadow:
    inset 14px 14px 25px #1d1e25,
    inset -14px -14px 25px #434657;
}

.divider {
  width: 100%;
  height: 6px;
  margin-bottom: 8px;

  border-radius: 5px;
  background: #30323e;
  box-shadow:
    inset 3px 3px 2px #18191f,
    inset -3px -3px 2px #484b5d;
}

.header-button-secondary {
  width: 95%;
  height: 75%;
  padding: 5px;
  border-radius: 50px;
  background: #dddddd;
  border: none;
}

.header-button-secondary:hover {
  width: 95%;
  height: 75%;
  padding: 5px;
  border-radius: 50px;
  background: linear-gradient(145deg, #c7c7c7, #ececec);
  border: none;
  box-shadow:
    inset 10px 10px 20px #bcbcbc,
    inset -10px -10px 20px #fefefe;
}
</style>
