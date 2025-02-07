<template>
  <div class="main-content">
    <!-- Grouped Stat Cards -->
    <div class="stats-container">
      <div
        v-for="(group, category) in groupedStats"
        :key="category"
        class="stat-section"
      >
        <div class="stat-cards">
          <StatCard
            v-for="stat in group"
            :key="stat.title"
            :title="stat.title"
            :value="stat.value"
          />
        </div>
      </div>
    </div>

    <!-- InfoCards with Download Icons -->
    <div class="info-cards">
      <InfoCard title="Total Employees">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <TotalEmployeesGraph />
      </InfoCard>

      <InfoCard title="Employee Performance">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <EmployeePerformanceGraph />
      </InfoCard>

      <InfoCard title="Employee Satisfaction (%)">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <EmployeeSatisfactionGraph />
      </InfoCard>

      <InfoCard title="Spending Breakdown (%)">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <SpendingBreakdownGraph />
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import StatCard from "@/components/ui/StatCard.vue";
import TotalEmployeesGraph from "@/components/Graphs/HomePage/TotalEmployeesGraph.vue";
import EmployeeSatisfactionGraph from "@/components/Graphs/HomePage/EmployeeSatisfactionGraph.vue";
import SpendingBreakdownGraph from "@/components/Graphs/HomePage/SpendingBreakdownGraph.vue";
import EmployeePerformanceGraph from "@/components/Graphs/HomePage/EmployeePerformanceGraph.vue";

export default {
  components: {
    InfoCard,
    StatCard,
    TotalEmployeesGraph,
    EmployeeSatisfactionGraph,
    SpendingBreakdownGraph,
    EmployeePerformanceGraph,
  },
  data() {
    return {
      workforceStats: [
        { title: "Total Employees", value: 150 },
        { title: "New Hires This Month", value: 8 },
        { title: "Employee Turnover Rate", value: "5%" },
        { title: "Total Payroll (Monthly)", value: "$1.2M" },
        { title: "Employee Satisfaction", value: "85%" },
        { title: "Absenteeism Rate", value: "3%" },
      ],
    };
  },
  computed: {
    groupedStats() {
      return {
        Workforce: this.workforceStats,
      };
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

.stat-section {
  margin-bottom: 10px;
  width: 100%;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  width: 100%;
}

/* Just the download icon without functionality */
.card-header {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}

.download-icon {
  cursor: pointer;
  font-size: 16px;
  color: #0288d1;
  transition: color 0.1s linear;
  margin-top: -22px;
}

.download-icon:hover {
  color: #0a4d86;
}

@media (max-width: 1200px) {
  .stat-cards {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
}

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

.info-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
}

@media (max-width: 900px) {
  .info-cards {
    grid-template-columns: 1fr;
  }
}
</style>
