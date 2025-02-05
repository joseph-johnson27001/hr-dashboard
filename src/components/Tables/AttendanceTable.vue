<template>
  <div class="attendance-table">
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
    <table>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Department</th>
          <th>Absence Date</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in filteredLogs" :key="entry.id">
          <td>{{ entry.name }}</td>
          <td>{{ entry.department }}</td>
          <td>{{ entry.absenceDate }}</td>
          <td>{{ entry.reason }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedFilter: "",
      attendanceLogs: [
        {
          id: 1,
          name: "John Doe",
          department: "HR",
          absenceDate: "2025-01-05",
          reason: "Sick",
        },
        {
          id: 2,
          name: "Jane Smith",
          department: "Engineering",
          absenceDate: "2025-01-06",
          reason: "Personal",
        },
        // Add more sample data as needed
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
  },
};
</script>

<style scoped>
.attendance-table {
  width: 100%;
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
}

.filter-select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
