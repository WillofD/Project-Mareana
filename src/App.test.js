// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CricketStatsChart from './Component/CricketStatsChart';
import CricketGroupBar from './Component/CricketGroupBar';
import BattingAverageTrend from './Component/BattingAverageTrend';
import FormatComparison from './Component/FormatComparison';
import StrikeRateVariation from './Component/StrikeRateVariation';
import YearlyPerformanceOverview from './Component/YearlyPerformanceOverview';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders the title correctly', () => {
    const wrapper = shallow(<App />);
    const title = wrapper.find('.toolbar h1').text();
    expect(title).toBe('Kohli Records');
  });

  it('renders CricketStatsChart component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CricketStatsChart).exists()).toBe(true);
  });

  it('renders CricketGroupBar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CricketGroupBar).exists()).toBe(true);
  });

  it('renders BattingAverageTrend component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BattingAverageTrend).exists()).toBe(true);
  });

  it('renders FormatComparison component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(FormatComparison).exists()).toBe(true);
  });

  it('renders StrikeRateVariation component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(StrikeRateVariation).exists()).toBe(true);
  });

  it('renders YearlyPerformanceOverview component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(YearlyPerformanceOverview).exists()).toBe(true);
  });
});
