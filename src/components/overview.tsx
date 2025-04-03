'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Fenced Bodies', total: 80 },
  { name: 'Initiatives', total: 60 },
  { name: 'Disease Outbreak', total: 30 },
  { name: 'Oxygen Levels', total: 70 },
  { name: 'Cleaning Activities', total: 50 },
  { name: 'Water Bodies Monitored', total: 100 }
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          type="category"
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          type="number"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#002163" radius={[4, 4, 0, 0]} barSize={100} />
      </BarChart>
    </ResponsiveContainer>
  );
}
