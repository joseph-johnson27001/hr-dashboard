<template>
  <div class="main-content">
    <!-- StatCards at the top -->
    <div class="stat-cards">
      <StatCard
        v-for="stat in stats"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
      />
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
      stats: [
        { title: "Total Employees", value: 150 },
        { title: "Attendance Rate", value: "90%" },
        { title: "Active Job Openings", value: 3 },
        { title: "Departments", value: 5 },
        { title: "New Hires This Month", value: 8 },
        { title: "Pending Approvals", value: 4 },
      ],
    };
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}

.stat-cards .stat-card {
  flex: 1;
}

.info-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
}
</style>
