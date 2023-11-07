<script lang="ts">
export default {
  props: {
    title: {
      type:String,
    },
  },
}
</script>

<template>
  <ion-header class="header-container">
    <ion-text>{{ title }}</ion-text>
  </ion-header>
</template>

<style scoped>
.header-container{
  padding: 0 8%;
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2a2a2aAF;
  border-bottom-color: white;
  border-bottom-style: solid;
  border-bottom-width: 0.75px;
}


</style>