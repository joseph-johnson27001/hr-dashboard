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
      <InfoCard title="Employee Overview"> </InfoCard>
      <InfoCard title="Attendance Summary"> </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import StatCard from "@/components/ui/StatCard.vue";

export default {
  components: {
    InfoCard,
    StatCard,
  },
  data() {
    return {
      workforceStats: [
        { title: "Total Employees", value: 150 },
        { title: "New Hires This Month", value: 8 },
        { title: "Total Payroll (Monthly)", value: "$1.2M" },
        { title: "Employee Satisfaction", value: "85%" },
        { title: "Training Rate", value: "78%" },
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
}

.stat-section {
  margin-bottom: 10px;
}

.stat-category {
  font-weight: 100;
  font-size: 16px;
  margin-bottom: 10px;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.info-cards {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
}
</style>
