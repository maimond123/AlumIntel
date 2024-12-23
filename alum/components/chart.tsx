"use client"

import { Bar, Line, BarChart as RechartsBarChart, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "'recharts'"

interface ChartProps {
  data: Array<{ name: string; total: number }>
}

export function BarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

export function LineChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
        <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

