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

    <!-- Table container -->
    <div class="table-container">
      <InfoCard title="Attendance">
        <AttendanceTable />
      </InfoCard>
    </div>

    <!-- InfoCards below the StatCards -->
    <div class="info-cards">
      <InfoCard title="Department Absenteeism">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <DepartmentAbsenteeismGraph />
      </InfoCard>

      <InfoCard title="Total Absenteeism (Monthly)">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <TotalAbsenteeismGraph />
      </InfoCard>

      <InfoCard title="Late Arrivals (Monthly)">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <LateArrivalsGraph />
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
import AttendanceTable from "@/components/tables/AttendanceTable.vue";

export default {
  components: {
    InfoCard,
    StatCard,
    TotalAbsenteeismGraph,
    LateArrivalsGraph,
    DepartmentAbsenteeismGraph,
    AttendanceTable,
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
  grid-template-columns: 1fr 1fr 1fr;
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
  color: #0a4d86;
}

@media (max-width: 450px) {
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

.info-cards > :nth-child(1) {
  grid-column: span 2;
}

@media (max-width: 900px) {
  .info-cards {
    grid-template-columns: 1fr;
  }
  .info-cards > * {
    grid-column: span 1 !important;
  }
}

.table-container {
  margin-bottom: 10px;
}
</style>
