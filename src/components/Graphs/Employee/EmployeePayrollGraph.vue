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
  name: "SpendingBreakdownGraph",
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
      // Prevent rendering if the component is not mounted
      if (!this.isMounted) return;

      this.destroyChart(); // Prevents duplicate charts

      if (!this.$refs.chartCanvas) return; // Prevents null reference errors

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
              label: "Salary",
              data: [
                4000, 4200, 3900, 4500, 5000, 4600, 4800, 4900, 5200, 5300,
                5400, 5500,
              ], // £ values for Salary
              backgroundColor: "#d7ecfb",
              borderColor: "rgb(54, 162, 235)",
              borderWidth: 1,
            },
            {
              label: "Bonuses",
              data: [
                500, 600, 700, 500, 800, 600, 700, 600, 700, 800, 900, 1000,
              ], // £ values for Bonuses
              backgroundColor: "rgba(34, 139, 34, 0.2)",
              borderColor: "rgba(34, 139, 34, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false }, stacked: true },
            y: {
              stacked: true,
              grid: { display: false },
              ticks: { stepSize: 1000 }, // Adjust step size according to your data
            },
          },
          plugins: {
            legend: { display: true, position: "top", labels: { padding: 20 } },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => {
                  const value = tooltipItem.raw;
                  return `${
                    tooltipItem.dataset.label
                  }: £${value.toLocaleString()}`; // Display £ with formatting
                },
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
