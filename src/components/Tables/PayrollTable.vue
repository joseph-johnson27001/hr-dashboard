<template>
  <InfoCard title="Payroll">
    <div class="table-controls">
      <!-- Search Bar -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="search-input"
      />

      <!-- Filter by Department -->
      <div>
        <select v-model="selectedDepartment" class="filter-select">
          <option value="">All Departments</option>
          <option v-for="dept in uniqueDepartments" :key="dept" :value="dept">
            {{ dept }}
          </option>
        </select>

        <!-- Filter by Status -->
        <select v-model="selectedStatus" class="filter-select">
          <option value="">All Statuses</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </div>

    <!-- Payroll Table -->
    <table class="payroll-table">
      <thead>
        <tr>
          <th @click="sortBy('name')">Employee Name</th>
          <th @click="sortBy('department')">Department</th>
          <th @click="sortBy('salary')">Salary (£)</th>
          <th @click="sortBy('deductions')">Deductions (£)</th>
          <th @click="sortBy('netPay')">Net Pay (£)</th>
          <th @click="sortBy('status')">Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in paginatedEmployees" :key="index">
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
          <td>£{{ formatNumber(employee.deductions) }}</td>
          <td>£{{ formatNumber(employee.netPay) }}</td>
          <td>
            <span
              :class="[
                'status-badge',
                employee.status === 'Paid' ? 'paid' : 'pending',
              ]"
            >
              {{ employee.status }}
            </span>
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
  </InfoCard>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedDepartment: "",
      selectedStatus: "",
      currentPage: 1,
      itemsPerPage: 5,
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
      return this.employees
        .filter((emp) => {
          return (
            (!this.selectedDepartment ||
              emp.department === this.selectedDepartment) &&
            (!this.selectedStatus || emp.status === this.selectedStatus) &&
            emp.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        })
        .sort((a, b) => {
          if (!this.sortKey) return 0;
          return (a[this.sortKey] > b[this.sortKey] ? 1 : -1) * this.sortOrder;
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
    formatNumber(num) {
      return num.toLocaleString();
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    markAsPaid(employee) {
      employee.status = "Paid";
    },
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortOrder *= -1; // Toggle sorting order
      } else {
        this.sortKey = key;
        this.sortOrder = 1;
      }
    },
  },
};
</script>

<style scoped>
.payroll-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
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
  cursor: pointer;
}

.payroll-table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.profile-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.employee-name-container {
  display: flex;
  align-items: center;
}

.status-badge {
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
}

.status-badge.paid {
  background-color: #4caf50;
}

.status-badge.pending {
  background-color: #ff9800;
}

.table-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.search-input {
  padding: 8px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
}

.filter-select {
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ccc;
  margin-left: 5px;
}

.btn {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #0288d1;
  color: white;
}

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
