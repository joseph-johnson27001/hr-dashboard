<template>
  <div class="top-nav">
    <div class="heading-area">
      <span class="dashboard-name">Dashboard</span>
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
  color: #0f3659;
  height: 60px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #bbb;
  z-index: 6;
}

.heading-area {
  margin: 20px;
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
}

.heading-area i {
  cursor: pointer;
  font-size: 20px;
}

.user-profile {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user-profile i {
  margin-right: 10px;
  font-size: 20px;
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
