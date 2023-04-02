import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marks = [
    { id: 1, name: "Alice", math: 80, physics: 75, chemistry: 90 },
    { id: 2, name: "Bob", math: 85, physics: 90, chemistry: 70 },
    { id: 3, name: "Charlie", math: 90, physics: 80, chemistry: 85 },
    { id: 4, name: "David", math: 75, physics: 85, chemistry: 80 },
    { id: 5, name: "Emma", math: 95, physics: 80, chemistry: 90 },
    { id: 6, name: "Frank", math: 70, physics: 75, chemistry: 80 },
    { id: 7, name: "Grace", math: 80, physics: 85, chemistry: 90 },
    { id: 8, name: "Hannah", math: 85, physics: 90, chemistry: 75 },
    { id: 9, name: "Isaac", math: 90, physics: 80, chemistry: 85 },
    { id: 10, name: "Jack", math: 75, physics: 85, chemistry: 80 },
    { id: 11, name: "Katie", math: 85, physics: 90, chemistry: 75 },
    { id: 12, name: "Liam", math: 70, physics: 80, chemistry: 90 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marks}>
        <Line dataKey="physics" />
        <Line dataKey="math" stroke="#531155" />
        <Line dataKey="chemistry" stroke="#996622" />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Dashboard;
