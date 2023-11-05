<script lang="ts">
import AppUser from "@/views/page/AppUser.vue";
import AppClock from "@/views/page/AppClock.vue";
import AppWorkingTime from "@/views/page/AppWorkingTime.vue";
import AppDashboard from "@/views/page/AppDashboard.vue";

export default {
  name: 'AppBody',
  components: {
    AppUser,
    AppClock,
    AppWorkingTime,
    AppDashboard
  }
}
</script>


<template>
  <div id="AppBody" class="body-container">
    <AppDashboard/>
  </div>
  <div id="AppUser" class="body-container disable">
    <AppUser/>
  </div>
  <div id="AppClock" class="body-container disable">
    <AppClock/>
  </div>
  <div id="AppWorkingTime" class="body-container disable">
    <AppWorkingTime/>
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

.disable {
  visibility: hidden;
  display: none;
}

</style>
