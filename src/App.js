import React from 'react';
import './App.css';
import BattingAverageTrend from './Component/BattingAverageTrend';
import CricketGroupBar from './Component/CricketGroupBar';
import CricketStatsChart from './Component/CricketStatsChart';
import FormatComparison from './Component/FormatComparison';
import StrikeRateVariation from './Component/StrikeRateVariation';
import YearlyPerformanceOverview from './Component/YearlyPerformanceOverview';

function App() {
  return (
    <div className="app-container   p-4">
      <div className="toolbar text-center bg-teal-500 bg-opacity-80 text-white py-2">
        <h1 className="text-3xl font-bold">Kohli Records</h1>
      </div>

      <div className="charts-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="chart flex-1 mb-4">
          <CricketStatsChart />
        </div>
        <div className="chart flex-1 mb-4">
          <CricketGroupBar />
        </div>
        <div className="chart flex-1 mb-4">
          <BattingAverageTrend />
        </div>
        <div className="chart flex-1 mb-4">
          <FormatComparison />
        </div>
        <div className="chart flex-1 mb-4">
          <StrikeRateVariation />
        </div>
        <div className="chart flex-1 mb-4">
          <YearlyPerformanceOverview />
        </div>
      </div>
    </div>
  );
}

export default App;
