// FormatComparison.js
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import playerStatsData from "../playerStatsData "; // Adjust the path based on your file structure

const FormatComparison = () => {
  // Ensure the 'match' field is included in the data
  if (!playerStatsData.every((match) => match.match)) {
    console.error("The 'match' field is missing in the data.");
    return null;
  }

  // Filter data for each format
  const odiData = playerStatsData.filter((match) => match.match === "ODI");
  const testMatchData = playerStatsData.filter(
    (match) => match.match === "Test"
  );
  const t20Data = playerStatsData.filter((match) => match.match === "T20");

  // Function to calculate total runs for each format
  const calculateTotalRuns = (data) => {
    return data.reduce((total, match) => total + match.runs, 0);
  };

  const totalRuns = {
    ODI: calculateTotalRuns(odiData),
    Test: calculateTotalRuns(testMatchData),
    T20: calculateTotalRuns(t20Data),
  };

  const chartData = [
    { name: "ODI", value: totalRuns.ODI },
    { name: "Test", value: totalRuns.Test },
    { name: "T20", value: totalRuns.T20 },
  ];

  // Define custom colors for each format
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="w-full h-[45vh]">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mt-8 md:mb-4 lg:mb-4 xl:mb-4">
        Kohli's Performance Comparison in Different Formats
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={200}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FormatComparison;
