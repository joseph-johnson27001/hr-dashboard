<template>
  <div>
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
      new ChartJS(this.$refs.totalEmployeesChart, {
        type: "bar",
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
};
</script>
