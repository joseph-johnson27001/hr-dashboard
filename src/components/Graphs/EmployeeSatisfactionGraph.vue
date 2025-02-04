<template>
  <div class="chart-container">
    <canvas ref="satisfactionChart"></canvas>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "SatisfactionGraph",
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
            label: "Employee Satisfaction (%)",
            data: [85, 88, 82, 90, 87, 89, 92, 91, 85, 87, 89, 92],
            fill: false,
            borderColor: "#0288d1",
            tension: 0.2,
            borderWidth: 2,
            pointBackgroundColor: "#0288d1",
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            pointRadius: 5,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
          },
          y: {
            grid: { display: true },
            ticks: { min: 70, max: 100, stepSize: 5 },
          },
        },
        plugins: {
          title: { display: false },
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.raw}%`,
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

      if (this.$refs.satisfactionChart) {
        this.chartInstance = new ChartJS(this.$refs.satisfactionChart, {
          type: "line",
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
