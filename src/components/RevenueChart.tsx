import { useEffect, useState } from "react";
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
import { Box, Text } from "@mantine/core";
import axios from "axios";
import api from "../api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => `${(ctx.raw / 1000).toFixed(1)}K`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: any) => `${value / 1000}K`,
      },
      grid: { color: "transparent" },
    },
    x: {
      grid: { display: false },
    },
  },
};

export default function RevenueChart() {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/orders/sales/daily");
        const sales = res.data;

        // Extract dates and totalSales
        const labels = sales.map((item: any) => item.date); // e.g. ["2025-05-15", ...]
        const data = sales.map((item: any) => item.totalSales);

        setChartData({
          labels,
          datasets: [
            {
              label: "Revenue",
              data,
              backgroundColor: "rgba(66, 135, 245, 0.7)",
              borderRadius: 6,
              barThickness: 20,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching sales data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Text fw={600} mb="sm" size="lg">Daily Revenue Chart</Text>
      {chartData ? <Bar data={chartData} options={options} /> : <Text>Loading...</Text>}
    </Box>
  );
}
