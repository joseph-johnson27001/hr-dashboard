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
          <tr v-for="employee in paginatedEmployees" :key="employee.id">
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
      >
        <div class="card-header">
          <img
            :src="employee.photoUrl"
            alt="Profile Photo"
            class="profile-photo"
          />
          <strong>{{ employee.name }}</strong>
        </div>
        <p><strong>Position:</strong> {{ employee.position }}</p>
        <p>
          <strong>Status:</strong>
          <span :class="getStatusClass(employee.status)">
            {{ " " + employee.status }}</span
          >
        </p>
        <p><strong>Location:</strong> {{ employee.location }}</p>
        <p><strong>Joined:</strong> {{ formatDate(employee.joinDate) }}</p>
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
      itemsPerPage: 15,
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
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.employee-card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
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

@media (max-width: 500px) {
  .table-controls {
    flex-direction: column;
    align-items: stretch;
  }
}

.search-input,
.department-filter {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
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
</style>
