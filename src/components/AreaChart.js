import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, AreaChart, Area,ResponsiveContainer} from 'recharts';
import Title from './Title';

export default function MyAreaChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState({});
  const [dataTitle, setDataTitle] = useState('title');

  useEffect(
    () => {
      //console.log(props.dataURL);
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        //console.log(response.data.dataKey);
        setDataTitle(response.data[0].title);
        setDataKey(response.data[0].dataKey);
        setData(response.data[0].data);
      };
      loadData()
      
    },[props.dataURL]
  );

  return (
    <React.Fragment>
      <Title>{dataTitle}</Title>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey={dataKey['key0']} stroke="#9abdc2" fill="#9abdc2" />
        </AreaChart>

      </ResponsiveContainer>
    </React.Fragment>
  );
}
