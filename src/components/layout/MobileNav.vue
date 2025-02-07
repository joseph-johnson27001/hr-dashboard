<template>
  <div class="mobile-nav" :class="{ active: isActive }">
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
          <router-link
            v-if="item.name !== 'Log Out'"
            :to="item.path"
            class="menu-link"
            @click="$emit('close')"
          >
            <i :class="item.icon"></i>
            <span class="menu-name">{{ item.name }}</span>
          </router-link>

          <!-- Log Out button -->
          <a v-else href="#" class="menu-link" @click.prevent="$emit('logout')">
            <i :class="item.icon"></i>
            <span class="menu-name">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      menuItems: [
        { name: "Home", path: "/home", icon: "fa fa-home" },
        { name: "Employees", path: "/employees", icon: "fas fa-users" },
        { name: "Payroll", path: "/payroll", icon: "fas fa-money-bill-wave" },
        {
          name: "Attendance",
          path: "/attendance",
          icon: "fas fa-calendar-check",
        },
        // { name: "Reports", path: "/reports", icon: "fas fa-chart-line" },
        { name: "Log Out", path: "/#", icon: "fas fa-sign-out-alt" },
      ],
    };
  },
};
</script>

<style scoped>
/* Mobile Navigation Dropdown */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f0f8ff;
  color: #0a4d86;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 6;
  height: 60px;
  font-family: "Assistant", serif;
}

/* Styling for menu items */
.menu-container {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 55px;
}

.menu-item {
  cursor: pointer;
  text-align: center;
}

.menu-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #0a4d86;
  text-decoration: none;
  padding: 12px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;
}

.menu-link i {
  margin-right: 10px;
}

.menu-link:hover {
  background: rgba(0, 0, 0, 0.1);
}

.active .menu-link {
  background-color: #0288d1;
  color: white;
}
</style>
