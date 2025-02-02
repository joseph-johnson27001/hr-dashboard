<template>
  <div id="app">
    <!-- Sidebar -->
    <SideBar :isCollapsed="isSidebarCollapsed" @toggleSidebar="toggleSidebar" />

    <!-- Main Content Area -->
    <div class="main-content">
      <TopNav @toggleSidebar="toggleSidebar" />
      <MainContent />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/layout/SideBar.vue";
import TopNav from "./components/layout/TopNav.vue";
import MainContent from "./components/layout/MainContent.vue";

export default {
  components: {
    SideBar,
    TopNav,
    MainContent,
  },
  data() {
    return {
      isSidebarCollapsed: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
  },
};
</script>

<style>
body {
  margin: 0px;
}
</style>
