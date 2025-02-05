<template>
  <div class="top-nav">
    <div class="heading-area">
      <span class="dashboard-name">Dashboard</span>
      <i class="fas fa-bars"></i>
    </div>

    <div class="user-profile">
      <i class="fas fa-bell"></i>
      <div class="profile">
        <i class="fas fa-user-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f8ff;
  color: #0f3659;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  border-bottom: 1px solid #bbb;
}

.heading-area {
  margin: 20px 20px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
}

.user-profile {
  display: flex;
  align-items: center;
}

.user-profile i {
  margin-right: 10px;
  font-size: 20px;
}

.profile span {
  font-size: 14px;
  margin-left: 5px;
}

@media (max-width: 900px) {
  .heading-area {
    width: 100%;
  }
  .user-profile {
    display: none;
  }
}
</style>
