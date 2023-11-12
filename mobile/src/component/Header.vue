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
    <ion-text class="header-title">{{ title }}</ion-text>
  </ion-header>
</template>
