<template>
  <div class="main-content">
    <!-- StatCards at the top -->
    <div class="stat-cards">
      <StatCard title="Total Employees" :value="150" />
      <StatCard title="Attendance Rate" :value="'90%'" />
      <StatCard title="Active Job Openings" :value="3" />
      <StatCard title="Total Employees" :value="150" />
      <StatCard title="Attendance Rate" :value="'90%'" />
      <StatCard title="Active Job Openings" :value="3" />
    </div>

    <!-- InfoCards below the StatCards -->
    <div class="info-cards">
      <InfoCard title="Employee Overview">
        <p>View the latest updates on the employee data.</p>
      </InfoCard>

      <InfoCard title="Attendance Summary">
        <p>Attendance data is available for the last 30 days.</p>
      </InfoCard>
    </div>
    <div class="info-cards">
      <InfoCard title="Employee Overview">
        <p>View the latest updates on the employee data.</p>
      </InfoCard>

      <InfoCard title="Attendance Summary">
        <p>Attendance data is available for the last 30 days.</p>
      </InfoCard>
    </div>
    <div class="info-cards">
      <InfoCard title="Employee Overview">
        <p>View the latest updates on the employee data.</p>
      </InfoCard>

      <InfoCard title="Attendance Summary">
        <p>Attendance data is available for the last 30 days.</p>
      </InfoCard>
    </div>
    <div class="info-cards">
      <InfoCard title="Employee Overview">
        <p>View the latest updates on the employee data.</p>
      </InfoCard>

      <InfoCard title="Attendance Summary">
        <p>Attendance data is available for the last 30 days.</p>
      </InfoCard>
    </div>
    <div class="info-cards">
      <InfoCard title="Employee Overview">
        <p>View the latest updates on the employee data.</p>
      </InfoCard>

      <InfoCard title="Attendance Summary">
        <p>Attendance data is available for the last 30 days.</p>
      </InfoCard>
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
