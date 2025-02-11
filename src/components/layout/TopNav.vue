<template>
  <div class="top-nav">
    <!-- Left Section: Logo & Sidebar Icons -->
    <div class="heading-area">
      <div class="icon-container">
        <img src="/bird-icon.png" alt="Bird Icon" class="bird-icon" />
        <span class="dashboard-name">WorkSphere</span>
      </div>

      <!-- Sidebar Toggle (Desktop) -->
      <i class="fas fa-bars desktop-menu" @click="$emit('toggle-sidebar')"></i>
    </div>

    <!-- Centered Search Bar -->
    <div class="center-content">
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search employees..."
          class="search-input"
          @input="filterEmployees"
          @focus="showResults = true"
          @blur="hideResults"
        />
        <ul
          v-if="showResults && filteredEmployees.length"
          class="search-results"
        >
          <li
            v-for="employee in filteredEmployees"
            :key="employee.id"
            @click="goToEmployee()"
          >
            <img
              :src="employee.image"
              alt="Profile"
              class="search-profile-img"
            />
            {{ employee.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- Mobile Nav Toggle -->
    <i class="fas fa-bars mobile-menu" @click="$emit('toggle-mobile-nav')"></i>

    <div class="user-profile">
      <i class="far fa-bell"></i>
      <div class="profile">
        <img src="images/ProfilePhoto1.jpg" alt="Profile" class="profile-img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      employees: [
        { id: 1, name: "John Doe", image: "images/ProfilePhoto1.jpg" },
        { id: 2, name: "Jane Smith", image: "images/ProfilePhoto2.jpg" },
        { id: 3, name: "Michael Johnson", image: "images/ProfilePhoto3.jpg" },
      ],
      filteredEmployees: [],
      showResults: false,
    };
  },
  methods: {
    filterEmployees() {
      const query = this.searchQuery.toLowerCase();
      this.filteredEmployees = this.employees.filter((emp) =>
        emp.name.toLowerCase().includes(query)
      );
      this.showResults = true;
    },
    goToEmployee() {
      this.$router.push(`/employee`);
      this.searchQuery = "";
      this.filteredEmployees = [];
      this.showResults = false;
    },
    hideResults() {
      setTimeout(() => {
        this.showResults = false;
      }, 150);
    },
  },
};
</script>

<style scoped>
/* Top Navigation */
.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e6f3ff;
  color: #0b508b;
  height: 55px;
  width: 100%;
  position: fixed;
  z-index: 6;
  font-family: "Assistant", serif;
  font-size: 22px;
  font-weight: 600;
  padding-left: 10px;
}

.heading-area {
  display: flex;
  align-items: center;
  width: 180px;
}

.dashboard-name {
  font-family: "Exo 2", serif;
  font-size: 1rem;
  text-transform: uppercase;
  margin-right: 15px;
  font-weight: 600;
}

.bird-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-top: 5px;
}

.icon-container {
  display: flex;
  align-items: center;
}

.center-content {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}

.search-container {
  position: relative;
  width: 30%;
  margin-right: 10px;
  min-width: 300px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 0.9rem;
  box-sizing: border-box;
}

.search-results {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  font-size: 0.9rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.search-results li {
  display: flex;
  align-items: center;
  padding: 8px;
  padding-right: 20px;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
}

.search-results li:hover {
  background: #f0f0f0;
}

.search-profile-img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.user-profile {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
}

.user-profile i {
  margin-right: 10px;
  font-size: 18px;
  color: #0a4d86;
}

.profile-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.desktop-menu {
  display: block;
  cursor: pointer;
  font-size: 16px;
  margin-left: 0px;
  z-index: 10;
}

.mobile-menu {
  display: none;
  cursor: pointer;
  font-size: 20px;
  margin-right: 20px;
}

/* Mobile & Responsive Adjustments */
@media (max-width: 900px) {
  .top-nav {
    border-bottom: 1px solid #bbb;
  }

  .heading-area {
    width: auto;
    flex-grow: 1;
    justify-content: space-between;
  }

  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: block;
  }

  .user-profile {
    display: none;
  }
}

@media (max-width: 570px) {
  .center-content {
    display: none;
  }
}
</style>
