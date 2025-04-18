<template>
  <div>
    <!-- Search Bar and Department Filter -->
    <div class="table-controls">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="search-input"
      />
      <select v-model="selectedDepartment" class="department-filter">
        <option value="">All Departments</option>
        <option
          v-for="department in departments"
          :key="department"
          :value="department"
        >
          {{ department }}
        </option>
      </select>
    </div>

    <!-- Employee Table (Hidden on Mobile) -->
    <div v-if="!isMobile" class="table-wrapper">
      <table class="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Location</th>
            <th>Join Date</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="employee in paginatedEmployees"
            :key="employee.id"
            @click="navigateToUser"
          >
            <td>
              <div class="employee-name-container">
                <img
                  :src="employee.photoUrl"
                  alt="Profile Photo"
                  class="profile-photo"
                />
                {{ employee.name }}
              </div>
            </td>
            <td>{{ employee.position }}</td>
            <td :class="getStatusClass(employee.status)">
              {{ employee.status }}
            </td>
            <td>{{ employee.location }}</td>
            <td>{{ formatDate(employee.joinDate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Stacked Cards Layout (Visible on Mobile) -->
    <div v-if="isMobile" class="employee-cards">
      <div
        v-for="employee in paginatedEmployees"
        :key="employee.id"
        class="employee-card"
        @click="navigateToUser"
      >
        <div class="card-header">
          <img
            :src="employee.photoUrl"
            alt="Profile Photo"
            class="profile-photo"
          />
          <span class="employee-name">{{ employee.name }}</span>
        </div>
        <p>
          <span class="employee-stat">Position:</span> {{ employee.position }}
        </p>
        <p>
          <span class="employee-stat">Status:</span>
          <span class="employee-stat" :class="getStatusClass(employee.status)">
            {{ " " + employee.status }}</span
          >
        </p>
        <p>
          <span class="employee-stat">Location:</span> {{ employee.location }}
        </p>
        <p>
          <span class="employee-stat">Joined:</span>
          {{ formatDate(employee.joinDate) }}
        </p>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="pagination-controls">
      <span v-for="page in totalPages" :key="page" class="page-number">
        <button
          :class="{ active: currentPage === page }"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employees: Array,
  },
  data() {
    return {
      searchQuery: "",
      selectedDepartment: "",
      currentPage: 1,
      itemsPerPage: 10,
      isMobile: window.innerWidth < 768,
    };
  },
  computed: {
    departments() {
      const departmentSet = new Set(
        this.employees.map((employee) => employee.department)
      );
      return Array.from(departmentSet);
    },
    filteredEmployees() {
      return this.employees.filter((employee) => {
        const matchesSearch =
          employee.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          employee.position
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          employee.status
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          employee.location
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());

        const matchesDepartment = this.selectedDepartment
          ? employee.department === this.selectedDepartment
          : true;

        return matchesSearch && matchesDepartment;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
    },
    paginatedEmployees() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredEmployees.slice(start, end);
    },
  },
  methods: {
    navigateToUser() {
      this.$router.push(`/employee`);
    },
    getStatusClass(status) {
      switch (status) {
        case "Active":
          return "status-active";
        case "On Leave":
          return "status-on-leave";
        default:
          return "";
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<style scoped>
/* Table Styles */
.table-wrapper {
  overflow-x: auto;
  max-width: 100%;
}

.employee-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: 14px;
  font-family: "Assistant", sans-serif;
}

.employee-table th,
.employee-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.employee-table th {
  background-color: #0288d1;
  color: white;
}

.employee-table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

/* Card Styles */
.employee-cards {
  display: grid;
  flex-direction: column;
  border-top: 1px solid #ddd;
  grid-template-columns: 1fr 1fr;
}

.search-input {
  width: 100%;
}

.employee-card {
  background: white;
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
  font-family: "Assistant", sans-serif;
}

.employee-card:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}

.employee-stat {
  color: #0a4d86;
}

.card-header {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}

.profile-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
}

/* Utility Styles */
.status-active {
  color: green;
}

.status-on-leave {
  color: orange;
}

.table-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
}

.employee-name-container {
  display: flex;
  align-items: center;
}

/* Pagination */
.pagination-controls {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.pagination-controls .page-number {
  margin-left: 5px;
}

.pagination-controls button {
  padding: 5px 10px;
  background-color: #fff;
  color: #006ba6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-controls button.active {
  background-color: #006ba6;
  color: #fff;
}

.pagination-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

@media (max-width: 500px) {
  .table-controls {
    flex-direction: column;
    align-items: stretch;
  }

  .search-input {
    width: auto;
  }
}

@media (max-width: 600px) {
  .employee-cards {
    grid-template-columns: 1fr;
  }
}
</style>
