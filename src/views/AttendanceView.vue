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
      <InfoCard title="Total Absenteeism (Monthly)">
        <TotalAbsenteeismGraph />
      </InfoCard>
      <InfoCard title="Late Arrivals (Monthly)">
        <LateArrivalsGraph />
      </InfoCard>
      <InfoCard title="Department Absenteeism">
        <DepartmentAbsenteeismGraph />
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import StatCard from "@/components/ui/StatCard.vue";

import TotalAbsenteeismGraph from "@/components/Graphs/Attendance/TotalAbsenteeismGraph.vue";
import LateArrivalsGraph from "@/components/Graphs/Attendance/LateArrivalsGraph.vue";
import DepartmentAbsenteeismGraph from "@/components/Graphs/Attendance/DepartmentAbsenteeismGraph.vue";

export default {
  components: {
    InfoCard,
    StatCard,
    TotalAbsenteeismGraph,
    LateArrivalsGraph,
    DepartmentAbsenteeismGraph,
  },
  data() {
    return {
      workforceStats: [
        { title: "Absenteeism Rate", value: "3%" },
        { title: "Absences (Monthly)", value: 8 },
        { title: "Late Arrivals (Monthly)", value: 12 },
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

.info-cards > :last-child:nth-child(3) {
  grid-column: span 2; /* Makes the last child span across both columns */
}

@media (max-width: 900px) {
  .info-cards {
    grid-template-columns: 1fr; /* Stacks graphs on smaller screens */
  }
}
</style>
