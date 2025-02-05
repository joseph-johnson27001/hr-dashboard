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
      <InfoCard title="Total Payroll">
        <TotalPayrollGraph />
      </InfoCard>
      <InfoCard title="Total Payroll">
        <PayrollTable />
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import StatCard from "@/components/ui/StatCard.vue";

import TotalPayrollGraph from "@/components/Graphs/Payroll/TotalPayrollGraph.vue";
import PayrollTable from "@/components/tables/PayrollTable.vue";

export default {
  components: {
    InfoCard,
    StatCard,
    TotalPayrollGraph,
    PayrollTable,
  },
  data() {
    return {
      workforceStats: [
        { title: "Total Payroll (Monthly)", value: "£8,995.00" },
        { title: "Average Salary (Monthly)", value: "95/110" },
        { title: "Pending Payments", value: "7" },
        { title: "Pending Payments", value: "£2560.50" },
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
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
}

@media (max-width: 1200px) {
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
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
}
</style>
