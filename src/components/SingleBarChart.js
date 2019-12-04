import React, { useState, useEffect }  from 'react';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from './Title';
import Typography from '@material-ui/core/Typography';


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

export default function MySingleBarChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState({});
  const [dataTitle, setDataTitle] = useState('Title');
  
  useEffect(
    () => {
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        setData(response.data[0].data);
        setDataKey(response.data[0].dataKey);
        setDataTitle(response.data[0].title);
      };
      loadData()
      //console.log("datakey", dataKey['key0']);
    },[props.dataURL]
  );
  return (
    <React.Fragment>
      <Title>{dataTitle}</Title>
      {/* <Title>Share of smartphone by operating system (percentage)</Title> */}
      <ResponsiveContainer>
        <BarChart width={500} height={300} data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 10}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}/>
          <YAxis stroke={theme.palette.text.secondary}/>
          <Tooltip/>
          <Legend />
          <Bar dataKey={dataKey['key0']} fill="#32a0fa" label/>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}