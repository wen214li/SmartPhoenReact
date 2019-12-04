import React, { useState, useEffect }  from 'react';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from './Title';

/* Data Format
[
  {name: 'Page A', uv: 4000, pv: 2400},
  {name: 'Page B', uv: 3000, pv: 1398},
  {name: 'Page C', uv: 2000, pv: 9800},
  {name: 'Page D', uv: 2780, pv: 3908},
  {name: 'Page E', uv: 1890, pv: 4800},
  {name: 'Page F', uv: 2390, pv: 3800},
  {name: 'Page G', uv: 3490, pv: 4300},
];
*/

export default function StackedBarChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState([]);
  
  useEffect(
    () => {
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        //console.log("stacked", response.data)
        setData(response.data[0].data);
        setDataKey(response.data[0].dataKey);
      };
      loadData()
      
    },[props.dataURL]
  );

  return (
    <React.Fragment>
      <Title>Share of smartphone by operating system (percentage)</Title>
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}
          barCategoryGap={35}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="year" stroke={theme.palette.text.secondary}/>
          <YAxis stroke={theme.palette.text.secondary}/>
          <Tooltip/>
          <Legend />
          <Bar dataKey={dataKey.key0} stackId="a" fill="#1457c4" />
          <Bar dataKey={dataKey.key1} stackId="a" fill="#ff7878" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}