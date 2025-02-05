<template>
  <table class="employee-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Status</th>
        <th>Location</th>
        <th>Join Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>
          <div class="employee-name-container">
            <img
              :src="employee.photoUrl"
              alt="Profile Photo"
              class="profile-photo"
            />
            {{ employee.name }}
          </div>
        </td>
        <td>{{ employee.position }}</td>
        <td :class="getStatusClass(employee.status)">
          {{ employee.status }}
        </td>
        <td>{{ employee.location }}</td>
        <td>{{ formatDate(employee.joinDate) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getStatusClass(status) {
      switch (status) {
        case "Active":
          return "status-active";
        case "On Leave":
          return "status-on-leave";
        default:
          return "";
      }
    },
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style scoped>
.employee-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-size: 14px;
}

.employee-table th,
.employee-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.employee-table th {
  background-color: #0288d1;
  color: white;
}

.employee-table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.status-active {
  color: green;
}

.status-on-leave {
  color: orange;
}

.profile-photo {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.employee-table td {
  vertical-align: middle;
}

.employee-name-container {
  display: flex;
  align-items: center;
}
</style>
