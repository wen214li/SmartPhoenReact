import React, { useState, useEffect }  from 'react';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import Title from './Title';


export default function MyBarChart(props) {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [dataKey, setDataKey] = useState({});
  const [dataTitle, setDataTitle] = useState('Title');
  
  useEffect(
    () => {
      const loadData = async () => {
        const response = await axios.get(props.dataURL);
        setData(response.data.data);
        setDataKey(response.data.dataKey);
        setDataTitle(response.data.title);
      };
      loadData()
      
    },[props.dataURL]
  );

  return (
    <React.Fragment>
      <Title>{dataTitle}</Title>
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="time" stroke={theme.palette.text.secondary}/>
          <YAxis stroke={theme.palette.text.secondary}/>
          <Tooltip/>
          <Legend />
          <Bar dataKey={dataKey.key0} fill="#32a0fa" label/>
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}