// BattingAverageTrend.js
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import playerStatsData from "../playerStatsData "; // Adjust the path based on your file structure

const BattingAverageTrend = () => {
  // Calculate batting average for each match
  const battingAverageData = playerStatsData.map((match, index) => {
    const totalRuns = match.total;
    const dismissals = index + 1; // Assuming every match is a dismissal

    return {
      date: match.date,
      battingAverage: dismissals > 0 ? totalRuns / dismissals : 0,
    };
  });

  return (
    <div className="w-full h-[45vh]">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mt-8  md:mb-4 lg:mb-4 xl:mb-4">
        Kohli's Batting Average Trend Over Time
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={battingAverageData} className="w-full h-full">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="battingAverage"
            stroke="rgba(75,192,192,1)"
            strokeWidth={2}
            dot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BattingAverageTrend;
