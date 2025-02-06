<template>
  <div id="app">
    <div class="sidebar-container">
      <SideBar :isCollapsed="isCollapsed" />
    </div>
    <div class="right-area" :class="{ collapsed: isCollapsed }">
      <TopNav @toggle-sidebar="toggleSidebar" />
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/layout/SideBar.vue";
import TopNav from "./components/layout/TopNav.vue";

export default {
  components: {
    SideBar,
    TopNav,
  },
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
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
  height: 100%;
  border: 1px solid #bbb;
  border-top: 0;
  border-right: 0;
  overflow: auto;
  margin-left: 220px;
  margin-top: 50px;
  transition: margin-left 0.1s linear;
  z-index: 5;
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

@media (max-width: 900px) {
  .sidebar-container {
    display: none;
  }
  .right-area {
    padding: 0px 10px;
  }
  .main {
    margin-left: 0px !important;
    overflow: none;
    margin-right: 0px;
    border-top: 1px solid #bbb;
    border-right: 1px solid #bbb;
  }
}
</style>
