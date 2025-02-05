<template>
  <div class="chart-container">
    <canvas ref="payrollChart"></canvas>
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
  name: "PayrollGraph",
  data() {
    return {
      chartInstance: null,
      isDestroyed: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.renderChart();
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeUnmount() {
    this.isDestroyed = true;
    window.removeEventListener("resize", this.handleResize);
    this.destroyChart();
  },
  methods: {
    renderChart() {
      if (this.isDestroyed || !this.$refs.payrollChart) return;
      this.destroyChart();

      const payrollData = [
        110, 125, 130, 128, 135, 140, 138, 145, 142, 150, 155, 170,
      ];
      const maxPayroll = Math.max(...payrollData) + 10;
      const stepSize = 20;

      this.chartInstance = new ChartJS(this.$refs.payrollChart, {
        type: "line",
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
              label: "Total Payroll ($000s)",
              data: payrollData,
              fill: false,
              borderColor: "#0288d1",
              borderWidth: 3,
              tension: 0.3,
              pointBackgroundColor: "#0288d1",
              pointBorderColor: "#fff",
              pointBorderWidth: 2,
              pointRadius: 6,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: "#01579b",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false } },
            y: {
              grid: { display: true },
              min: 100,
              max: maxPayroll,
              ticks: {
                stepSize: stepSize,
                callback: (value) => `$${value}K`,
              },
            },
          },
          plugins: {
            title: { display: false },
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => `$${tooltipItem.raw}K`,
              },
            },
          },
        },
      });
    },

    destroyChart() {
      if (this.chartInstance && !this.isDestroyed) {
        this.chartInstance.destroy();
        this.chartInstance = null;
      }
    },

    handleResize() {
      if (this.chartInstance && !this.isDestroyed) {
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
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  width: 100% !important;
  height: 100;
}
</style>
