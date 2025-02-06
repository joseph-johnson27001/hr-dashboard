<template>
  <div class="top-nav">
    <div class="heading-area">
      <div class="icon-container">
        <img src="/bird-icon.png" alt="Bird Icon" class="bird-icon" />
        <span class="dashboard-name">Dashboard</span>
      </div>
      <i class="fas fa-bars" @click="$emit('toggle-sidebar')"></i>
    </div>

    <div class="user-profile">
      <i class="fas fa-bell"></i>
      <div class="profile">
        <!-- Profile Image instead of icon -->
        <img src="images/ProfilePhoto1.jpg" alt="Profile" class="profile-img" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f8ff;
  color: #0b508b;
  height: 50px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #bbb;
  z-index: 6;
}

.heading-area {
  margin: 15px;
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
}

.dashboard-name {
  font-size: 1.1rem;
}

.bird-icon {
  width: 28px;
  height: 28px;
  margin-right: 8px;
}

.heading-area i {
  cursor: pointer;
  font-size: 15px;
  margin-right: 20px;
}

.icon-container {
  display: flex;
  align-items: center;
}

.user-profile {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user-profile i {
  margin-right: 10px;
  font-size: 18px;
  color: #0a4d86;
}

.profile-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.profile span {
  font-size: 14px;
  margin-left: 5px;
}

@media (max-width: 900px) {
  .top-nav {
    border-bottom: 0px;
  }
  .heading-area {
    width: 100%;
    margin-left: 0px;
    padding: 0px 5px;
  }
  .user-profile {
    display: none;
  }
}
</style>
