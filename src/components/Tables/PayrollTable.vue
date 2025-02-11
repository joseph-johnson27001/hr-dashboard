<template>
  <!-- Search Bar and Filters -->
  <div class="table-controls">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search"
      class="search-input"
    />
    <div class="filter-container">
      <select v-model="selectedDepartment" class="department-filter">
        <option value="">All Departments</option>
        <option v-for="dept in uniqueDepartments" :key="dept" :value="dept">
          {{ dept }}
        </option>
      </select>
      <select v-model="selectedStatus" class="department-filter">
        <option value="">All Statuses</option>
        <option value="Paid">Paid</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  </div>

  <!-- Payroll Table (Hidden on Mobile) -->
  <div v-if="!isMobile" class="table-wrapper">
    <table class="payroll-table">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Department</th>
          <th>Salary (£)</th>
          <th>Net Pay (£)</th>
          <th>Status</th>
          <th>Actions</th>
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
          <td>{{ employee.department }}</td>
          <td>£{{ formatNumber(employee.salary) }}</td>
          <td>£{{ formatNumber(employee.netPay) }}</td>
          <td :class="getStatusClass(employee.status)">
            {{ employee.status }}
          </td>
          <td>
            <button
              v-if="employee.status !== 'Paid'"
              @click="markAsPaid(employee)"
              class="btn btn-primary"
            >
              Mark Paid
            </button>
          </td>
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
        <span>{{ employee.name }}</span>
      </div>
      <p>
        <span class="employee-stat">Department:</span>
        {{ employee.department }}
      </p>
      <p>
        <span class="employee-stat">Salary:</span> £{{
          formatNumber(employee.salary)
        }}
      </p>
      <p>
        <span class="employee-stat">Net Pay:</span> £{{
          formatNumber(employee.netPay)
        }}
      </p>
      <p>
        <span class="employee-stat">Status: </span>
        <span class="employee-stat" :class="getStatusClass(employee.status)">{{
          employee.status
        }}</span>
      </p>
      <button
        v-if="employee.status !== 'Paid'"
        @click="markAsPaid(employee)"
        class="btn btn-primary"
      >
        Mark Paid
      </button>
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
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedDepartment: "",
      selectedStatus: "",
      currentPage: 1,
      itemsPerPage: 10,
      isMobile: window.innerWidth < 800,
      employees: [
        {
          id: 1,
          name: "John Doe",
          department: "HR",
          salary: 4000,
          deductions: 500,
          netPay: 3500,
          status: "Paid",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          department: "Engineering",
          salary: 5000,
          deductions: 700,
          netPay: 4300,
          status: "Pending",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 3,
          name: "Alice Johnson",
          department: "Sales",
          salary: 4500,
          deductions: 600,
          netPay: 3900,
          status: "Pending",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 4,
          name: "Michael Brown",
          department: "Marketing",
          salary: 4200,
          deductions: 500,
          netPay: 3700,
          status: "Paid",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 5,
          name: "Emily Harris",
          department: "Operations",
          salary: 4800,
          deductions: 650,
          netPay: 4150,
          status: "Pending",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 6,
          name: "David Wilson",
          department: "HR",
          salary: 3900,
          deductions: 450,
          netPay: 3450,
          status: "Paid",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 7,
          name: "Samantha Lee",
          department: "Engineering",
          salary: 5200,
          deductions: 800,
          netPay: 4400,
          status: "Pending",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 8,
          name: "William Clark",
          department: "Sales",
          salary: 4600,
          deductions: 550,
          netPay: 4050,
          status: "Paid",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 9,
          name: "Benjamin Turner",
          department: "Marketing",
          salary: 4300,
          deductions: 600,
          netPay: 3700,
          status: "Pending",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 10,
          name: "Chloe Martinez",
          department: "Operations",
          salary: 4900,
          deductions: 700,
          netPay: 4200,
          status: "Paid",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 11,
          name: "James Anderson",
          department: "HR",
          salary: 4100,
          deductions: 500,
          netPay: 3600,
          status: "Pending",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 12,
          name: "Olivia Robinson",
          department: "Engineering",
          salary: 5400,
          deductions: 900,
          netPay: 4500,
          status: "Paid",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 13,
          name: "Ethan White",
          department: "Sales",
          salary: 4700,
          deductions: 650,
          netPay: 4050,
          status: "Pending",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 14,
          name: "Isabella Lopez",
          department: "Marketing",
          salary: 4400,
          deductions: 600,
          netPay: 3800,
          status: "Paid",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 15,
          name: "Charlotte Walker",
          department: "Operations",
          salary: 5000,
          deductions: 750,
          netPay: 4250,
          status: "Pending",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
      ],
    };
  },
  computed: {
    uniqueDepartments() {
      return [...new Set(this.employees.map((emp) => emp.department))];
    },
    filteredEmployees() {
      return this.employees.filter((emp) => {
        return (
          (!this.selectedDepartment ||
            emp.department === this.selectedDepartment) &&
          (!this.selectedStatus || emp.status === this.selectedStatus) &&
          emp.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    },
    totalPages() {
      return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
    },
    paginatedEmployees() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredEmployees.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    navigateToUser() {
      this.$router.push(`/employee`);
    },
    formatNumber(num) {
      return num.toLocaleString();
    },
    getStatusClass(status) {
      return status === "Paid" ? "status-active" : "status-on-leave";
    },
    markAsPaid(employee) {
      employee.status = "Paid";
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 800;
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
/* Table Wrapper */
.table-wrapper {
  overflow-x: auto;
  max-width: 100%;
}

/* Payroll Table */
.payroll-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: 14px;
  font-family: "Assistant", sans-serif;
}

.payroll-table th,
.payroll-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.payroll-table th {
  background-color: #0288d1;
  color: white;
}

.payroll-table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.employee-name-container {
  display: flex;
  align-items: center;
}

/* Status Colors */
.status-active {
  color: green !important;
}

.status-on-leave {
  color: orange !important;
}

/* Search Bar and Filters */
.table-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;
}

.filter-container {
  display: flex;
}

.department-filter {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  margin-left: 10px;
}

.employee-cards {
  display: grid;
  flex-direction: column;
  border-top: 1px solid #ddd;
  grid-template-columns: 1fr 1fr;
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
  gap: 5px;
  font-size: 1.1rem;
}

.profile-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
}

/* Action Buttons */
.btn {
  padding: 8px 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #0288d1;
  color: white;
}

.btn-primary:hover {
  background-color: #026aa7;
}

.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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

/* Responsive Design */
@media (max-width: 800px) {
  .table-wrapper {
    display: none;
  }

  .table-controls {
    flex-direction: column;
  }

  .search-input {
    width: auto;
  }

  .profile-photo {
    margin-right: 0px;
  }

  .department-filter {
    margin-bottom: 10px;
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }

  .filter-container {
    gap: 10px;
  }
}

@media (max-width: 500px) {
  .employee-cards {
    grid-template-columns: 1fr;
  }
}
</style>
