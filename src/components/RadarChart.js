import React, { useState, useEffect } from 'react';
import Title from './Title';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, Legend, Tooltip, ResponsiveContainer
} from 'recharts';

/*
Sample JSON data:
{
  "res":[
    {
      "subject": "Price",
      "iPhone XR": 1,
      "Galaxy J4+": 0.46,
      "Mate 20 Pro": 0.89,
      "fullMark": 1
    },
    {
      "subject": "Weight",
      "iPhone XR": 1,
      "Galaxy J4+": 0.92,
      "Mate 20 Pro": 0.98,
      "fullMark": 1
    },
    {
      "subject": "Battery",
      "iPhone XR": 0.7,
      "Galaxy J4+": 0.78,
      "Mate 20 Pro": 0.99,
      "fullMark": 1
    },
    {
      "subject": "Screen",
      "iPhone XR": 0.95,
      "Galaxy J4+": 0.94,
      "Mate 20 Pro": 1,
      "fullMark": 1
    },
    {
      "subject": "Camera",
      "iPhone XR": 0.25,
      "Galaxy J4+": 0.27,
      "Mate 20 Pro": 0.83,
      "fullMark": 1
    }
  ]
}
*/

function MyRadarChart() {
  const theme = useTheme();
  const [data, setData] = useState([]);

  useEffect(
    () => {
      const loadData = async () => {
        const response = await axios.get('http://localhost:4000/radar');
        
        //console.log(response.data);
        setData(response.data);
        
      };
      loadData()
      
    },[]
  );

  return (
    <React.Fragment>
      <Title>Metrics Comparison</Title>
      <ResponsiveContainer>
        <RadarChart data={data} >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke={theme.palette.text.secondary}/>
          <PolarRadiusAxis angle={90} domain={[0, 1]} stroke={theme.palette.text.secondary}/>
          <Radar name="iPhone 11 Pro" dataKey="iPhone 11 Pro" stroke="#8884d8" fill="#8884d8" fillOpacity={0.05} />
          <Radar name="Samsung Galaxy Note10+" dataKey="Samsung Galaxy Note10+" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.05} />
          <Radar name="Huawei Mate 30 Pro" dataKey="Huawei Mate 30 Pro" stroke="#820a00" fill="#820a00" fillOpacity={0.05} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default MyRadarChart;