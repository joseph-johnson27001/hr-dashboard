<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <nav>
      <ul class="menu-container">
        <li
          v-for="item in menuItems"
          :key="item.path"
          class="menu-item"
          :class="{
            active: $route.path === item.path,
            logout: item.name === 'Log Out',
          }"
        >
          <router-link :to="item.path" class="menu-link">
            <i :class="item.icon"></i>
            <span v-if="!isCollapsed">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    isCollapsed: Boolean, // Receive collapsed state from App.vue
  },
  data() {
    return {
      menuItems: [
        { name: "Home", path: "/", icon: "fas fa-tachometer-alt" },
        { name: "Employees", path: "/employees", icon: "fas fa-users" },
        { name: "Payroll", path: "/payroll", icon: "fas fa-money-bill-wave" },
        {
          name: "Attendance",
          path: "/attendance",
          icon: "fas fa-calendar-check",
        },
        { name: "Reports", path: "/reports", icon: "fas fa-chart-line" },
        { name: "Settings", path: "/settings", icon: "fas fa-cog" },
        { name: "Log Out", path: "/#", icon: "fas fa-sign-out-alt" },
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
  display: flex;
  flex-direction: column;
  position: fixed;
  margin-top: 60px;
  border-right: 1px solid #bbb;
  transition: margin 0.2s linear;
}

.sidebar i {
  font-size: 20px;
  margin-right: 5px;
}

.sidebar.collapsed {
  width: 40px;
  display: flex;
  justify-content: center;
}

.sidebar.collapsed .menu-link span {
  display: none;
}

.sidebar.collapsed a {
  display: flex;
  justify-self: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}

.sidebar.collapsed .menu-link i {
  margin-right: 0;
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
  height: 100%;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0px -5px;
}

nav ul li {
  cursor: pointer;
}

.menu-link {
  margin-bottom: 10px;
}

nav ul li .menu-link {
  display: flex;
  align-items: center;
  color: #0f3659;
  text-decoration: none;
  padding: 10px;
  border-radius: 12px;
  transition: background-color 0.2s;
  height: 30px;
}

nav ul li .menu-link:hover {
  background: rgba(0, 0, 0, 0.1);
}

nav ul li.active .menu-link {
  background-color: #0288d1;
  color: white;
}

nav ul li .menu-link i {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logout {
  margin-top: auto;
  padding-bottom: 70px;
}
</style>
