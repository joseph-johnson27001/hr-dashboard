<template>
  <div>
    <canvas ref="profitChart"></canvas>
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
  name: "ProfitGraph",
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
            label: "Profit (in GBP)",
            data: [
              12000, 15000, 18000, 22000, 19000, 24000, 26000, 28000, 30000,
              32000, 31000, 33000,
            ],
            backgroundColor: "rgba(204,231,246)",
            borderColor: "#0288d1",

            borderWidth: 1,
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
              stepSize: 10000,
            },
          },
        },
        plugins: {
          title: {
            display: false,
            text: "Profit Overview",
          },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `£${tooltipItem.raw.toLocaleString()}`,
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
      new ChartJS(this.$refs.profitChart, {
        type: "bar",
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
