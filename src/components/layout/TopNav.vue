<template>
  <div class="top-nav">
    <div class="search-bar">
      <!-- <input type="text" placeholder="Search..." /> -->
    </div>

    <div class="user-profile">
      <i class="fas fa-bell"></i>
      <div class="profile">
        <i class="fas fa-user-circle"></i>
        <span>Admin</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f8ff;
  color: #0f3659;
  padding: 10px 20px;
  height: 60px;
  width: 100%;
}
.burger-btn {
  cursor: pointer;
}

.search-bar input {
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 200px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.user-profile i {
  margin-right: 10px;
  font-size: 20px;
}

.profile span {
  font-size: 14px;
  margin-left: 5px;
}
</style>
