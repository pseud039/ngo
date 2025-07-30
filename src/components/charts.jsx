"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function MyPieChart() {
    const data = [
  { name: 'child care home', value: 400 },
  { name: 'cleanliness program', value:350},
  { name: 'helping people', value: 100 },
  { name: 'excursion', value: 100 },
  { name: 'feeding the poor', value: 50 },
];

const COLORS = ['#BEF3C0','#AC94F1','#FFF0CA', '#F9CF64', '#F38FBF',];


  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
        //   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend/> */}
      </PieChart>
    </ResponsiveContainer>
  );
}