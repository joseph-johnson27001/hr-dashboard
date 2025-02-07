<template>
  <div class="main-content">
    <!-- Report Filters -->
    <div class="filters-container">
      <div class="dropdown-group">
        <label for="report-type">Report Type:</label>
        <select id="report-type" v-model="selectedReportType">
          <option value="">All Reports</option>
          <option v-for="type in reportTypes" :key="type" :value="type">
            {{ type }}
          </option>
        </select>
      </div>

      <div class="dropdown-group">
        <label for="date-range">Date Range:</label>
        <select id="date-range" v-model="selectedDateRange">
          <option value="This Month">This Month</option>
          <option value="Last 3 Months">Last 3 Months</option>
          <option value="Last 6 Months">Last 6 Months</option>
          <option value="Last Year">Last Year</option>
        </select>
      </div>
    </div>

    <!-- Available Reports -->
    <div class="stats-container">
      <div class="stat-section">
        <div class="stat-cards">
          <StatCard
            v-for="report in filteredReports"
            :key="report.id"
            :title="report.title"
            :value="'Download'"
            @click="downloadReport(report.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatCard from "@/components/ui/StatCard.vue";

export default {
  components: {
    StatCard,
  },

  data() {
    return {
      selectedReportType: "",
      selectedDateRange: "This Month",
      reportTypes: [
        "Payroll",
        "Attendance",
        "Employee",
        "Performance",
        "Turnover",
      ],

      reports: [
        { id: 1, title: "Payroll Summary", type: "Payroll" },
        { id: 2, title: "Attendance Report", type: "Attendance" },
        { id: 3, title: "Employee Turnover", type: "Turnover" },
        { id: 4, title: "Performance Review", type: "Performance" },
        { id: 5, title: "Overtime Report", type: "Attendance" },
        { id: 6, title: "Salary Breakdown", type: "Payroll" },
        { id: 7, title: "Leave Requests", type: "Employee" },
        { id: 8, title: "Department Budget", type: "Payroll" },
        { id: 9, title: "Sick Days Report", type: "Attendance" },
        { id: 10, title: "Promotions & Raises", type: "Employee" },
      ],
    };
  },

  computed: {
    filteredReports() {
      if (!this.selectedReportType) return this.reports;
      return this.reports.filter(
        (report) => report.type === this.selectedReportType
      );
    },
  },

  methods: {
    downloadReport(reportId) {
      alert(`Downloading report ID: ${reportId}`);
    },
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Stats section */
.stat-section {
  margin-bottom: 10px;
  width: 100%;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  width: 100%;
}

/* Dropdown Filters */
.filters-container {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 15px;
}

.dropdown-group {
  display: flex;
  flex-direction: column;
}

.dropdown-group label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}

.dropdown-group select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

/* Responsive Grid */
@media (max-width: 900px) {
  .stat-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 275px) {
  .stat-cards {
    grid-template-columns: 1fr;
  }
}
</style>
