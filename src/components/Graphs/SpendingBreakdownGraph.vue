<template>
  <canvas ref="chartCanvas"></canvas>
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
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      new Chart(this.$refs.chartCanvas, {
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
              label: "Salaries",
              data: [40, 42, 39, 45, 50, 46, 48, 49, 52, 53, 54, 55],
              backgroundColor: "rgb(255,224,230)",
              borderColor: "rgb(255, 99, 132)",
              borderWidth: 1,
            },
            {
              label: "Benefits",
              data: [15, 17, 16, 18, 20, 19, 21, 20, 22, 23, 24, 25],
              backgroundColor: "#ffecd9",
              borderColor: "rgb(255, 159, 64)",
              borderWidth: 1,
            },
            {
              label: "Training",
              data: [12, 13, 14, 15, 14, 13, 14, 15, 16, 17, 18, 19],
              backgroundColor: "#dbf2f2",
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 1,
            },
            {
              label: "Recruitment",
              data: [8, 9, 7, 10, 8, 9, 8, 10, 9, 9, 8, 9],
              backgroundColor: "#d7ecfb",
              borderColor: "rgb(54, 162, 235)",
              borderWidth: 1,
            },
            {
              label: "Operations",
              data: [10, 11, 9, 12, 11, 12, 10, 11, 12, 13, 14, 15],
              backgroundColor: "#ebe0ff",
              borderColor: "rgb(153, 102, 255)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
              stacked: true,
            },
            y: {
              stacked: true,
              grid: {
                display: true,
              },
              ticks: {
                stepSize: 20,
              },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                padding: 20,
              },
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) =>
                  `${tooltipItem.dataset.label}: ${tooltipItem.raw}%`,
              },
            },
          },
        },
      });
    },
  },
};
</script>
