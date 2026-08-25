import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { generateSummaries } from "../../utils/home";

function DetailsChart() {
  let summaries = generateSummaries({
    productsLength: 30,
    ticketsLength: 15,
    adminsLength: 4,
    usersLength: 20,
  });

  const chartData = summaries.map((item) => ({
    name: item.title,
    value: item.value,
  }));



  return (
    <div className="w-full rounded-md bg-[var(--bg-card)] border-[1px] border-[var(--border-light)] p-8 mt-12 flex flex-col gap-6">
      <h3 className="text-lg text-[var(--text-secondary)]">آمار کلی داشبورد</h3>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1a1a22"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "#555", fontSize: 15,marginTop: "15px" }}
              axisLine={{ stroke: "#1a1a22" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#555", fontSize: 15 ,marginRight: "15px"}}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "#1a1a22",
                border: "0.5px solid #2a2a32",
                borderRadius: "8px",
                color: "#d0d0d0",
                fontSize: "12px",
              }}
              cursor={{ fill: "#ffffff08" }}
            />
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              barSize={80}
              fill="#05df72"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DetailsChart;
