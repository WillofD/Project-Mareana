// YearlyPerformanceOverview.js
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import playerStatsData from '../playerStatsData '; // Adjust the path based on your file structure

const YearlyPerformanceOverview = () => {

  const groupedData = playerStatsData.reduce((acc, match) => {
    const year = new Date(match.date).getFullYear();

    if (!acc[year]) {
      acc[year] = 0;
    }

    acc[year] += match.runs;

    return acc;
  }, {});

  const chartData = Object.keys(groupedData).map((year) => ({
    year,
    runs: groupedData[year],
  }));

  return (
    <div className="w-full h-[50vh] pt-8">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mt-8 md:mb-4 lg:mb-4 xl:mb-4">Kohli's Yearly Performance Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
 
          <Line type="monotone" dataKey="runs" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearlyPerformanceOverview;
