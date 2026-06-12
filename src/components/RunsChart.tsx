'use client'
// src/components/RunsChart.tsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { seasonRuns } from '@/lib/data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function RunsChart() {
  const data = {
    labels: seasonRuns.map(r => r.season),
    datasets: [
      {
        label: 'Runs',
        data: seasonRuns.map(r => r.runs),
        backgroundColor: '#5DCAA5',
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { y: number } }) => ` ${ctx.parsed.y} runs`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#888' },
      },
      y: {
        grid: { color: 'rgba(0,0,0,0.06)' },
        ticks: { color: '#888' },
      },
    },
  }

  return (
    <div style={{ height: 240 }}>
      <Bar data={data} options ={options as any} />
    </div>
  )
}
