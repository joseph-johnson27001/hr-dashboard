<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <!-- Toggle Button -->
    <div class="toggle-btn" @click="$emit('toggleSidebar')">
      <i class="fas fa-bars"></i>
    </div>

    <!-- Sidebar Content -->
    <nav>
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <router-link :to="item.path">
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
    isCollapsed: Boolean,
  },
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
  padding: 20px;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar.collapsed {
  width: 80px;
}

.toggle-btn {
  cursor: pointer;
  padding: 10px;
  text-align: right;
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

/* Hide text when collapsed */
.sidebar.collapsed nav ul li i {
  margin-right: 0;
}

.sidebar.collapsed nav ul li span {
  display: none;
}
</style>
