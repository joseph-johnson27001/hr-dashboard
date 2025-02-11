<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default {
  name: "DepartmentAbsenteeismGraph",
  data() {
    return {
      chartInstance: null,
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(() => {
      this.renderChart();
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeUnmount() {
    this.isMounted = false;
    window.removeEventListener("resize", this.handleResize);
    this.destroyChart();
  },
  methods: {
    renderChart() {
      if (!this.isMounted || !this.$refs.chartCanvas) return;

      this.destroyChart(); // Prevent duplicate charts

      this.chartInstance = new Chart(this.$refs.chartCanvas, {
        type: "bar",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "HR",
              data: [3, 4, 2, 5, 3, 6, 4, 3, 5, 4, 6, 5],
              backgroundColor: "rgb(255,224,230)", // Light pink
              borderColor: "rgb(255, 99, 132)", // Red border
              borderWidth: 1,
            },
            {
              label: "Engineering",
              data: [10, 12, 9, 14, 13, 15, 12, 10, 14, 13, 16, 15],
              backgroundColor: "#d7ecfb", // Light blue
              borderColor: "rgb(54, 162, 235)", // Blue border
              borderWidth: 1,
            },
            {
              label: "Sales",
              data: [8, 7, 9, 6, 10, 9, 7, 6, 8, 7, 9, 10],
              backgroundColor: "#ffecd9", // Light orange
              borderColor: "rgb(255, 159, 64)", // Orange border
              borderWidth: 1,
            },
            {
              label: "Marketing",
              data: [5, 6, 4, 7, 6, 8, 5, 4, 7, 6, 8, 9],
              backgroundColor: "#dbf2f2", // Light teal
              borderColor: "rgb(75, 192, 192)", // Teal border
              borderWidth: 1,
            },
            {
              label: "Operations",
              data: [7, 8, 6, 9, 8, 10, 7, 6, 9, 8, 11, 10],
              backgroundColor: "#ebe0ff", // Light purple
              borderColor: "rgb(153, 102, 255)", // Purple border
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: true },
              stacked: false, // Bars appear side by side
            },
            y: {
              grid: { display: false },
              stacked: false,
              ticks: { stepSize: 5 },
              title: { display: true, text: "Employees Absent" },
            },
          },
          plugins: {
            legend: {
              display: false,
              position: "top",
              labels: { padding: 20 },
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) =>
                  `${tooltipItem.dataset.label}: ${tooltipItem.raw} employees`,
              },
            },
          },
        },
      });
    },
    destroyChart() {
      if (this.chartInstance && this.isMounted) {
        this.chartInstance.destroy();
        this.chartInstance = null;
      }
    },
    handleResize() {
      if (this.chartInstance && this.isMounted) {
        requestAnimationFrame(() => {
          if (this.chartInstance) this.chartInstance.resize();
        });
      }
    },
  },
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
  min-height: 250px;
}
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
