import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';



export default function MyLineChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);

  useEffect(
    () => {
      console.log(props.dataURL);
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        setData(response.data);
        
      };
      loadData()
      
    },[props.dataURL]
  );

  return (
    <React.Fragment>
      <Title>Global smartphone shipments by manufacturer 2015-2019</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Axis Label
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="Samsung" stroke="#0366fc" dot={false} />
          <Line type="monotone" dataKey="Apple" stroke="#485769" dot={false} />
          <Line type="monotone" dataKey="Huawei" stroke="#ba280b" dot={false} />
          <Line type="monotone" dataKey="Xiaomi" stroke="#de8226" dot={false} />
          <Line type="monotone" dataKey="OPPO" stroke="#00992e" dot={false} />
          <Tooltip/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
