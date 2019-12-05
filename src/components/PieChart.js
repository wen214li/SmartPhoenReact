import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';

const COLORS = ['#1d3081','#2b5a9b', '#3884b6', '#47aed0', '#84c9cf', '#c6e3cb', '#f3f7d7'];

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
              data.map((key, index) => <Cell fill={COLORS[index % COLORS.length]} key={index}/>)
              }
            </Pie>
            <Tooltip/>
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </React.Fragment>
    );
  }


