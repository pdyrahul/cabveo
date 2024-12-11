import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Customer Data
const data = [
  { name: 'New Customers', value: 400 },
  { name: 'Returning Customers', value: 300 },
  { name: 'Referred Customers', value: 200 },
];

// Colors for the Pie Chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

class NewCustomerPieChart extends PureComponent {
  render() {
    return (
      <div style={{ width: '33%', height: 300 , padding:'1rem'}}>
        <h3 style={{ margin:'5px 0 0' }}>Mobile App</h3>
        <p>Download this month</p>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default NewCustomerPieChart;
