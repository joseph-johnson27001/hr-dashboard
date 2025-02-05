<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <!-- Toggle Button and Dashboard Name -->

    <!-- Sidebar Content -->
    <nav>
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.path"
          class="menu-item"
          :class="{ active: $route.path === item.path }"
        >
          <router-link :to="item.path" class="menu-link">
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
        { name: "Home", path: "/", icon: "fas fa-tachometer-alt" },
        { name: "Employees", path: "/employees", icon: "fas fa-users" },
        {
          name: "Payroll",
          path: "/payroll",
          icon: "fas fa-money-bill-wave",
        },
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
  width: 225px;
  background-color: #f0f8ff;
  color: #0f3659;
  height: 100%;
  min-height: 100vh;
  padding: 0px 10px;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  font-weight: 100;
  font-family: "Poppins", sans-serif;
  position: fixed;
  margin-top: 60px;
}

.heading-area i {
  cursor: pointer;
}

.dashboard-name {
  font-size: 18px;
  padding-left: 10px;
}

nav {
  padding-top: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  cursor: pointer;
  margin: 5px 0;
}

nav ul li .menu-link {
  display: flex;
  align-items: center;
  color: #0f3659;
  text-decoration: none;
  padding: 10px;
  border-radius: 12px;
  transition: background-color 0.2s;
}

nav ul li .menu-link:hover {
  background: rgba(0, 0, 0, 0.1);
}

nav ul li.active .menu-link {
  background-color: #0288d1;
  color: white;
}

nav ul li .menu-link i {
  margin-right: 10px;
}
</style>
