<template>
  <div id="app">
    <div class="sidebar-container">
      <SideBar />
    </div>
    <div class="right-area">
      <TopNav />
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
  background-color: #f9f9f9;
  /* border-radius: 5px; */
  height: 100%;
  border: 1px solid #bbb;
  border-top: 0;
  border-right: 0;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  margin-left: 245px;
  margin-top: 60px;
}

canvas {
  width: 100%;
  margin-top: 5px;
  max-height: 300px;
}

table {
  font-size: 14px !important;
}

@media (max-width: 900px) {
  .sidebar-container {
    display: none;
  }
  .right-area {
    padding: 0px 10px;
  }
  .main {
    margin-left: 0px;
    overflow: none;
    margin-right: 0px;
  }
}
</style>
