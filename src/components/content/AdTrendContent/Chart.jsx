import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart>
        <XAxis dataKey="name" stroke="5550bd" />
        <Line type="monotone" dataKey="ROAS" />
        <Tooltip />
        <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
