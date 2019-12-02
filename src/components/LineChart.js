import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from './Title';



export default function MyLineChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState({});
  const [dataTitle, setDataTitle] = useState('title');

  useEffect(
    () => {
      console.log(props.dataURL);
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        //console.log(response.data.dataKey);
        setDataTitle(response.data.title);
        setDataKey(response.data.dataKey);
        setData(response.data.data);
      };
      loadData()
      
    },[props.dataURL]
  );


  return (
    <React.Fragment>
      <Title>{dataTitle}</Title>
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
          <CartesianGrid strokeDasharray="3 3"/>
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
          <Line type="monotone" dataKey={dataKey.key0} stroke="#0366fc" dot={false} />
          <Line type="monotone" dataKey={dataKey.key1} stroke="#485769" dot={false} />
          <Line type="monotone" dataKey={dataKey.key2} stroke="#ba280b" dot={false} />
          <Line type="monotone" dataKey={dataKey.key3} stroke="#de8226" dot={false} />
          <Line type="monotone" dataKey={dataKey.key4} stroke="#00992e" dot={false} />
          <Tooltip/>
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
