<template>
  <div class="top-nav">
    <div class="heading-area">
      <div class="icon-container">
        <img src="/bird-icon.png" alt="Bird Icon" class="bird-icon" />
        <span class="dashboard-name">Dashboard</span>
      </div>

      <!-- Sidebar Toggle (Only for larger screens) -->
      <i class="fas fa-bars desktop-menu" @click="$emit('toggle-sidebar')"></i>

      <!-- Mobile Nav Toggle (Only for smaller screens) -->
      <i
        class="fas fa-bars mobile-menu"
        @click="$emit('toggle-mobile-nav')"
      ></i>
    </div>

    <div class="user-profile">
      <i class="far fa-bell"></i>
      <div class="profile">
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
  height: 55px;
  width: 100%;
  position: fixed;
  z-index: 6;
  font-family: "Assistant", serif;
  font-size: 22px;
  font-weight: 600;
}

.heading-area {
  padding-top: 5px;
  margin: 12px;
  width: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard-name {
  font-size: 1.1rem;
  text-transform: uppercase;
}

.bird-icon {
  width: 35px;
  height: 35px;
  margin-right: 8px;
}

.icon-container {
  display: flex;
  align-items: center;
}

/* Hamburger Icons */
.desktop-menu {
  display: block;
  cursor: pointer;
  font-size: 16px;
  margin-right: 30px;
}

.mobile-menu {
  display: none;
  cursor: pointer;
  font-size: 16px;
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
  display: flex;
}

@media (max-width: 900px) {
  .top-nav {
    border-bottom: 1px solid #bbb;
  }
  .heading-area {
    width: 100%;
  }

  .desktop-menu {
    display: none;
  }
  .mobile-menu {
    display: block;
  }

  .user-profile {
    display: none;
  }
}
</style>
