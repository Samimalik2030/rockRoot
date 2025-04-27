import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@mantine/core";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [
        17000, 32000, 27000, 12000, 21000, 40000, 27000, 19000, 31000, 15000,
        28000, 39000,
      ],
      backgroundColor: "rgba(66, 135, 245, 0.7)",
      borderRadius: 6,
      barThickness: 20,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `$${(ctx.raw / 1000).toFixed(1)}K`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: any) => `${value / 1000}K`,
      },
      grid: {
        color: "transparent",
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

export default function RevenueChart() {
  return (
    <>
      <Box>
        <Bar data={data} options={options} />
      </Box>
    </>
  );
}
