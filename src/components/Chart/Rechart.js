import React from 'react';
import './ReChart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const ReChart = ({ data }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">Roas</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Line type="monoton" dot={false} dataKey="roas" stroke="#4FADF7" />
          <Line type="monoton" dot={false} dataKey="click" stroke="#85DA47" />
          <CartesianGrid stroke="#EDEFF1" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReChart;
