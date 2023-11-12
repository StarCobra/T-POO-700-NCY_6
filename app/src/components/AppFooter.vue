<template>
  <div class="footer-container">
    <div class="footer-card-item"></div>
    <div class="footer-card-item"></div>
    <div class="footer-card-item"></div>
  </div>
</template>

<style scoped>
.footer-container {
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 12px 12px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 16px;

  border-radius: 50px 50px 0 0;

  background: #ffffff;
}

.footer-card-item {
  width: 210px;
  height: 100px;
  border-radius: 50px;

  background: #30323e;
  box-shadow:
    inset 35px 35px 70px #22232b,
    inset -35px -35px 70px #3e4151;
}
</style>
