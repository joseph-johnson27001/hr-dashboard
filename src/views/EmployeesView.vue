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

    <!-- Employee Table -->
    <div class="table-container">
      <InfoCard title="Employee Information">
        <EmployeeTable :employees="employees" />
      </InfoCard>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import StatCard from "@/components/ui/StatCard.vue";
import EmployeeTable from "@/components/tables/EmployeeTable.vue";

export default {
  components: {
    InfoCard,
    StatCard,
    EmployeeTable,
  },

  data() {
    return {
      employees: [
        {
          id: 1,
          name: "John Doe",
          position: "Software Engineer",
          status: "Active",
          location: "New York",
          joinDate: "2021-06-15",
          department: "Engineering",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          position: "HR Manager",
          status: "On Leave",
          location: "Los Angeles",
          joinDate: "2020-08-01",
          department: "Human Resources",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 3,
          name: "Alice Johnson",
          position: "Marketing Specialist",
          status: "Active",
          location: "Chicago",
          joinDate: "2022-02-20",
          department: "Marketing",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 4,
          name: "Michael Brown",
          position: "Data Scientist",
          status: "Active",
          location: "San Francisco",
          joinDate: "2019-03-10",
          department: "Engineering",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 5,
          name: "Emily Davis",
          position: "Product Manager",
          status: "Active",
          location: "Austin",
          joinDate: "2021-11-23",
          department: "Product",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 6,
          name: "David Lee",
          position: "HR Specialist",
          status: "On Leave",
          location: "Miami",
          joinDate: "2022-01-15",
          department: "Human Resources",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 7,
          name: "Sophia Miller",
          position: "UX Designer",
          status: "Active",
          location: "Denver",
          joinDate: "2020-07-30",
          department: "Design",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 8,
          name: "James Wilson",
          position: "Marketing Manager",
          status: "Active",
          location: "Los Angeles",
          joinDate: "2021-02-18",
          department: "Marketing",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 9,
          name: "Olivia Taylor",
          position: "Product Designer",
          status: "On Leave",
          location: "Chicago",
          joinDate: "2018-10-05",
          department: "Design",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 10,
          name: "William Harris",
          position: "Backend Developer",
          status: "Active",
          location: "New York",
          joinDate: "2021-04-11",
          department: "Engineering",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 11,
          name: "Charlotte Clark",
          position: "Sales Manager",
          status: "Active",
          location: "San Francisco",
          joinDate: "2022-03-01",
          department: "Sales",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 12,
          name: "Lucas Rodriguez",
          position: "Sales Representative",
          status: "Active",
          location: "Los Angeles",
          joinDate: "2020-09-25",
          department: "Sales",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 13,
          name: "Ava Walker",
          position: "Project Manager",
          status: "On Leave",
          location: "Miami",
          joinDate: "2019-05-30",
          department: "Product",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 14,
          name: "Mason Young",
          position: "Software Engineer",
          status: "Active",
          location: "Austin",
          joinDate: "2022-01-05",
          department: "Engineering",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 15,
          name: "Amelia King",
          position: "Data Analyst",
          status: "Active",
          location: "Denver",
          joinDate: "2020-06-28",
          department: "Data",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 16,
          name: "Ethan Scott",
          position: "Finance Manager",
          status: "Active",
          location: "Chicago",
          joinDate: "2021-09-10",
          department: "Finance",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 17,
          name: "Isabella Harris",
          position: "Operations Manager",
          status: "On Leave",
          location: "San Francisco",
          joinDate: "2022-05-20",
          department: "Operations",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 18,
          name: "Elijah Robinson",
          position: "Customer Support",
          status: "Active",
          location: "Miami",
          joinDate: "2019-07-15",
          department: "Support",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 19,
          name: "Zoe Martinez",
          position: "Customer Support",
          status: "On Leave",
          location: "Los Angeles",
          joinDate: "2020-12-22",
          department: "Support",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 20,
          name: "Benjamin Gonzalez",
          position: "Legal Advisor",
          status: "Active",
          location: "Chicago",
          joinDate: "2018-04-12",
          department: "Legal",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
      ],
      workforceStats: [
        { title: "Total Employees", value: "150" },
        { title: "New Hires This Month", value: "8" },
        { title: "Active Employees", value: "136" },
        { title: "On Leave", value: "4" },
        { title: "Employee Turnover Rate", value: "5%" },
        { title: "Departments", value: "6" },
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
</style>
