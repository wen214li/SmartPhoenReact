import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, LabelList, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';

const COLORS = ['#64b2ed', '#ff6969','#ebe283', '#7acf7e', '#84e0e3', '#9a7ee6', '#e67ac7'];

export default function MyPieChart(props) {
    const [data, setData] = useState([]);
    const [dataTitle, setDataTitle] = useState('Title');

    useEffect(
      () => {
        
        const loadData = async () => {
          const response = await axios.get(props.dataURL);
          setData(response.data[0].data);
          setDataTitle(response.data[0].title);
        };
        loadData()
        
      },[props.dataURL]
    );
  
    return (
      <React.Fragment>
        <Title>{dataTitle}</Title>
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie isAnimationActive={true} data={data} 
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


