// StrikeRateVariation.js
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import playerStatsData from '../playerStatsData '; // Adjust the path based on your file structure

const StrikeRateVariation = () => {
  // Calculate strike rate for each match assuming 100 balls faced
  const strikeRateData = playerStatsData.map((match) => {
    const runs = match.runs;
    const ballsFaced = 100; // Assuming Kohli faced 100 balls in every match

    return {
      opponent: match.opponent,
      strikeRate: (runs / ballsFaced) * 100,
    };
  });

  return (
    <div className="w-full h-[45vh]">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mt-8 md:mb-4 lg:mb-4 xl:mb-4">Kohli's Strike Rate Variation Against Different Opponents (Assuming 100 Balls Faced in Every Match)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={strikeRateData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="opponent" />
          <YAxis />
          <Tooltip />
   
          <Bar dataKey="strikeRate" fill="rgba(75,192,192,0.8)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StrikeRateVariation;
