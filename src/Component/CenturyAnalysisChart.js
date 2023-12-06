// CricketStatsChart.js
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import playerStatsData from '../playerStatsData '; // Adjust the path based on your file structure

const CenturyAnalysisChart = () => {
  // Filtering centuries scored by Kohli
  const centuriesData = playerStatsData.filter((match) => match.runs === 100);

  // Grouping centuries data by year and opponent
  const groupedData = centuriesData.reduce((acc, match) => {
    const year = new Date(match.date).getFullYear();
    const opponent = match.opponent;

    if (!acc[year]) {
      acc[year] = {};
    }

    if (!acc[year][opponent]) {
      acc[year][opponent] = 0;
    }

    acc[year][opponent] += 1;

    return acc;
  }, {});

  // Transforming data for the bar chart
  const chartData = Object.keys(groupedData).map((year) => ({
    year,
    ...groupedData[year],
  }));

  return (
    <div className="w-full h-[45vh]">

<h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mt-8 md:mb-4 lg:mb-4 xl:mb-4">Centuries Scored by Virat Kohli</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
      
          {Object.keys(groupedData[Object.keys(groupedData)[0]]).map((opponent, index) => (
            <Bar key={index} dataKey={opponent} stackId="a" fill={`rgba(75,192,192,${0.2 + index * 0.2})`} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CenturyAnalysisChart;
