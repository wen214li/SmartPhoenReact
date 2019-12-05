import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '@material-ui/core/styles';
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area,ResponsiveContainer} from 'recharts';
import Title from './Title';

export default function MyAreaChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
//   const [dataKey, setDataKey] = useState({'key0':'0','key1':'0'});
  const [dataTitle, setDataTitle] = useState('title');

  useEffect(
    () => {
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        setDataTitle(response.data[0].title);
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
          <YAxis domain={[0,400]} stroke={theme.palette.text.secondary}/>
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey='sales' stroke="#9abdc2" fill="#9abdc2" />
        </AreaChart>

      </ResponsiveContainer>
    </React.Fragment>
  );
}
