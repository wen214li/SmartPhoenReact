import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import { PieChart, Pie, Cell, LabelList, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MyPieChart(props) {
    const theme = useTheme();
    const [data, setData] = useState([]);
  
    useEffect(
      () => {
        console.log(props.dataURL);
        const loadData = async () => {
          const response = await axios.get(props.dataURL);
          console.log(response.data);
          setData(response.data);
          
        };
        loadData()
        
      },[props.dataURL]
    );
  
    return (
      <React.Fragment>
        <Title>Market Share</Title>
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie isAnimationActive={false} data={data} 
            nameKey="Brand" dataKey="Percentage"  
            outerRadius={80} fill="#8884d8" label={true}>
              {
              data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
            <Tooltip/>
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }