<template>
  <InfoCard title="Attendance Log">
    <div class="table-controls">
      <!-- Search Bar -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search attendance logs"
        class="search-input"
      />

      <!-- Filter Dropdown -->
      <select v-model="selectedFilter" class="filter-select">
        <option value="">All Departments</option>
        <option value="HR">HR</option>
        <option value="Engineering">Engineering</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Operations">Operations</option>
      </select>
    </div>

    <!-- Attendance Table -->
    <table class="attendance-table">
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Department</th>
          <th>Absence Date</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in paginatedLogs" :key="entry.id">
          <td>
            <div class="employee-name-container">
              <img
                :src="entry.photoUrl"
                alt="Profile Photo"
                class="profile-photo"
              />
              {{ entry.name }}
            </div>
          </td>
          <td>{{ entry.department }}</td>
          <td>{{ formatDate(entry.absenceDate) }}</td>
          <td>{{ entry.reason }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Controls (bottom-right) -->
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
      selectedFilter: "",
      currentPage: 1,
      itemsPerPage: 5,
      attendanceLogs: [
        {
          id: 1,
          name: "John Doe",
          department: "HR",
          absenceDate: "2025-01-05",
          reason: "Sick",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          department: "Engineering",
          absenceDate: "2025-01-06",
          reason: "Personal",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 3,
          name: "Alice Johnson",
          department: "Sales",
          absenceDate: "2025-01-07",
          reason: "Vacation",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 4,
          name: "Michael Brown",
          department: "Marketing",
          absenceDate: "2025-01-08",
          reason: "Family Emergency",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 5,
          name: "Emily Harris",
          department: "Operations",
          absenceDate: "2025-01-09",
          reason: "Sick",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 6,
          name: "David Wilson",
          department: "HR",
          absenceDate: "2025-01-10",
          reason: "Personal",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 7,
          name: "Samantha Lee",
          department: "Engineering",
          absenceDate: "2025-01-11",
          reason: "Sick",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 8,
          name: "William Clark",
          department: "Sales",
          absenceDate: "2025-01-12",
          reason: "Vacation",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 9,
          name: "Benjamin Turner",
          department: "Marketing",
          absenceDate: "2025-01-13",
          reason: "Sick",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 10,
          name: "Chloe Martinez",
          department: "Operations",
          absenceDate: "2025-01-14",
          reason: "Family Emergency",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 11,
          name: "James Anderson",
          department: "HR",
          absenceDate: "2025-01-15",
          reason: "Vacation",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 12,
          name: "Olivia Robinson",
          department: "Engineering",
          absenceDate: "2025-01-16",
          reason: "Sick",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 13,
          name: "Ethan White",
          department: "Sales",
          absenceDate: "2025-01-17",
          reason: "Personal",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 14,
          name: "Isabella Lopez",
          department: "Marketing",
          absenceDate: "2025-01-18",
          reason: "Sick",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 15,
          name: "Charlotte Walker",
          department: "Operations",
          absenceDate: "2025-01-19",
          reason: "Vacation",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
      ],
    };
  },
  computed: {
    filteredLogs() {
      let filtered = this.attendanceLogs;

      // Filter by department
      if (this.selectedFilter) {
        filtered = filtered.filter(
          (log) => log.department === this.selectedFilter
        );
      }

      // Filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(
          (log) =>
            log.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            log.department
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            log.absenceDate
              .toLowerCase()
              .includes(this.searchQuery.toLowerCase()) ||
            log.reason.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      return filtered;
    },
    totalPages() {
      return Math.ceil(this.filteredLogs.length / this.itemsPerPage);
    },
    paginatedLogs() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredLogs.slice(start, end);
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.attendance-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.attendance-table th,
.attendance-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.attendance-table th {
  background-color: #0288d1;
  color: white;
}

.attendance-table tbody tr:hover {
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

.table-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.search-input {
  padding: 8px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
}

.filter-select {
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ddd;
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
