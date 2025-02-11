<template>
  <div class="main-content">
    <!-- Employee Header Card -->
    <div class="employee-card">
      <!-- Desktop version -->
      <div class="employee-header desktop-header">
        <div class="employee-info">
          <img
            :src="employee.photo"
            alt="Employee Photo"
            class="employee-photo"
          />
          <div class="employee-details">
            <h3>{{ employee.name }}</h3>
            <p>{{ employee.position }} - {{ employee.department }}</p>
          </div>
        </div>
        <div class="extra-info">
          <span><strong>Join Date:</strong> {{ employee.joinDate }}</span>
          <span><strong>Birthday:</strong> {{ employee.birthday }}</span>
        </div>
      </div>

      <!-- Mobile version -->
      <div class="employee-header mobile-header">
        <div class="employee-info">
          <img
            :src="employee.photo"
            alt="Employee Photo"
            class="employee-photo"
          />
          <div class="employee-details">
            <h3>{{ employee.name }}</h3>
            <p>{{ employee.position }}</p>
            <p>{{ employee.department }}</p>
          </div>
        </div>
        <div class="extra-info">
          <span><strong>Join Date:</strong> {{ employee.joinDate }}</span>
          <span><strong>Birthday:</strong> {{ employee.birthday }}</span>
        </div>
      </div>
    </div>

    <!-- Employee Stats -->
    <div class="stats-container">
      <div class="stat-section">
        <div class="stat-cards">
          <StatCard
            v-for="stat in employeeStats"
            :key="stat.title"
            :title="stat.title"
            :value="stat.value"
            :icon="stat.icon"
          />
        </div>
      </div>
    </div>

    <!-- Graph Section -->
    <div class="info-cards">
      <InfoCard title="Performance">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <EmployeePerformanceGraph :employeeId="employee.id" />
      </InfoCard>

      <InfoCard title="Attendance History">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <EmployeeAttendanceGraph :employeeId="employee.id" />
      </InfoCard>
    </div>

    <!-- Tables for Payroll & Attendance -->
    <div class="info-cards">
      <InfoCard title="Payroll History">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <EmployeePayrollGraph :employeeId="employee.id" />
      </InfoCard>

      <InfoCard title="Satisfaction">
        <div class="card-header">
          <span class="download-icon"><i class="fas fa-download"></i></span>
        </div>
        <EmployeeSatisfactionGraph :employeeId="employee.id" />
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import StatCard from "@/components/ui/StatCard.vue";
import EmployeePerformanceGraph from "@/components/Graphs/Employee/EmployeePerformanceGraph.vue";
import EmployeeAttendanceGraph from "@/components/Graphs/Employee/EmployeeAttendanceGraph.vue";
import EmployeePayrollGraph from "@/components/Graphs/Employee/EmployeePayrollGraph.vue";
import EmployeeSatisfactionGraph from "@/components/Graphs/Employee/EmployeeSatisfactionGraph.vue";

export default {
  components: {
    InfoCard,
    StatCard,
    EmployeePerformanceGraph,
    EmployeeAttendanceGraph,
    EmployeePayrollGraph,
    EmployeeSatisfactionGraph,
  },
  data() {
    return {
      employee: {
        id: 1,
        name: "John Doe",
        position: "Software Engineer",
        department: "IT",
        photo: "images/ProfilePhoto4.jpg",
        joinDate: "15th March 2018",
        birthday: "7th July 1990",
      },
      employeeStats: [
        {
          title: "Salary (Monthly)",
          value: "£3,500.00",
          icon: "fas fa-money-bill-wave",
        },
        { title: "Performance Score", value: "88%", icon: "fas fa-chart-line" },
        {
          title: "Attendance Rate",
          value: "95%",
          icon: "fas fa-calendar-check",
        },
        { title: "Overtime Hours", value: "10h", icon: "fas fa-clock" },
        { title: "Projects Completed", value: "15", icon: "fas fa-tasks" },
        { title: "Sick Days Taken", value: "2", icon: "fas fa-procedures" },
        {
          title: "Holiday Allowance Left",
          value: "12 Days",
          icon: "fas fa-umbrella-beach",
        },
        {
          title: "Training Sessions Completed",
          value: "5",
          icon: "fas fa-graduation-cap",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.employee-card {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 8px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
}

.employee-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.desktop-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.mobile-header {
  display: none;
  flex-direction: column;
  align-items: center;
}

.employee-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

h3 {
  font-weight: 400;
  font-family: "Poppins", sans-serif;
  color: #0a4d86;
  margin-bottom: 10px;
}

.employee-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.employee-details {
  display: flex;
  flex-direction: column;
  font-family: "Assistant", sans-serif;
}

.extra-info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-left: 20px;
  font-family: "Assistant", sans-serif;
  padding: 10px;
}

.extra-info strong {
  color: #0a4d86;
}

.extra-info span {
  margin-bottom: 5px;
}

.stat-section {
  margin-bottom: 10px;
  width: 100%;
}

.stat-cards {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-bottom: 10px;
  width: 100%;
}

@media (max-width: 1400px) {
  .stat-cards {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (max-width: 900px) {
  .stat-cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 450px) {
  .stat-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .desktop-header {
    display: none;
  }

  .mobile-header {
    display: flex;
  }

  .employee-info {
    flex-direction: column;
    text-align: center;
  }

  .extra-info {
    margin-left: 0;
    text-align: center;
  }
}

.info-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
}

@media (max-width: 900px) {
  .info-cards {
    grid-template-columns: 1fr;
  }
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
  transition: color 0.2s ease;
  margin-top: -22px;
}

.download-icon:hover {
  color: #01579b;
}
</style>
