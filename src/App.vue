<template>
  <div id="app">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main Content Area -->
    <div class="main-content">
      <TopNav />
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
  data() {},
};
</script>

<style>
/* Global styles for the entire app */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: "Poppins", sans-serif;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f7fafc;
}
</style>
