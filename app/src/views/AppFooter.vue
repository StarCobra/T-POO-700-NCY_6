<template>
  <div class="ft">
    <div class="footer-container">
     <div class="footer-card-item">
      </div>
     <div class="footer-card-item">
     </div>
      <div class="footer-card-item">
      </div>
    </div>
  </div>
</template>

<style scoped>
.ft {
  margin-top: 25px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: #ffffff;

  border-radius: 25px 25px 0 0;
}

.footer-container {
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  border-radius: 25px 25px 0 0;
  background: #ffffff;
}

.footer-card-item {
  width: 210px;
  height: 50px;
  border-radius: 25px;

  background: #30323e;
  box-shadow: inset 35px 35px 70px #22232b,
  inset -35px -35px 70px #3e4151;
}
</style>