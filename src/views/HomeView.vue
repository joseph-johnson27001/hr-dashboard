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

    <!-- InfoCards below the StatCards -->
    <div class="info-cards">
      <InfoCard title="Total Employees">
        <TotalEmployeesGraph />
      </InfoCard>
      <InfoCard title="Employee Satisfaction (%)">
        <EmployeeSatisfactionGraph />
      </InfoCard>
      <InfoCard title="Spending Breakdown (%)">
        <SpendingBreakdownGraph />
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import StatCard from "@/components/ui/StatCard.vue";
import TotalEmployeesGraph from "@/components/Graphs/TotalEmployeesGraph.vue";
import EmployeeSatisfactionGraph from "@/components/Graphs/EmployeeSatisfactionGraph.vue";
import SpendingBreakdownGraph from "@/components/Graphs/SpendingBreakdownGraph.vue";

export default {
  components: {
    InfoCard,
    StatCard,
    TotalEmployeesGraph,
    EmployeeSatisfactionGraph,
    SpendingBreakdownGraph,
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

@media (max-width: 1200px) {
  .stat-cards {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
}

@media (max-width: 900px) {
  .stat-cards {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
}

@media (max-width: 600px) {
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
