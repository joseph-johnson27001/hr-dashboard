<template>
  <div id="app">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main Content Area -->
    <div class="main-area">
      <TopNav />
      <div class="main">
        <MainContent />
      </div>
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
}

#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: "Poppins", sans-serif;
}

.main-area {
  background-color: #f0f8ff;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 12px;
}

.main {
  padding: 10px;
  background-color: #f9fafb;
  border-top-left-radius: 12px;
  height: 100%;
  border: 1px solid #ddd;
}
</style>
