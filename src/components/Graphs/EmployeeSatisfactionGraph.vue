<template>
  <div>
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
              min: 70,
              max: 100,
              stepSize: 5,
            },
          },
        },
        plugins: {
          title: {
            display: false,
            text: "Employee Satisfaction",
          },
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
    this.renderChart();
  },
  methods: {
    renderChart() {
      new ChartJS(this.$refs.satisfactionChart, {
        type: "line",
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
};
</script>

<style scoped>
canvas {
  width: 100%;
  max-height: 300px;
}
</style>
