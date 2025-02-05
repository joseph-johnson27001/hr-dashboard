<template>
  <InfoCard title="Employee Information">
    <!-- Use the EmployeeTable component and pass the employees data as a prop -->
    <EmployeeTable :employees="employees" />
  </InfoCard>
</template>

<script>
import InfoCard from "@/components/ui/InfoCard.vue";
import EmployeeTable from "@/components/tables/EmployeeTable.vue"; // Import the EmployeeTable component

export default {
  components: {
    InfoCard,
    EmployeeTable, // Register the EmployeeTable component
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
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          position: "HR Manager",
          status: "On Leave",
          location: "Los Angeles",
          joinDate: "2020-08-10",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 3,
          name: "Alice Johnson",
          position: "Product Manager",
          status: "Active",
          location: "Chicago",
          joinDate: "2019-11-30",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 4,
          name: "Michael Brown",
          position: "UX Designer",
          status: "Active",
          location: "San Francisco",
          joinDate: "2022-02-01",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 5,
          name: "Sarah Davis",
          position: "Marketing Lead",
          status: "On Leave",
          location: "Miami",
          joinDate: "2018-04-12",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 6,
          name: "David Wilson",
          position: "Lead Developer",
          status: "Active",
          location: "Boston",
          joinDate: "2020-05-22",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 7,
          name: "Emily Harris",
          position: "Sales Executive",
          status: "Active",
          location: "Seattle",
          joinDate: "2021-07-30",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 8,
          name: "James Martinez",
          position: "Finance Analyst",
          status: "On Leave",
          location: "Chicago",
          joinDate: "2017-09-09",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 9,
          name: "Samantha Lee",
          position: "Operations Manager",
          status: "Active",
          location: "Dallas",
          joinDate: "2021-11-18",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 10,
          name: "William Clark",
          position: "Data Scientist",
          status: "Active",
          location: "Austin",
          joinDate: "2019-01-15",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 11,
          name: "Benjamin Turner",
          position: "Software Engineer",
          status: "Active",
          location: "New York",
          joinDate: "2020-03-22",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 12,
          name: "Sophia Harris",
          position: "HR Assistant",
          status: "On Leave",
          location: "Los Angeles",
          joinDate: "2022-04-17",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 13,
          name: "Ethan White",
          position: "Product Designer",
          status: "Active",
          location: "Chicago",
          joinDate: "2021-10-05",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 14,
          name: "Chloe Martinez",
          position: "Marketing Executive",
          status: "On Leave",
          location: "Miami",
          joinDate: "2019-12-01",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 15,
          name: "James Anderson",
          position: "Lead Developer",
          status: "Active",
          location: "Boston",
          joinDate: "2020-08-15",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 16,
          name: "Olivia Robinson",
          position: "Sales Manager",
          status: "Active",
          location: "Seattle",
          joinDate: "2018-11-09",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
        {
          id: 17,
          name: "Isabella Lopez",
          position: "Operations Assistant",
          status: "Active",
          location: "Dallas",
          joinDate: "2021-01-29",
          photoUrl: "images/ProfilePhoto1.jpg",
        },
        {
          id: 18,
          name: "Charlotte Walker",
          position: "Product Manager",
          status: "On Leave",
          location: "Chicago",
          joinDate: "2017-05-20",
          photoUrl: "images/ProfilePhoto2.jpg",
        },
        {
          id: 19,
          name: "Mason Scott",
          position: "Marketing Manager",
          status: "Active",
          location: "Austin",
          joinDate: "2021-02-14",
          photoUrl: "images/ProfilePhoto3.jpg",
        },
        {
          id: 20,
          name: "Amelia Young",
          position: "Data Analyst",
          status: "Active",
          location: "San Francisco",
          joinDate: "2020-07-08",
          photoUrl: "images/ProfilePhoto4.jpg",
        },
      ],
    };
  },
};
</script>
