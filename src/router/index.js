import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Employees from "@/views/EmployeesView.vue";
import Reports from "@/views/ReportsView.vue";
import Attendance from "@/views/AttendanceView.vue";
import Payroll from "@/views/PayrollView.vue";
import Login from "@/views/LoginView.vue";
import Employee from "@/views/EmployeeView.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  { path: "/employees", component: Employees },
  { path: "/reports", component: Reports },
  { path: "/attendance", component: Attendance },
  { path: "/payroll", component: Payroll },
  { path: "/employee", component: Employee },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "auto" };
  },
});

export default router;
