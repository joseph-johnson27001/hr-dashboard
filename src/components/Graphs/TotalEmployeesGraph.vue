<template>
  <div class="chart-container">
    <canvas ref="totalEmployeesChart"></canvas>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarController,
} from "chart.js";

ChartJS.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "TotalEmployeesChart",
  data() {
    return {
      chartInstance: null,

      chartData: {
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
            label: "Number of Employees",
            data: [50, 55, 50, 55, 60, 55, 60, 65, 65, 70, 85, 70],
            backgroundColor: "rgba(204,231,246, 0.7)",
            borderColor: "#0288d1",
            borderWidth: 1,
          },
        ],
      },

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
            },
            ticks: {
              stepSize: 20,
            },
          },
        },
        plugins: {
          title: {
            display: false,
            text: "Total Employees Overview",
          },
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.raw.toLocaleString()}`,
            },
          },
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.renderChart();
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    this.destroyChart();
  },
  methods: {
    renderChart() {
      this.destroyChart();

      if (this.$refs.totalEmployeesChart) {
        this.chartInstance = new ChartJS(this.$refs.totalEmployeesChart, {
          type: "bar",
          data: this.chartData,
          options: this.chartOptions,
        });
      }
    },

    destroyChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
        this.chartInstance = null;
      }
    },

    handleResize() {
      if (this.chartInstance) {
        this.chartInstance.resize();
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
