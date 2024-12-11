import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Monthly Income Data
const data = [
  { month: 'Jan', income: 1000 },
  { month: 'Feb', income: 1000 },
  { month: 'Mar', income: 2000 },
  { month: 'Apr', income: 3000 },
  { month: 'May', income: 4000 },
  { month: 'Jun', income: 5000 },
  { month: 'Jul', income: 8000 },
  { month: 'Aug', income: 5000 },
  { month: 'Sep', income: 4500 },
  { month: 'Oct', income: 3500 },
  { month: 'Nov', income: 2500 },
  { month: 'Dec', income: 1500 },
];

// MonthlyIncomeBarChart Component
const MonthlyIncomeBarChart = () => {
  return (
    <div style={{ width: '60%', height: 300, padding:'0 2rem 2rem' }}>
      <h3 style={{ margin:'5px 0 0', }}>Overview</h3>
      <span>Monthly Earnings</span>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
       
          <Bar dataKey="income" fill="#8884d8" barSize={20} style={{borderRadius:'8px'}} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyIncomeBarChart;
