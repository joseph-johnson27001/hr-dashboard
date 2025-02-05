import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Employees from "@/views/EmployeesView.vue";
import Reports from "@/views/ReportsView.vue";
import Attendance from "@/views/AttendanceView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/employees", component: Employees },
  { path: "/reports", component: Reports },
  { path: "/attendance", component: Attendance },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
