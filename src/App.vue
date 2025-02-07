<template>
  <div id="app">
    <!-- Conditionally show sidebar and nav elements -->
    <div v-if="!isLoginPage" class="sidebar-container">
      <SideBar :isCollapsed="isCollapsed" @logout="showLogoutModal" />
    </div>

    <MobileNav
      v-if="!isLoginPage && isMobileNavOpen"
      :isActive="isMobileNavOpen"
      @close="isMobileNavOpen = false"
      @logout="showLogoutModal"
    />

    <div class="right-area" :class="{ collapsed: isCollapsed }">
      <TopNav
        v-if="!isLoginPage"
        @toggle-sidebar="toggleSidebar"
        @toggle-mobile-nav="toggleMobileNav"
      />

      <div class="main" :class="{ 'login-page': isLoginPage }">
        <router-view></router-view>
      </div>
    </div>

    <LogoutModal
      v-if="!isLoginPage"
      :isVisible="isLogoutModalVisible"
      @confirm="logout"
      @close="isLogoutModalVisible = false"
    />
  </div>
</template>

<script>
import SideBar from "./components/layout/SideBar.vue";
import TopNav from "./components/layout/TopNav.vue";
import MobileNav from "./components/layout/MobileNav.vue";
import LogoutModal from "./components/modals/LogoutModal.vue";

export default {
  components: {
    SideBar,
    TopNav,
    MobileNav,
    LogoutModal,
  },
  data() {
    return {
      isCollapsed: false,
      isMobileNavOpen: false,
      isLogoutModalVisible: false,
    };
  },
  computed: {
    isLoginPage() {
      return this.$route.path === "/login";
    },
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    showLogoutModal() {
      this.isLogoutModalVisible = true;
    },
    logout() {
      this.isLogoutModalVisible = false;
      this.$router.push("/login");
    },
    handleResize() {
      if (window.innerWidth > 900) {
        this.isMobileNavOpen = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  width: 100%;
  font-family: "Poppins", sans-serif;
}

.right-area {
  height: 100%;
  background-color: #f0f8ff;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  height: 100%;
  padding: 20px;
  background-color: #fcfcfc;
  border: 1px solid #bbb;
  border-right: 0;
  overflow: auto;
  margin-left: 195px;
  margin-top: 60px;
  transition: margin-left 0.1s linear;
  z-index: 5;
  border-top-left-radius: 5px;
}

.right-area.collapsed .main {
  margin-left: 60px;
}

canvas {
  width: 100%;
  margin-top: 5px;
  max-height: 300px;
}

table {
  font-size: 14px !important;
}

.search-input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
}

.department-filter {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px;
  color: #333 !important;
}

.search-input:focus {
  border: 1px solid #3498db;
  box-shadow: 0 0 4px rgba(52, 152, 219, 0.2);
  border-radius: 4px;
  outline: none;
}

i {
  cursor: pointer;
}

@media (max-width: 900px) {
  .sidebar-container {
    display: none;
  }

  .main {
    margin-left: 0 !important;
    padding: 15px;
    border-radius: 0;
  }
}

.main.login-page {
  margin-left: 0;
  margin-top: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f8ff;
  border: none;
}
</style>
