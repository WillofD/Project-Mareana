// CricketStatsChart.js
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import playerStatsData from '../playerStatsData '; // Adjust the path based on your file structure

const CricketGroupBar = () => {
  // Grouping data by opponent
  const groupedData = playerStatsData.reduce((acc, match) => {
    const opponent = match.opponent;
    if (!acc[opponent]) {
      acc[opponent] = [];
    }
    acc[opponent].push(match);
    return acc;
  }, {});

  // Transforming data for the grouped bar chart
  const chartData = Object.keys(groupedData).map((opponent) => ({
    opponent,
    totalRuns: groupedData[opponent].reduce((sum, match) => sum + match.runs, 0),
  }));

  return (
    <div className="w-full h-[45vh]">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mt-8 md:mb-4 lg:mb-4 xl:mb-4">Virat Kohli's Runs Against Each Opponent</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="opponent" />
          <YAxis />
          <Tooltip />
      
          <Bar dataKey="totalRuns" fill="rgba(75,192,192,0.8)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CricketGroupBar;
