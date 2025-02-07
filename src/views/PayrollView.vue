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
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <TotalPayrollGraph />
      </InfoCard>

      <InfoCard title="Employee Payroll">
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
        { title: "Average Salary (Monthly)", value: "£1,113.00" },
        { title: "Pending Payments", value: "7" },
        { title: "Pending Payment Value", value: "£2560.50" },
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
  color: #01579b;
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
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
}
</style>
