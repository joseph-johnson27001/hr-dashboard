<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <!-- Toggle Button and Dashboard Name -->
    <div class="heading-area">
      <span class="dashboard-name">Dashboard</span>
      <i class="fas fa-bars"></i>
    </div>

    <!-- Sidebar Content -->
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <router-link :to="item.path">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Dashboard", path: "/", icon: "fas fa-tachometer-alt" },
        { name: "Employees", path: "/employees", icon: "fas fa-users" },
        {
          name: "Attendance",
          path: "/attendance",
          icon: "fas fa-calendar-check",
        },
        { name: "Reports", path: "/reports", icon: "fas fa-chart-line" },
        { name: "Settings", path: "/settings", icon: "fas fa-cog" },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  height: 100vh;
  padding: 10px 20px;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  font-weight: 100;
  font-family: "Poppins", sans-serif;
}

.heading-area {
  cursor: pointer;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.dashboard-name {
  font-size: 18px;
  color: white;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 20px 0;
}

nav ul li a {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;
}

nav ul li a:hover {
  background: rgba(255, 255, 255, 0.2);
}

nav ul li i {
  margin-right: 10px;
}
</style>
